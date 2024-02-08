function past(h, m, s){
    //#Happy Coding! ^_^
    h = Math.max(0, Math.floor(h))
    m = Math.max(0, Math.floor(m))
    s = Math.max(0, Math.floor(s))

  
  const hrs = h * 60 * 60 * 1000
  const mins = m * 60 * 1000
  const secs = s * 1000

  const result = hrs + mins + secs
 return result
  }

  console.log(past(0,1,1))