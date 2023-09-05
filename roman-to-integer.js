/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  // Mappings of all Roman Digits
  const mappings = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  // Mappings of special digits
  const reverseMappings = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
  };
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(reverseMappings).includes(`${s[i]}${s?.[i + 1]}`)) {
      result += reverseMappings[`${s[i]}${s?.[i + 1]}`];
      i++; // Skipping the next iteration
      continue;
    }
    result += mappings[s[i]];
  }
  return result;
};