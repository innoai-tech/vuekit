import {type Context, type Result, Type} from "./Type.ts";

export class TypeNull extends Type<null, { type: "null" }> {
    static create() {
        return new TypeNull({type: "null"});
    }

    override get type() {
        return "null";
    }

    override validator(value: unknown, _context: Context): Result {
        return Object.is(value, null);
    }
}