import fastify from 'fastify';

export abstract class GenericProvider {
  protected options: any;
  protected fastify: fastify.FastifyInstance;
  protected onFastifyAttached(): void {}
  /**
   * @param options Provider options
   */
  constructor(options: any) {
    this.options = options;
  }

  /**
   * Attach fastify instance to provider
   * @param f fastify instance
   */
  attachFastify(f: fastify.FastifyInstance): void {
    this.fastify = f;
    this.onFastifyAttached();
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
