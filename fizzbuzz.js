const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [12, 22, 45, 47, 15, 63, 7]
const arr3 = [17, -12, 'hello', 5, 23, 60, -7, null, 13]


let max = 21

let jeanneArray = []
for (let i = 0; i < max; i++) { 
  
  jeanneArray.push(i)

}


function fizzbuzz(apple) {
  for (let i = 0; i < apple.length; i++) { 
    let element = apple[i] 

    if (typeof element !== 'number') {
      console.log('Bonk')
    }

    else if (element % 3 === 0 && element % 5 === 0) {
      console.log('fizzbuzz')

    } 
    else if (element % 3 === 0) {
      console.log('fizz')

    } else if (element % 5 === 0) {
      console.log('buzz')

    } 
      // string.replace will change things.
// if null call bonk
     else {
      console.log(element)
    }
  }
}

fizzbuzz(jeanneArray)

const newResult = fizzbuzz(jeanneArray)
console.log(newResult)
​




// Release 5 Pseudocode
// const newArr = []
// make loop
// let max = banana[i]
// if max = 20 replace with const ArrOneToTwenty
// pass new array to fizzbuzz func
// print result (console.log)









