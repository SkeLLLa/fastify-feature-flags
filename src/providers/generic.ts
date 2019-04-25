import fastify from 'fastify';

export declare namespace GenericProvider {
  interface Options {
    fastify: fastify.FastifyInstance;
  }
}

export abstract class GenericProvider {
  protected options: GenericProvider.Options;
  /**
   * @param options Provider options
   */
  constructor(options: GenericProvider.Options) {
    this.options = options;
  }
  /**
   * Checks if feature is enabled
   * @param _feature feature name
   * @param _context context used in feature check
   */
  async isEnabled(_feature: string, _context?: any): Promise<boolean> {
    return false;
  }
}
