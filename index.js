var collections = [1, [2, [4, [5, [6]], 3]]];

function find(array, criteriaFn) {

  let current = collections
  let next = []
 

  while (current) {

    if (criteriaFn(current)) {
      return current
    }
 
    
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    } //else if (false) { //typeof === Object, do: }
 
  
    current = next.shift()
  }
 
  return null
}

module.exports = { collections, find }