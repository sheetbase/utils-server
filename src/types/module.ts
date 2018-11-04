export interface Module {
    o2a<Obj, K extends keyof Obj, P extends Obj[K]>(
        object: Obj, keyName?: string,
    ): Array<(P extends {[key: string]: any} ? P: {value: P}) & {$key: string}>;
    a2o<Obj>(array: Obj[], keyName?: string): {[$key: string]: Obj};
    uniqueId(length?: number, startWith?: string): string;
    honorData<Obj>(data?: Obj): ({[K in keyof Obj]: any});
}
