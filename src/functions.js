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

Pulsar.registerFunction("createFullTokenGroupPath", createFullTokenGroupPath)
Pulsar.registerFunction("arrayConcat", arrayConcat)
Pulsar.registerFunction("arrayJoin", arrayJoin)