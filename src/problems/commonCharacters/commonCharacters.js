// Given 2 input strings, output all the characters shared between the 2 strings.

const commonCharacters = (str1, str2) => {
  const str1Mapping = getMapping(str1);
  const str2Mapping = getMapping(str2);

  let commonCharacters = "";
  Object.keys(str1Mapping).forEach((ltr) => {
    if (str2Mapping[ltr]) {
      const min = Math.min(str1Mapping[ltr], str2Mapping[ltr]);
      for (let i = 0; i < min; i++) {
        commonCharacters += ltr;
      }
    }
  });
  return commonCharacters;
};

const getMapping = (str) => {
  const mapping = {};
  str.split("").forEach((ltr) => {
    mapping[ltr] = mapping[ltr] + 1 || 1;
  });
  return mapping;
};

export default commonCharacters;
