String.prototype.toJadenCase = function () {
    //...
    let result = this.split(" ").map((item)=> item.charAt(0).toUpperCase()+ item.slice(1)).join(" ")
    return result
  };


  console.log(("I have a dream").toJadenCase())