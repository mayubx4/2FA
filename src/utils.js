export const reorderList = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const generatedNumbers = [];

export function generateUniqueRandom() {
  while (true) {
    const randomNum = Math.floor(Math.random() * 900000) + 100000; // Generate a 6-digit number
    if (!generatedNumbers.includes(randomNum)) {
      generatedNumbers.push(randomNum);
      if (generatedNumbers.length > 100000) {
        // Reset the array to prevent memory overflow
        generatedNumbers.splice(0, generatedNumbers.length - 100000);
      }
      return randomNum;
    }
  }
}
