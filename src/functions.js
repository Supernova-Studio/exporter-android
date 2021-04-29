/**
 * 
 * @param {string} text 
 * @param {string} indentationString 
 * 
 * @returns {string}
 */
function indentMultilineText(text, indentationString) {
    return text.trim().replaceAll("\n", "\n" + indentationString)
}

/**
 * 
 * @param {{name: string, isRoot: boolean, path: Array<string>}} tokenGroup 
 * 
 * @returns {Array<string>}
 */
function createFullTokenGroupPath(tokenGroup) {
    if (tokenGroup.isRoot) {
        return []
    } else {
        return tokenGroup.path.concat(tokenGroup.name)
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
    return lhs.concat(rhs)
}

/**
 * 
 * @param {Array<string>} array 
 * @param {string} separator 
 */
function arrayJoin(array, separator) {
    return array.join(separator)
}

 function groupFontsByFamily(fonts) {
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key].toLowerCase()] = rv[x[key].toLowerCase()] || []).push(x);
          return rv;
        }, {});
      };

    return groupBy(fonts, "family")
}

/**
 * 
 * @param {string} s
 */
function isDigit(c) {
    return c >= '0' && c <= '9';
}

Pulsar.registerFunction("indentMultilineText", indentMultilineText)
Pulsar.registerFunction("createFullTokenGroupPath", createFullTokenGroupPath)
Pulsar.registerFunction("arrayConcat", arrayConcat)
Pulsar.registerFunction("arrayJoin", arrayJoin)
Pulsar.registerFunction("groupFontsByFamily", groupFontsByFamily)
Pulsar.registerFunction("isDigit", isDigit)