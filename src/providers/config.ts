import {GenericProvider} from './generic';
import config from 'config';

export declare namespace ConfigProvider {
  interface Options {
    path: string;
  }
}

export class ConfigProvider extends GenericProvider {
  constructor(options: ConfigProvider.Options) {
    super(options);
  }

  async isEnabled(feature: string): Promise<boolean> {
    return Boolean(config.get(`${this.options.path}.${feature}`));
  }
}
