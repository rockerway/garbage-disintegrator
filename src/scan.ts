export function getTargets(content: string, specifiedContentRegexp: RegExp) {
  return content.match(specifiedContentRegexp);
}

export function getNonRepeatedTargets(
  content: string,
  specifiedContentRegexp: RegExp
) {
  const targets = [];

  while (true) {
    const found = content.match(specifiedContentRegexp);

    if (!found) {
      break;
    }

    let matched = found[0];

    targets.push(matched);
    content = content.split(matched).join('');
  }

  return targets;
}
