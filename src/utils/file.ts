import fs = require('fs');

export function readFile(path: string): string {
  return fs.readFileSync(path).toString();
}

export function writeFile(path: string, text: string): void {
  fs.writeFileSync(path, text);
}
