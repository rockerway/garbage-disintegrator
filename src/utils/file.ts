import fs = require('fs');

export function readFile(path: string): string {
  return fs
    .readFileSync(path)
    .toString()
    .split('\n')
    .slice(0, -1)
    .join('\n');
}

export function writeFile(path: string, text: string): void {
  fs.writeFileSync(path, text);
}

export function appendTextToFile(path: string, text: string): void {
  fs.appendFileSync(path, text);
}
