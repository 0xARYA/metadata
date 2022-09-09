import { GeneratorData } from '../types/generators';
export interface PerformanceData {
    performance: {
        timing: {
            connectStart: number;
            navigationStart: number;
            loadEventEnd: number;
            domLoading: number;
            secureConnectionStart: number;
            fetchStart: number;
            domContentLoadedEventStart: number;
            responseStart: number;
            responseEnd: number;
            domInteractive: number;
            domainLookupEnd: number;
            redirectStart: number;
            requestStart: number;
            unloadEventEnd: number;
            unloadEventStart: number;
            domComplete: number;
            domainLookupStart: number;
            loadEventStart: number;
            domContentLoadedEventEnd: number;
            redirectEnd: number;
            connectEnd: number;
        };
    };
}
export declare const generate: (data: GeneratorData) => PerformanceData;
