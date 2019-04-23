import {FeatureError} from '../feature-error';
export {FeatureError} from '../feature-error';

export abstract class GenericProvider {
  protected options: any;
  /**
   * @param options Provider options
   */
  constructor(options?: any) {
    this.options = options;
  }
  /**
   * Checks if feature is enabled
   * @param _feature feature name
   * @param _args any other options
   */
  async isEnabled(_feature: string, ..._args: Array<any>): Promise<boolean> {
    return false;
  }
  /**
   * Checks if feature is enabled
   * @param feature feature name
   * @param args any other options
   * @throws FeatureError
   */
  async checkEnabled(feature: string, ...args: Array<any>): Promise<void> {
    const result = await this.isEnabled(feature, ...args);
    if (!result) {
      throw new FeatureError('Feature disabled');
    }
    return;
  }
}
