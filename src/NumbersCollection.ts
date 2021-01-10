import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  // data: number[];
  // this.data=data;
  constructor(public data: number[]) {
    super();
  }

  // get means we wo do not have to called length function to get the of data
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    // store the lefthand number to a temporary variable so after replacing it with
    // the next element, we do not lose it
    const leftHand = this.data[leftIndex];
    // next element is stored in place of the first element
    this.data[leftIndex] = this.data[rightIndex];
    // next elements posiiton now has the first element's value
    this.data[rightIndex] = leftHand;
    // now locations have been swapt
  }
}
