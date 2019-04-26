import {GenericProvider} from './generic';

export declare namespace EnvProvider {
  interface Options {
    /**
     * Prefix for env var filtering
     */
    prefix?: string;
  }
}

export class EnvProvider extends GenericProvider {
  private conf: {[key: string]: string | undefined};
  constructor(options: EnvProvider.Options) {
    super(options);
    const {prefix} = options;

    if (typeof prefix === 'string') {
      Object.keys(process.env)
        .filter((key) => {
          return key.startsWith(prefix);
        })
        .forEach((key) => {
          this.conf[key] = process.env[key];
        });
    } else {
      this.conf = process.env;
    }
  }

  async isEnabled(feature: string): Promise<boolean> {
    return this.conf[feature] === 'true' || this.conf[feature] === '1';
  }
}
