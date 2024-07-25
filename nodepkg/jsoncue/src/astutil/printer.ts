export class Printer {
  #parts: string[] = [];

  #identNum = 0;

  get written() {
    return this.#parts.length > 0;
  }

  withIdent(action: () => void) {
    this.#identNum++;
    action();
    this.#identNum--;
  }

  tab() {
    this.space(this.#identNum, "  ");
  }

  space(n: number, char = " ") {
    if (n == 0) {
      return;
    }
    this.write(new Array(n).fill(char).join(""));
  }

  break() {
    this.write("\n");
  }

  write(code: string) {
    this.#parts.push(code);
  }

  toString(): string {
    return this.#parts.join("");
  }
}
