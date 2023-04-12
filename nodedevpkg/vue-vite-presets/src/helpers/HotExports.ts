import { getHash } from "./hash";

export class HotExports {
  private exports = new Map<string, { exported: string; id: string }>();

  constructor(private id: string) {
  }

  add(ident: string, local = ident) {
    this.exports.set(local, {
      id: getHash(`${this.id}#${ident}`),
      exported: ident
    });
  }

  wrap(code: string) {
    let callbackParams = ``;
    let callbackBlock = ``;

    this.exports.forEach(({ exported, id }, local) => {
      code += `
${local}.__hmrId = "${id}"

__VUE_HMR_RUNTIME__.createRecord(${local}.__hmrId, ${local})
`;

      callbackParams += `${exported}: __${exported},`;
      callbackBlock += `
__VUE_HMR_RUNTIME__.reload(__${exported}.__hmrId, __${exported})
`;
    });

    code += `
import.meta.hot?.accept(({${callbackParams}}) => {
  ${callbackBlock}
})
`;
    return code;
  }
}
