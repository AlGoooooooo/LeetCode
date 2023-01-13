const isValid = (s: string): boolean => {
  if (s.length % 2 === 1) return false;

  const hashTable = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const parenthesis = s[i];

    if (hashTable[parenthesis]) {
      stack.push(parenthesis);
    } else {
      if (parenthesis !== hashTable[stack.pop()]) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};
