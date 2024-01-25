import {Type, TypeWrapper} from "./Type";

export function pattern(pattern: RegExp, msg?: string) {
    return <T extends Type<string, any>>(type: T): Type<string, any> => {
        return TypeWrapper.refine(type, (value) => {
            if (pattern.test(value)) {
                return true
            }
            return msg ?? `Expected a ${type.type} matching \`/${pattern.source}/\` but received "${value}"`
        }, {
            pattern,
        });
    };
}

export function minimum(min: number, msg?: string) {
    return <T extends Type<number, any>>(type: T): Type<number, any> => {
        return TypeWrapper.refine(type, (value) => {
            if (value >= min) {
                return true
            }
            return msg ?? `Expected value great than or equal ${min}, but received "${value}"`
        }, {
            minimum: min,
        });
    };
}

export function exclusiveMinimum(min: number, msg?: string) {
    return <T extends Type<number, any>>(type: T): Type<number, any> => {
        return TypeWrapper.refine(type, (value) => {
            if (value > min) {
                return true
            }
            return (msg ?? `Expected value great than ${min}, but received "${value}"`)
        }, {
            minimum: min,
        });
    };
}

export function maximum(max: number, msg?: string) {
    return <T extends Type<number, any>>(type: T): Type<number, any> => {
        return TypeWrapper.refine(type, (value) => {
            if (value <= max) {
                return true
            }
            return (msg ?? `Expected value less than or equal ${max}, but received "${value}"`)
        }, {
            maximum: max,
        });
    };
}


export function exclusiveMaximum(max: number, msg?: string) {
    return <T extends Type<number, any>>(type: T): Type<number, any> => {
        return TypeWrapper.refine(type, (value) => {
            if (value < max) {
                return true
            }
            return msg ?? `Expected value less than or equal ${max}, but received "${value}"`
        }, {
            maximum: max,
        });
    };
}


export function multipleOf(target: number, msg?: string) {
    return <T extends Type<number, any>>(type: T): Type<number, any> => {
        return TypeWrapper.refine(type, (value) => {
            if (value % target == 0) {
                return true
            }
            return msg ?? `Expected value multiple of ${target}, but received "${value}"`
        }, {
            multipleOf: target,
        });
    };
}







