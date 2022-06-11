const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [12, 22, 45, 47, 15, 63, 7]
const arr3 = [17, -12, 'hello', 5, 23, 60, -7, null, 13]

function fizzBuzz(apple) {
  for (let i = 1; i < apple.length + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(arr1)
