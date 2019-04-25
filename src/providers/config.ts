import {GenericProvider} from './generic';
import config from 'config';

export declare namespace ConfigProvider {
  interface Options extends GenericProvider.Options {
    /**
     * Config prefix for flags
     */
    prefix: string;
  }
}

export class ConfigProvider extends GenericProvider {
  private conf: {[key: string]: boolean | string};
  constructor(options: ConfigProvider.Options) {
    super(options);
    this.conf = config.get(`${options.prefix}`);
  }

  async isEnabled(feature: string): Promise<boolean> {
    return (
      this.conf[feature] === 'true' ||
      this.conf[feature] === true ||
      this.conf[feature] === '1'
    );
  }
}
