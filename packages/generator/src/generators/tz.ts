export interface TZData {
  timeZone: number;
}

export const generate = (): TZData => ({
  timeZone: -8,
});
