export interface CapabilitiesData {
    capabilities: {
        css: {
            textShadow?: 1;
            WebkitTextStroke?: 1;
            boxShadow?: 1;
            borderRadius?: 1;
            borderImage?: 1;
            opacity?: 1;
            transform?: 1;
            transition?: 1;
        };
        js: {
            audio: boolean;
            geolocation: boolean;
            localStorage: 'supported' | 'unsupported' | 'disabled';
            touch: boolean;
            video: boolean;
            webWorker: boolean;
        };
        elapsed: number;
    };
}
export declare const generate: () => CapabilitiesData;
