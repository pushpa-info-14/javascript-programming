var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }

  let last = this.queue1.shift();

  while (this.queue2.length > 0) {
    this.queue1.push(this.queue2.shift());
  }

  return last;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue1[this.queue1.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack();
obj.push(10);
obj.push(11);
obj.push(12);
console.log(obj.pop());
console.log(obj.top());
console.log(obj.pop());
console.log(obj.top());
console.log(obj.empty());
