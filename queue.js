class Queue {
  list = [];
  enqueue(item) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);

console.log(q.dequeue()); // Should return 1
console.log(q.dequeue());
