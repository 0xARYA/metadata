import {GeneratorData} from '../types/generators';

export interface BrowserData {
  referrer: string;
  userAgent: string;
  location: string;
  webDriver: boolean;
}

export const generate = (data: GeneratorData): BrowserData => ({
  referrer: data.referrer,
  userAgent: data.userAgent,
  location: data.location,
  webDriver: false,
});
