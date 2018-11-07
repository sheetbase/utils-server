export declare function o2a<Obj, K extends keyof Obj, P extends Obj[K]>(object: Obj, keyName?: string): Array<(P extends {
    [key: string]: any;
} ? P : {
    value: P;
}) & {
    $key: string;
}>;
export declare function a2o<Obj>(array: Obj[], keyName?: string): {
    [key: string]: Obj;
};
export declare function uniqueId(length?: number, startWith?: string): string;
export declare function honorData<Obj>(data?: Obj | any): ({
    [K in keyof Obj]: any;
});
