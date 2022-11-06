/**
 * This function breaks up camel casing with a space
 * @param {string} string A string 
 * @returns The string with camel casing broken up, i.e. camelCasing => camel Casing
 */
function solution(string) {
    return string.replace(/([A-Z])/g, " $1").trim()
}