const obj = {
   "books.0.name": "Harry Potter and the Philosopher's Stone",
 "books.0.no": 1,
 "books.1.name": "Harry Potter and the Chamber of Secrets",
 "books.1.no": 2,
 "status": 200,
 "matrix.0.0": 1,
 "matrix.0.1": 2,
 "matrix.0.2": 3,
 "matrix.1.0": 4,
 "matrix.1.1": 5,
 "matrix.1.2": 6,
 "matrix.2.0": 7,
 "matrix.2.1": 8,
 "matrix.2.2": 9
};


const unflatten = (obj = {}) => {
   const result = {};
   let temp, substrings, property, i;
   for (property in obj) {
      substrings = property.split('.');
   temp = result;
   for (i = 0; i < substrings.length - 1; i++) {
      if (!(substrings[i] in temp)) {
         if (isFinite(substrings[i + 1])) {
             temp[substrings[i]] = [];
         }
         else {
            temp[substrings[i]] = {};
         }
      }
      temp = temp[substrings[i]];
   }
   temp[substrings[substrings.length - 1]] = obj[property];
}
return result;
}; 

console.log(JSON.stringify(unflatten(obj), undefined, 4));
