class Subject {
  constructor() {
    // inicializando lista de observadores,
    // todo subject conhece sua lista de observadores
    this.observersList = [];
  }

  addObserver(observer) {
    this.observersList.push(observer);
  }

  removeObserver(observer) {
    let index = this.observersList.indexOf(observer);
    if (index > -1) {
      this.observersList.splice(index, 1);
    }
  }

  notifyObserver(observer) {
    let index = this.observersList.indexOf(observer);
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

class Observer {
  notify(index) {
    console.log("Observador " + index);
  }
}

// inicializar os objetos
let subject = new Subject();

let obs1 = new Observer();
let obs2 = new Observer();

subject.addObserver(obs1);
subject.addObserver(obs2);
subject.notifyAllObservers();
