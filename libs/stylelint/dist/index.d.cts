import { Config } from 'stylelint';

type ExtendsConfig = Config & {
    resolveNestedSelectors?: boolean;
};

declare const config: ExtendsConfig;

export { config, config as default };
