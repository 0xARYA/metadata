import crypto from 'crypto';

export interface HistoryData {
  history: {length: number};
}

export const generate = (): HistoryData => ({
  history: {
    length: crypto.randomInt(5, 15),
  },
});
