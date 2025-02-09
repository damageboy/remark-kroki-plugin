declare type OptionString = string | undefined;
export interface KrokiOptions {
    krokiBase: string;
    imgDir: string;
    imgRefDir: string;
    lang: string;
    langAliases: string[];
    verbose: boolean;
}
export declare function extractParam(name: string, input: string): OptionString;
export declare const transform: (options: KrokiOptions) => (tree: any, vfile: any) => Promise<void>;
export {};
