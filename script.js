// ============================================   Leetcode 75 ===============================================

// ==============================   1768. Merge Strings Alternately ==============================

// var mergeAlternately = function (word1, word2) {
//   let result = "";
//   let i = 0;
//   while (i < word1.length || i < word2.length) {
//     result += word1[i] || "";
//     result += word2[i] || "";
//     i++;
//   }
//   return result;
// };

// let result = mergeAlternately("zia", "shah");
// console.log(result);

// ==============================   151. Reverse Words in a String ==============================

// var reverseWords = function (s) {
//   let result = s
//     .split(/\s+/)
//     .filter((word) => word.length > 0)
//     .reverse()
//     .join(" ");
//   return result;
// };

// let result = reverseWords("a good   example");
// console.log(result);

// ==============================   151. Reverse Words in a String ==============================

// function gcd(a, b) {
//   while (b !== 0) {
//     [a, b] = [b, a % b];
//   }
//   return a;
// }
// function gcdOfStrings(str1, str2) {
//   if (str1 + str2 !== str2 + str1) {
//     return "";
//   }
//   const gcdLength = gcd(str1.length, str2.length);
//   return str1.substring(0, gcdLength);
// }
// console.log(gcdOfStrings("ABCABC", "ABC"));
// console.log(gcdOfStrings("ABABAB", "ABAB"));
// console.log(gcdOfStrings("LEET", "CODE"));
