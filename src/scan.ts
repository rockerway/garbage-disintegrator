export function getTargets(content: string, specifiedContentRegexp: RegExp) {
  return content.match(specifiedContentRegexp);
}

export function getNonRepeatedTargets(
  content: string,
  specifiedContentRegexp: RegExp
) {
  let input = content;
  const targets = [];

  while (true) {
    const found = input.match(specifiedContentRegexp);

    if (!found) {
      break;
    }

    const matched = found[0];

    targets.push(matched);
    input = input.split(matched).join('');
  }

  return targets;
}
