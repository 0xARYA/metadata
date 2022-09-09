import { GeneratorData } from '../types/generators';
export interface StartData {
    start: number;
}
export declare const generate: (data: GeneratorData) => StartData;
