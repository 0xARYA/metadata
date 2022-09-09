import * as generators from '../generators';

import {UnionMerge} from './utilities';

export interface GeneratorData {
  start: number;
  userAgent: string;
  location: string;
  referrer: string;
}

export type Generator = typeof generators[keyof typeof generators];

export type GeneratedData<T extends Generator> = ReturnType<T['generate']>;

export type MetadataPayload = UnionMerge<GeneratedData<Generator>>;
