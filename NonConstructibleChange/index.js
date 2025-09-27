//const coins = [5, 7, 1, 1, 2, 3, 22].sort((a, b)=> a - b);
const coins = [1].sort((a, b)=> a - b);

 let change = 0;

 if(coins.length == 1){
   return 1;
 } 
 for (let index = 0; index < coins.length; index++) {
  if(coins[index] > change + 1){
    console.log(change + 1); 
    return change + 1;
  }else{
    change = change + coins[index];
    if(coins.length == index + 1){
        console.log(change + 1);
        return change + 1;
    }
  }
 }