import {Unleash, initialize} from 'unleash-client';
import {GenericProvider} from './generic';
import {UnleashConfig} from 'unleash-client/lib/unleash';

export declare namespace UnleashProvider {
  interface Options extends UnleashConfig {}
}

export class UnleashProvider extends GenericProvider {
  private instance: Unleash;

  constructor(options: UnleashProvider.Options) {
    super(options);
  }

  onFastifyAttached() {
    this.instance = initialize(this.options);
    this.instance.on('error', this.fastify.log.error.bind(this.fastify));
    this.instance.on('warn', this.fastify.log.warn.bind(this.fastify));
    this.instance.on(
      'ready',
      this.fastify.log.info.bind(
        this.fastify,
        '[feature-flags]: Unleash provider ready'
      )
    );

    this.fastify.addHook('onClose', (_instance, done) => {
      this.instance.destroy();
      done();
    });
  }

  async isEnabled(feature: string, context?: any): Promise<boolean> {
    return this.instance.isEnabled(feature, context);
  }
}
