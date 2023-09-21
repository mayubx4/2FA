import { generateUniqueRandom, reorderList } from "../utils";

describe('reorderList', () => {
    it('should reorder the list correctly', () => {
      const initialList = [1, 2, 3, 4, 5];
      const startIndex = 1;
      const endIndex = 3;
  
      const result = reorderList(initialList, startIndex, endIndex);
  
      // Check if the list is reordered correctly
      expect(result).toEqual([1, 3, 4, 2, 5]);
    });
  
    it('should not mutate the original list', () => {
      const initialList = [1, 2, 3, 4, 5];
      const startIndex = 1;
      const endIndex = 3;
  
      const result = reorderList(initialList, startIndex, endIndex);
  
      // Check if the original list is not mutated
      expect(initialList).toEqual([1, 2, 3, 4, 5]);
    });
  });
  
  describe('generateUniqueRandom', () => {
    it('should generate a 6-digit random number', () => {
      const randomNum = generateUniqueRandom();
  
      // Check if the generated number is a 6-digit number
      expect(randomNum.toString().length).toBe(6);
    });
  
    it('should generate unique numbers', () => {
      const generatedNumbers = new Set();
  
      // Generate 1000 random numbers
      for (let i = 0; i < 1000; i++) {
        const randomNum = generateUniqueRandom();
        generatedNumbers.add(randomNum);
      }
  
      // Check if all generated numbers are unique
      expect(generatedNumbers.size).toBe(1000);
    });
  });