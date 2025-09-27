function sortedSquaredArray(array){
    var list = []; 
    //O(n)
    for(number of array){
      var squaredNumber =  number  ** 2;
      list.push(squaredNumber);
    }
    //O(n long n)
    return list.sort((a, b) => a - b);
}
const array = [-2, -1]
//const array = [1, 2, 3, 5, 6, 8, 9]
console.log(sortedSquaredArray(array))

//time comnplexite O(nlogn)time
//O(n) space


