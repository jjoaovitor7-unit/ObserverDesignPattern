class Subject {
  constructor() {
    // inicializando lista de observadores,
    // todo subject conhece sua lista de observadores
    this.observersList = [];
  }

  // adicionar Observador na lista de Observadores
  addObserver(observer) {
    this.observersList.push(observer);
  }

  // remover Observador da lista de Observadores
  removeObserver(observer) {
    // pegar o índice do Observador na lista de Observadores
    let index = this.observersList.indexOf(observer);

    // se o Observador existir
    if (index > -1) {
      this.observersList.splice(index, 1);
    }
  }

  notifyObserver(observer) {
    // pegar o índice do Observador na lista de Observadores
    let index = this.observersList.indexOf(observer);

    // se o Observador existir
    if (index > -1) {
      this.observersList[index].notify(index);
    }
  }

  notifyAllObservers() {
    for (let i = 0; i < this.observersList.length; i++) {
      this.observersList[i].notify(i);
    }
  }

  printObservers() {
    console.log(this.observersList);
  }
}

module.exports = Subject;