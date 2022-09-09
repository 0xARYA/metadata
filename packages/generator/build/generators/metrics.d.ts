export interface MetricsData {
    metrics: {
        el: number;
        script: number;
        h: number;
        batt: number;
        perf: number;
        auto: number;
        tz: number;
        fp2: number;
        lsubid: number;
        browser: number;
        capabilities: number;
        gpu: number;
        dnt: number;
        math: number;
        tts: number;
        input: number;
        canvas: number;
        captchainput: number;
        pow: number;
    };
}
export declare const generate: () => MetricsData;
