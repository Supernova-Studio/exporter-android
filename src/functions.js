/**
 *
 * @param {string} text
 * @param {string} indentationString
 *
 * @returns {string}
 */
function indentMultilineText(text, indentationString) {
  return text
    .trim()
    .split("\n")
    .join("\n" + indentationString);
}

/**
 *
 * @param {{name: string, isRoot: boolean, path: Array<string>}} tokenGroup
 *
 * @returns {Array<string>}
 */
function createFullTokenGroupPath(tokenGroup) {
  if (tokenGroup.isRoot || tokenGroup.isNonVirtualRoot) {
    return [];
  } else {
    return tokenGroup.path.concat(tokenGroup.name);
  }
}

/**
 *
 * @param {Array<any>} lhs
 * @param {Array<any>} rhs
 *
 * @returns {Array<any>}
 */
function arrayConcat(lhs, rhs) {
  return lhs.concat(rhs);
}

/**
 *
 * @param {Array<string>} array
 * @param {string} separator
 */
function arrayJoin(array, separator) {
  return array.join(separator);
}

function groupFontsByFamily(fonts) {
  var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key].toLowerCase()] = rv[x[key].toLowerCase()] || []).push(x);
      return rv;
    }, {});
  };

  return groupBy(fonts, "family");
}

/**
 *
 * @param {string} s
 */
function isDigit(c) {
  return c >= "0" && c <= "9";
}

Pulsar.registerFunction("indentMultilineText", indentMultilineText);
Pulsar.registerFunction("createFullTokenGroupPath", createFullTokenGroupPath);
Pulsar.registerFunction("arrayConcat", arrayConcat);
Pulsar.registerFunction("arrayJoin", arrayJoin);
Pulsar.registerFunction("groupFontsByFamily", groupFontsByFamily);
Pulsar.registerFunction("isDigit", isDigit);

/**
 * Converts a hex color value to a long format suitable for Compose Color constructor
 * @param {string} hex The hex color value
 * @returns {string} The formatted color value
 */
function hexToComposeColor(hex) {
  const alpha = hex.substring(6, 2);
  const red = hex.substring(0, 2);
  const green = hex.substring(2, 2);
  const blue = hex.substring(4, 2);
  return `0x${alpha}${red}${green}${blue}L`;
}

/**
 * Converts font weight to Compose FontWeight value
 * @param {number} weight The font weight
 * @returns {string} The Compose FontWeight value
 */
function toComposeFontWeight(weight) {
  const weightMap = {
    100: "W100",
    200: "W200",
    300: "W300",
    400: "W400",
    500: "W500",
    600: "W600",
    700: "W700",
    800: "W800",
    900: "W900"
  };
  return weightMap[weight] || "W400";
}

Pulsar.registerFunction("hexToComposeColor", hexToComposeColor);
Pulsar.registerFunction("toComposeFontWeight", toComposeFontWeight);