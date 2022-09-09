export interface VersionData {
  version: string;
}

export const generate = (): VersionData => ({
  version: '4.0.0',
});
