export interface BatteryData {
  battery: Record<string, never>;
}

export const generate = (): BatteryData => ({battery: {}});
