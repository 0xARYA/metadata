export interface AutomationData {
    automation: {
        wd: {
            properties: {
                document: true[];
                window: true[];
                navigator: true[];
            };
        };
        phantom: {
            properties: {
                window: true[];
            };
        };
    };
}
export declare const generate: () => AutomationData;
