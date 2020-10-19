const Subject  = require('./Subject.js');
const Observer = require('./Observer.js');


///// Subject /////
let subject = new Subject();
///////////////////


///// Observers /////
let observador0 = new Observer();
let observador1 = new Observer();
/////////////////////


// adicionando observadores
subject.addObserver(observador0);
subject.addObserver(observador1);


// notificar todos os observadores
subject.notifyAllObservers();
