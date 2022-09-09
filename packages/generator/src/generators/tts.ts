import crypto from 'crypto';

export interface TTSData {
  timeToSubmit: number;
}

export const generate = (): TTSData => ({
  timeToSubmit: crypto.randomInt(11000, 12500),
});
