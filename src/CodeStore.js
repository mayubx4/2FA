import { makeAutoObservable } from "mobx";
import { generateUniqueRandom } from "./utils";

class CodeStore {
  codes = [];

  constructor() {
    makeAutoObservable(this);

    // Generate the initial set of 6 random codes
    for (let i = 1; i <= 6; i++) {
      this.addRandomCode(`Code ${i}`);
    }
  }

  counter(index) {
    console.log(index);
    setInterval(() => {
      if (this.codes[index].timeRemaining > 0)
        this.decrementRemainingTime(index);
      else this.resetCode(index);
    }, 1000);
  }

  decrementRemainingTime(index) {
    if (this.codes[index] && this.codes[index].timeRemaining > 0) {
      this.codes[index].timeRemaining--;
    }
  }

  addCode(name, code) {
    this.codes.push({ id: code, name, code, timeRemaining: 60 });
    this.counter(this.codes.length - 1);
  }

  addRandomCode(name) {
    const randomCode = generateUniqueRandom();
    this.addCode(name, randomCode);
  }

  // reorderCodes(newCodes) {
  //   this.codes = newCodes;
  // }
  reorderCodes(draggedIndex, targetIndex) {
    // Reorder codes by moving the dragged code to the target index
    const draggedCode = this.codes.splice(draggedIndex, 1)[0];
    this.codes.splice(targetIndex, 0, draggedCode);
  }

  resetCode(index) {
    const newCode = generateUniqueRandom();
    this.codes[index].code = newCode;
    this.codes[index].timeRemaining = 60;
  }
}

export default new CodeStore();
