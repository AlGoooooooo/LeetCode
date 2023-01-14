/**
 * @param {string} s
 * @return {boolean}
 */
const pairs = {
  "(": ")",
  "[": "]",
  "{": "}"
}

var isValid = function (s) {
  
  let stack = []
  
  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]]) {
      stack.push(s[i])
    } else if (pairs[stack.pop()] !== s[i]) {
      return false
    }
  }
  return stack.length === 0
};
