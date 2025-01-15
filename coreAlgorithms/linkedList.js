class Node {
  init(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  init() {
    this.head = null;
    this.tail = null;
  }

  addToFront(val) {
    let newNode = new Node();
    newNode.init(val);
    newNode.next = this.head;

    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  addToEnd(val) {
    let newNode = new Node();
    newNode.init(val);
    newNode.prev = this.tail;

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  removeFromFront() {
    if (!this.head) return null;

    let removedValue = this.head.val;

    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    return removedValue;
  }

  removeFromEnd() {
    if (!this.tail) return null;

    let removedValue = this.tail.val;

    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.prev = null;
    } else {
      this.head = null;
    }

    return removedValue;
  }
}

function runTests() {
  const list = new DoublyLinkedList();
  list.init();

  console.log("Testando DoublyLinkedList...");

  // Teste 1: Adicionar um elemento ao início da lista
  list.addToFront(10);
  console.assert(list.head.val === 10, "Teste 1.1 Falhou");
  console.assert(list.tail.val === 10, "Teste 1.2 Falhou");

  // Teste 2: Adicionar múltiplos elementos ao início
  list.addToFront(20);
  list.addToFront(30);
  console.assert(list.head.val === 30, "Teste 2.1 Falhou");
  console.assert(list.head.next.val === 20, "Teste 2.2 Falhou");
  console.assert(list.tail.val === 10, "Teste 2.3 Falhou");

  // Teste 3: Adicionar um elemento ao final da lista
  list.addToEnd(40);
  console.assert(list.tail.val === 40, "Teste 3.1 Falhou");
  console.assert(list.tail.prev.val === 10, "Teste 3.2 Falhou");

  // Teste 4: Adicionar múltiplos elementos ao final
  list.addToEnd(50);
  list.addToEnd(60);
  console.assert(list.tail.val === 60, "Teste 4.1 Falhou");
  console.assert(list.tail.prev.val === 50, "Teste 4.2 Falhou");

  // Teste 5: Remover do início da lista
  const removedFromFront = list.removeFromFront();
  console.assert(removedFromFront === 30, "Teste 5.1 Falhou");
  console.assert(list.head.val === 20, "Teste 5.2 Falhou");

  // Teste 6: Remover do final da lista
  const removedFromEnd = list.removeFromEnd();
  console.assert(removedFromEnd === 60, "Teste 6.1 Falhou");

  // Teste 7: Remover até a lista estar vazia
  list.removeFromFront();
  list.removeFromFront();
  list.removeFromFront();
  list.removeFromFront();
  list.removeFromFront();
  console.assert(list.head === null && list.tail === null, "Teste 7 Falhou");

  // Teste 8: Remover de uma lista vazia
  const removedEmpty = list.removeFromFront();
  console.assert(removedEmpty === null, "Teste 8.1 Falhou");
  const removedEmptyEnd = list.removeFromEnd();
  console.assert(removedEmptyEnd === null, "Teste 8.2 Falhou");

  console.log("Todos os testes passaram!");
}

runTests();
