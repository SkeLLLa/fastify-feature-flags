import {FastifyInstance, Plugin} from 'fastify';
import * as http from 'http';
import fastifyPlugin from 'fastify-plugin';
import {GenericProvider} from './providers/generic';
import {FeatureError} from './feature-error';

const PLUGIN_NAME = 'featureFlags';
const DEFAULT_ERROR_CODE = 500;

declare namespace FastifyFeatureFlagsPlugin {
  export interface Plugin {
    /**
     * Check if feature is enabled
     * @param feature feature name
     * @returns true if feature enabled
     */
    isEnabled(feature: string, context?: any): Promise<boolean>;
    /**
     * Check if feature is enabled and throws exception if not
     * @param feature feature name
     * @throws Error if feature is not enabled
     * @returns true if feature enabled
     */
    checkEnabled(feature: string, context?: any): void;
  }

  export interface Options {
    /**
     * Providers list
     */
    providers: Array<GenericProvider>;
    /**
     * Error code for checkEnabled
     */
    errorCode?: number;
  }
}

const fastifyFeatureSwitch: Plugin<
  http.Server,
  http.IncomingMessage,
  http.ServerResponse,
  FastifyFeatureFlagsPlugin.Options
> = async function featureFlags(
  fastify: FastifyInstance,
  options: FastifyFeatureFlagsPlugin.Options
) {
  const {providers, errorCode = DEFAULT_ERROR_CODE} = options;
  providers.forEach((provider) => {
    provider.attachFastify(fastify);
  });

  const isEnabled = async (
    feature: string,
    context?: any
  ): Promise<boolean> => {
    const result = await Promise.all(
      providers.map((provider) => provider.isEnabled(feature, context))
    );
    return result.reduce((prev, curr) => prev && curr);
  };

  const checkEnabled = async (
    feature: string,
    context?: any
  ): Promise<void> => {
    const result = await isEnabled(feature, context);
    if (!result) {
      const err = new FeatureError('Feature disabled');
      err.statusCode = errorCode;
      throw err;
    }
  };

  const plugin: FastifyFeatureFlagsPlugin.Plugin = {
    isEnabled,
    checkEnabled,
  };

  fastify.decorate(PLUGIN_NAME, plugin);
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
    [PLUGIN_NAME]: FastifyFeatureFlagsPlugin.Plugin;
  }
}

const FastifyFeatureFlagsPlugin = fastifyPlugin(fastifyFeatureSwitch, {
  fastify: '>=1.0.0',
  name: 'fastify-feature-flags',
});

export = FastifyFeatureFlagsPlugin;
