  const coins = [5, 7, 1, 1, 2, 3, 22]
  let change = 0;
  if(coins.length == 0 ) return 1;
  coins.sort((a, b)=> a - b);
  for (let index = 0; index < coins.length; index++) {
    if(coins[index] > change + 1) break
      change += coins[index];
   }
  const result =  change + 1;
  console.log(result);
