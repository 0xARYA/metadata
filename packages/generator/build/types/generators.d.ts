import * as generators from '../generators';
import { UnionMerge } from './utilities';
export interface GeneratorData {
    start: number;
    userAgent: string;
    location: string;
    referrer: string;
}
export declare type Generator = typeof generators[keyof typeof generators];
export declare type GeneratedData<T extends Generator> = ReturnType<T['generate']>;
export declare type MetadataPayload = UnionMerge<GeneratedData<Generator>>;
