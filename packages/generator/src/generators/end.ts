import crypto from 'crypto';

export interface EndData {
  end: number;
}

export const generate = (): EndData => ({
  end: crypto.randomInt(20000, 30000),
});
