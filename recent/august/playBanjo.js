function areYouPlayingBanjo(name) {
    const firstLetter = name.split("")[0].toLowerCase();
   return  firstLetter === "r" ? `${name}  plays banjo` : `${name} does not play banjo`
}

console.log(areYouPlayingBanjo("Eebeca"))