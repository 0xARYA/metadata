export interface PowData {
  token: {isCompatible: boolean; pageHasCaptcha: 1 | 0};
}

export const generate = (): PowData => ({
  token: {
    isCompatible: true,
    pageHasCaptcha: 0,
  },
});
