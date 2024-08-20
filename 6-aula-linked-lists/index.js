class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      // caso a lista não seja vazia
      // a gente conecta o novo nó com o head da lista
      node.next = this.head;

      // aponta o head pro novo nó
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      // o previous vai começar como o head da lista
      let previous = this.head;

      // agora a gente faz o laço pra fazer o previous
      // percorrer a lista até o fim enquanto o next não for nulo
      while (previous.next) {
        previous = previous.next;
      }

      // agora que ele chegou ao fim a gente vai referenciar
      // o próximo nó do ponteiro previous como o nó que a gente criou
      // assim a gente adiciona o nó no fim da lista
      previous.next = node;
    }

    this.size++;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) return;

    const isFirstIndex = index === 0;
    if (isFirstIndex) {
      this.prepend(value);
    } else {
      const node = new Node(value);

      let previous = this.head;

      let count = 0;
      while (count++ < index - 1) {
        previous = previous.next;
      }

      // liga o novo nó na lista
      node.next = previous.next;
      previous.next = node;

      this.size++;
    }
  }

  removeFrom(index) {
    const indexOutOfRange = index < 0 || index > this.size;
    if (indexOutOfRange) return null;
    if (this.isEmpty()) return null;

    let removed = this.head;

    if (index === 0) {
      removed = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;

      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }

      // basicamente nós ajustamos o ponteiro next do previous
      // para pular o nó que queremos remover e apontar
      // diretamente para o nó seguinte.
      removed = previous.next;
      previous.next = removed.next;
    }
    this.size--;
    return removed.value;
  }

  print() {
    let current = this.head;

    let str = "";

    while (current) {
      str += `${current.data} `;
      current = current.next;
    }

    console.log(str);
  }

  // A partir daqui são métodos extras, além dos que vimos nas aulas

  // Este método remove o elemento da lista. Retorna o elemento removido ou, se não for encontrado, retorna -1.
  removeElement(element) {
    let current = this.head;
    let previous = null;

    // percorre a lista
    while (current != null) {
      // compara o elemento com o elemento atual
      if (current.data === element) {
        // se o elemento for encontrado
        // e se o elemento for o primeiro da lista
        // então o elemento seguinte passa a ser o primeiro da lista
        if (previous == null) {
          this.head = current.next;
        } else {
          // se o elemento for encontrado
          // e se o elemento não for o primeiro da lista
          // então o elemento anterior passa a apontar para o elemento seguinte
          previous.next = current.next;
        }
        // diminui o tamanho da lista em 1, pois um elemento foi removido
        this.size--;
        // retorna o elemento removido
        return current.data;
      }
      // se o elemento não for encontrado, continua percorrendo a lista
      previous = current;
      current = current.next;
    }
    // se o elemento não for encontrado, retorna 'null'
    return -1;
  }

  // retorna o índice de um determinado elemento se o elemento estiver na lista.
  indexOf(element) {
    // inicia a posição em 0
    let count = 0;
    // inicia o elemento atual na cabeça (primeiro elemento) da lista
    let current = this.head;

    // percorre a lista
    while (current != null) {
      // compara o elemento com o elemento atual
      if (current.data === element) {
        // se o elemento for encontrado, retorna a posição
        return count;
      }
      // se o elemento não for encontrado, continua percorrendo a lista
      count++;
      current = current.next;
    }
    // se o elemento não for encontrado, retorna '-1'
    return -1;
  }

  // Este método retorna o tamanho da lista, ou sjea, o número de nós presentes na lista.
  getSize() {
    // inicia o tamanho em 0
    let count = 0;
    // inicia o elemento atual na cabeça (primeiro elemento) da lista
    let node = this.head;

    // percorre a lista
    // enquanto o elemento atual for diferente de null
    while (node) {
      // incrementa o tamanho
      count++;
      // passa para o próximo elemento
      node = node.next;
    }
    // retorna o tamanho
    return count;
  }

  // Este método esvazia a lista.
  clear() {
    // atribui null à cabeça (primeiro elemento) da lista
    this.head = null;
    // atribui 0 ao tamanho da lista
    this.size = 0;
  }

  // Este método retorna o primeiro nó da lista ligada.
  getFirst() {
    // retorna o primeiro elemento
    // que é a cabeça (primeiro elemento) da lista
    return this.head;
  }
}

const linkedList = new LinkedList();

linkedList.insertAt(6, 0);
linkedList.insertAt(10, 1);
linkedList.insertAt(12, 2);
linkedList.insertAt(3, 3);
linkedList.print();

linkedList.removeElement(6);
linkedList.print();
