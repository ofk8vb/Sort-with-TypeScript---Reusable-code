// this class uses a generic bubble sort algorith to do the sorting.
// anything that can provide get length, compare method, and swap method between its elements can be used with this class

export abstract class Sorter {
  // abstract means some methods inside this class will be implemented by child classes(extenders) in the future
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  // length is a getter function so it is seen as a property
  abstract length: number;

  // abstract definition means the following variable names for functions and properties will be defined in the future by
  // the class that is extending the abstract class

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      // after each iteration rightmost element will be in the correct position
      // so no need to go over that again
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
