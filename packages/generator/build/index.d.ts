import { GeneratorData, MetadataPayload } from './types/generators';
export declare const generate: (generatorData: GeneratorData) => MetadataPayload;
export declare const encrypt: (metadataPayload: MetadataPayload) => string;
