import {FastifyInstance, Plugin} from 'fastify';
import * as http from 'http';
import fastifyPlugin from 'fastify-plugin';
import {GenericProvider} from './providers/generic';
import {ConfigProvider} from './providers/config';

const pluginName = 'featureFlags';

declare namespace FastifyFeatureSwitchPlugin {
  export interface Plugin {
    providers: {[key: string]: typeof GenericProvider};
    /**
     * Check if feature is enabled
     * @param feature feature name
     * @returns true if feature enabled
     */
    isEnabled(feature: string): Promise<boolean>;
    /**
     * Check if feature is enabled
     * @param feature feature name
     * @throws Error if feature is not enabled
     * @returns true if feature enabled
     */
    checkEnabled(feature: string): void;
  }

  export interface Options {
    providers: Array<GenericProvider>;
  }
}

const fastifyFeatureSwitch: Plugin<
  http.Server,
  http.IncomingMessage,
  http.ServerResponse,
  FastifyFeatureSwitchPlugin.Options
> = async function eventlogClient(
  fastify: FastifyInstance,
  options: FastifyFeatureSwitchPlugin.Options
) {
  const {providers} = options;

  const isEnabled = async (feature: string): Promise<boolean> => {
    const result = await Promise.all(
      providers.map((provider) => provider.isEnabled(feature))
    );
    return result.reduce((prev, curr) => prev && curr);
  };

  const checkEnabled = async (feature: string): Promise<void> => {
    await Promise.all(
      providers.map((provider) => provider.checkEnabled(feature))
    );
  };

  const plugin: FastifyFeatureSwitchPlugin.Plugin = {
    providers: {
      ConfigProvider: ConfigProvider,
    },
    isEnabled,
    checkEnabled,
  };

  fastify.decorate(pluginName, plugin);
};

declare module 'fastify' {
  interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
  > {
    /**
     * Google cloud storage plugin
     */
    [pluginName]: FastifyFeatureSwitchPlugin.Plugin;
  }
}

const FastifyFeatureSwitchPlugin = fastifyPlugin(fastifyFeatureSwitch, {
  fastify: '>=1.0.0',
  name: 'fastify-feature-switch',
});

export = FastifyFeatureSwitchPlugin;
