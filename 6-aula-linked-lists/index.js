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

    if(this.isEmpty()){
      this.head = node;
    } else {
      // o previous vai começar como o head da lista
      let previous = this.head;

      // agora a gente faz o laço pra fazer o previous 
		  // percorrer a lista até o fim enquanto o next não for nulo
      while(previous.next){
        previous = previous.next;
      }

      // agora que ele chegou ao fim a gente vai referenciar 
		  // o próximo nó do ponteiro previous como o nó que a gente criou 
		  // assim a gente adiciona o nó no fim da lista
      previous.next = node;
    }

    this.size++;
  }

  insertAt(value, index){
    if(index < 0 || index > this.size) return;

    const isFirstIndex = index === 0;
    if(isFirstIndex){
      this.prepend(value);
    } else {
      const node = new Node(value);

      let previous = this.head;

      let count = 0;
      while(count++ < index-1){
        previous = previous.next;
      }

      // liga o novo nó na lista
      node.next = previous.next;
      previous.next = node;
      
      this.size++;
    }
  }

  removeFrom(index){
    const indexOutOfRange = index < 0 || index > this.size;
    if(indexOutOfRange) return null;
    if(this.isEmpty()) return null;

    let removed = this.head;

    if(index === 0){
      removed = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;

      for(let i = 0; i < index-1; i++){
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

  print () {
    let current = this.head;

    let str = '';

    while(current){
      str += `${current.data} `;
      current = current.next;
    }

    console.log(str);
  }
  
}

const linkedList = new LinkedList();

linkedList.insertAt(6, 0);
linkedList.insertAt(10, 1);
linkedList.insertAt(12, 2);
linkedList.insertAt(3, 3);
linkedList.print();

linkedList.removeFrom(2);
linkedList.print();
