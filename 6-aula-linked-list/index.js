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
  
    // funções a serem implementadas
    // - add(element)
    add(element) {
      // cria um novo nó
      const node = new Node(element);
  
      // para armazenar o elemento
      let current;
  
      // se a lista estiver vazia
      // então adicione o elemento e torne-o head
      if (this.head === null) {
        this.head = node;
      } else {
        // senão, percorra a lista até o último item
        // e adicione o elemento lá
        current = this.head;
  
        // itere até o final da lista
        while (current.next) {
          current = current.next;
        }
        // adicione o nó
        current.next = node;
      }
  
      // incrementar o tamanho
      this.size++;
    }
    // - insertAt(element, location)
    insertAt(element, location) {
      // Verifica se a posição onde queremos inserir o elemento é válida.
      // A posição deve ser maior que 0 e menor ou igual ao tamanho da lista.
      // Se a posição não for válida, a função retorna 'false' e não faz nada.
      if (location < 0 || location > this.size) return false;
  
      // Se a posição for válida, o código continua.
  
      // Cria um novo 'nó', que é uma parte da lista com um valor (elemento).
      const node = new Node(element);
      let current, previous;
  
      // Inicia 'current' na cabeça (primeiro elemento) da lista.
      current = this.head;
  
      // Se a posição for 0, insere o novo nó no início da lista.
      // O novo nó passa a ser a nova cabeça da lista.
      if (location == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        // Se a posição for diferente de 0, encontra a posição correta para inserir.
        current = this.head;
        let index = 0;
  
        // Anda pela lista até chegar na posição desejada.
        // 'previous' guarda o nó anterior e 'current' o nó atual.
        while (index++ < location) {
          previous = current;
          current = current.next;
        }
  
        // Insere o novo nó na posição encontrada.
        // O novo nó aponta para o nó que estava originalmente nessa posição.
        // E o nó anterior agora aponta para o novo nó.
        node.next = current;
        previous.next = node;
      }
  
      // Aumenta o tamanho da lista em 1, pois um novo elemento foi adicionado.
      this.size++;
    }
    // - removeFrom(location)
    removeFrom(location) {
      // verifica se a posição onde queremos remover o elemento é válida.
      // a posição deve ser maior que 0 e menor que o tamanho da lista.
      // se a posição não for válida, a função retorna 'false' e não faz nada.
      if (location < 0 || location >= this.size) return false;
  
      // se a posição for válida, o código continua.
  
      let current = this.head;
      let previous,
        index = 0;
  
      // se a posição for 0, remove o primeiro elemento da lista.
      // o novo primeiro elemento passa a ser o próximo elemento.
      if (location == 0) {
        // o elemento removido é o primeiro da lista, então a cabeça (head) passa a ser o próximo elemento.
        this.head = current.next;
        // diminui o tamanho da lista em 1, pois um elemento foi removido.
        this.size--;
        // retorna o elemento removido.
        return current.data; // Retorna o dado e encerra a função aqui
      }
  
      // se a posição for diferente de 0, encontra a posição correta para remover.
      // anda pela lista até chegar na posição desejada.
      // 'previous' guarda o nó anterior e 'current' o nó atual.
      while (index++ < location) {
        previous = current;
        current = current.next;
      }
  
      // remove o elemento da posição encontrada.
      // o nó anterior passa a apontar para o próximo nó.
      previous.next = current.next;
  
      // diminui o tamanho da lista em 1, pois um elemento foi removido.
      this.size--;
  
      // retorna o elemento removido.
      return current.data;
    }
    // - removeElement(element)
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
    // Métodos auxiliares
    // - indexOf (element)
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
    // - isEmpty (element)
    isEmpty() {
      // retorna true se o tamanho da lista for 0
      return this.size == 0;
    }
    // - PrintList
    printList() {
      // inicia o elemento atual na cabeça (primeiro elemento) da lista
      var curr = this.head;
      // inicia a string que será impressa
      var str = "";
  
      // percorre a lista
      // enquanto o elemento atual for diferente de null
      while (curr) {
        // adiciona o elemento atual à string
        str += curr.data + " ";
        // passa para o próximo elemento
        curr = curr.next;
      }
      // imprime a string
      console.log(str);
    }
    // - getSize
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
    // - getLast
    getLast() {
      // inicia o elemento atual na cabeça (primeiro elemento) da lista
      let lastNode = this.head;
  
      // verifica se a lista não está vazia
      if (lastNode) {
        // percorre a lista até o último elemento
        // enquanto o elemento atual for diferente de null
        while (lastNode.next) {
          // passa para o próximo elemento
          lastNode = lastNode.next;
        }
      }
      // retorna o último elemento
      return lastNode;
    }
    // - getFirst
    getFirst() {
      // retorna o primeiro elemento
      // que é a cabeça (primeiro elemento) da lista
      return this.head;
    }
    // - Clear
    clear() {
      // atribui null à cabeça (primeiro elemento) da lista
      this.head = null;
      // atribui 0 ao tamanho da lista
      this.size = 0;
    }
  }
  
  let listaLinkada = new LinkedList();
  
listaLinkada.insertAt(60, 0);
  
// imprime 60
listaLinkada.printList();
console.log(listaLinkada.head.next.data); // retorna 5
