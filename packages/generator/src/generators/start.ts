import {GeneratorData} from '../types/generators';

export interface StartData {
  start: number;
}

export const generate = (data: GeneratorData): StartData => ({start: data.start});
