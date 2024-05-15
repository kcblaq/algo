var NumberOfPeopleInABus = function(busStops){
    // Good Luck!
    let enter = 0;
    let exit = 0;

   for(let item of busStops){
    enter+= item[0]
    exit+= item[1]
   }
   return enter - exit
  }

  console.log(NumberOfPeopleInABus([[12,0], [2,3],[50,23]]))