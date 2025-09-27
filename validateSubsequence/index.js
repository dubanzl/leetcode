
function isValidSubsequence(array, sequence){
  let sexIndex = 0;

 for (let number of array){
    if(sexIndex === sequence.length){
        break;
    }
    if(sequence[sexIndex] === number){
        sexIndex++;
    }
 }
 return sexIndex === sequence.length;
}

array = [5, 1, 22, 25];
sequence = [5, 4, 3, 2, 1, 22, 25];
console.log(isValidSubsequence(array,sequence));