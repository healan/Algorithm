function firstRecurringChar(arr){
    for(let i=0; i<arr.length; i++){
     for(let j=i+1; j<arr.length; j++){
        if(arr[i] == arr[j]){
          console.log(arr[i]);
          return arr[i];
        }
     }
    }
  }
  
  // firstRecurringChar([1,2,3,1,4,6])
  
  function firstRecurringChar2(input){
    let map = {};
    for(let i=0; i<input.length; i++){
      if(map[input[i]] !== undefined){
        console.log(map[input[i]]);
        return input[i];
      }else{
        map[input[i]] = i;
      }
    }
  }
  
  // firstRecurringCharacter2([1,2,3,1,4,6])
  firstRecurringChar2([1,5,5,1,3,4,6])