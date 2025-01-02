/**
 * Heap
 * - Tree-based partially ordered DS
 * - Two types: max-heap and min-heap
 * - Any node's key <= parent's key and >= child's keys [max-heap]
 *
 * Binary Heap - Poll
 * 1. Pop the top element
 * 2. Move the last element to the top
 * 3. Heapify down: Recursively compare to children, swap with bigger child
 *
 * Binary Heap - Indexes
 * -      [Math.floor((i - 1) / 2)]
 * -          [i]       [i + 1]
 * - [i*2 + 1]  [i*2 + 2]
 */

class Heap {
  constructor() {
    this.data = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  swap(i1, i2) {
    const temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }

  push(key) {
    this.data[this.data.length] = key;
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.data.length - 1;

    while (
      this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown() {
    let currentIndex = 0;

    while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currentIndex);

      if (
        this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
        this.data[this.getRightChildIndex(currentIndex)] >
          this.data[this.getLeftChildIndex(currentIndex)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.data[currentIndex] < this.data[biggestChildIndex]) {
        this.swap(currentIndex, biggestChildIndex);
        currentIndex = biggestChildIndex;
      } else {
        return;
      }
    }
  }

  poll() {
    const maxValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();

    return maxValue;
  }
}

let heap = new Heap();
console.log(heap);
heap.push(25);
heap.push(5);
heap.push(48);
heap.push(78);
heap.push(98);
heap.push(44);

// console.log(heap.data.join(","));
console.log(heap.data);

let a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log("Top 5 items: ", a);
console.log(heap.data);
