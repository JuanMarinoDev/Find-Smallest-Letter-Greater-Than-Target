const nextGreatestLetter = function(letters, target) {
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    if (letter > target) {
      return letter;
    }
  }
  return letters[0];
};

// Test ----> Expected output = 'u'
console.log(nextGreatestLetter(['b', 'e', 'k', 'l', 'm', 'n', 'q', 'r', 'u','z'], 's'));