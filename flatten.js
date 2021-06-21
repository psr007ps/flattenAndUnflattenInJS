const obj = {
 "books": [
 {
 "name": "Harry Potter and the Philosopher's Stone",
 "no": 1,
 },
 {
 "name": "Harry Potter and the Chamber of Secrets",
 "no": 2,
 },
 ],
 "status": 200,
 "matrix": [[1, 2, 3], [4, 5, 6],[7, 8, 9]]
}

const flatten = function(data) {
  var result = {};

  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++)
        recurse(cur[i], prop + "." + i);
      if (l == 0) result[prop] = [];
    } else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + "." + p : p);
      }
      if (isEmpty && prop) result[prop] = {};
    }
  }
  recurse(data, "");
  return result;
};

console.log(JSON.stringify(flatten(obj), undefined, 4));
