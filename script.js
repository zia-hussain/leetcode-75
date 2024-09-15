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

// ==============================   1431. Kids With the Greatest Number of Candies ==============================

// function kidsWithCandies(candies, extraCandies) {

//   const maxCandies = Math.max(...candies);
//   return candies.map((candy) => candy + extraCandies >= maxCandies);
// }

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

// ==============================   605. Can Place Flowers ==============================

// function canPlaceFlowers(flowerbed, n) {
//   let count = 0;
//   let len = flowerbed.length;

//   for (let i = 0; i < len; i++) {
//     if (
//       flowerbed[i] === 0 &&
//       (i === 0 || flowerbed[i - 1] === 0) &&
//       (i === len - 1 || flowerbed[i + 1] === 0)
//     ) {
//       // Plant a flower
//       flowerbed[i] = 1;
//       count++;
//       if (count >= n) {
//         return true;
//       }
//     }
//   }
//   return count >= n;
// }

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Output: true

// ==============================   345. Reverse Vowels of a String ==============================

// function reverseVowels(s) {
//   const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
//   let arr = s.split("");
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     while (left < right && !vowels.has(arr[left])) left++;
//     while (left < right && !vowels.has(arr[right])) right--;
//     if (left < right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   }

//   return arr.join("");
// }

// console.log(reverseVowels("IceCreAm"));
// console.log(reverseVowels("leetcode"));
