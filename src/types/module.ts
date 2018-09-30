export interface IUtilsModule {
    o2a: {(object: {[key: string]: any}, keyName?: string): any[]};
    a2o: {(array: any[], keyName?: string): {[key: string]: any}};
    uid: {(length?: number, startWith?: string)};
}