export function getTargets(content: string, specifiedContentRegexp: string) {
  return content.match(new RegExp(specifiedContentRegexp, 'g'));
}

export function getNonRepeatedTargets(
  content: string,
  specifiedContentRegexp: string
) {
  let input = content;
  const regexp = new RegExp(specifiedContentRegexp, 'm');
  const targets = [];

  while (true) {
    const found = input.match(regexp);

    if (!found) {
      break;
    }

    const matched = found[0];

    targets.push(matched);
    input = input.split(matched).join('');
  }

  return targets;
}
