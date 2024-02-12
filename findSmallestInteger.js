class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

  const smallestInt = new SmallestIntegerFinder()
  console.log(smallestInt.findSmallestInt([1,23,90,-1]))