var db = {
  developer: {
    male: ['Joe', 'Bill', 'Bob'],
    female: ['Sara', 'Linda']
  },
  designer: {
    male: ['Jake', 'Tomas', 'Colby'],
    female: ['Brittany', 'Jane']
  }
};

function slowResponse(result){
  return new Promise(resolve => {
    console.log('fake networking calls ....');
    setTimeout(() => {
      resolve(result)
    }, 500);
  })
}

export function getClassifications(){
  return slowResponse(Object.keys(db));
}

export function getGenders(classification){
  return slowResponse(Object.keys(db[classification]));
}

export function getPeople(classification, gender){
  return slowResponse(db[classification][gender]);
}