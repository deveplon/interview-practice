// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = this.tail = head
  }

  push(value: T) {
    const node: Node<T> = {
      value: value
    }

    if (!this.tail) {
      this.head = this.tail = node
      return
    }

    this.tail.next = node
  }

  filter(fn: (node: Node<T>) => LinkedList<T>) {
    const res = new LinkedList()
    let current = this.head

    while(current) {
      if(fn(current)) {
        res.push(current)
      }

      current = current.next
    }

    return res
  }
  visit() {}
  remove() {}
  merge() {}
  print() {}

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length: number;
}

const list = new LinkedList();
