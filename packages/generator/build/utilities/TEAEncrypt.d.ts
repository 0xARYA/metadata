export declare type TEAMaterial = [number, number, number, number];
declare const TEAEncrypt: (payload: string, material: TEAMaterial) => string;
export default TEAEncrypt;
