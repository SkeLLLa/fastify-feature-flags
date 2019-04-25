import {Unleash, initialize} from 'unleash-client';
import {GenericProvider} from './generic';
import {UnleashConfig} from 'unleash-client/lib/unleash';

export declare namespace UnleashProvider {
  interface Options extends UnleashConfig, GenericProvider.Options {}
}

export class UnleashProvider extends GenericProvider {
  private instance: Unleash;
  constructor(options: UnleashProvider.Options) {
    super(options);
    const {fastify} = options;
    this.instance = initialize(options);
    this.instance.on('error', fastify.log.error);
    this.instance.on('warn', fastify.log.error);
    this.instance.on('ready', fastify.log.info);

    fastify.addHook('onClose', (_instance, done) => {
      this.instance.destroy();
      done();
    });
  }

  async isEnabled(feature: string, context?: any): Promise<boolean> {
    return this.instance.isEnabled(feature, context);
  }
}
