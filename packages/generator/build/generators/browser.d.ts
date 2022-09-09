import { GeneratorData } from '../types/generators';
export interface BrowserData {
    referrer: string;
    userAgent: string;
    location: string;
    webDriver: boolean;
}
export declare const generate: (data: GeneratorData) => BrowserData;
