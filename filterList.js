function filter_list(l) {
    // Return a new array with the strings filtered out
    // let temp = []
   return l.filter((item)=> typeof(item) == "number" )

  }

  console.log(filter_list([1,4,'ee',45,"poo"]))