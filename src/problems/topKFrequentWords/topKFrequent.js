// https://leetcode.com/problems/top-k-frequent-words/
const topKFrequent = (words, k) => {
  const freqMap = {};
  words.forEach((word) => {
    freqMap[word] = freqMap[word] + 1 || 1;
  });
  const arrayOfFreqObj = Object.entries(freqMap).map(([word, freq]) => ({
    word,
    freq,
  }));
  arrayOfFreqObj.sort((a, b) => {
    if (b.freq !== a.freq) return b.freq - a.freq;
    if (a.word < b.word) {
      return -1;
    } else if (a.word > b.word) {
      return 1;
    } else {
      return 0;
    }
  });
  arrayOfFreqObj.length = k;
  return arrayOfFreqObj.map(({ word }) => word);
};

export default topKFrequent;
