function setAlarm(employed, vacation){
    if(employed && vacation){
        return false
    } else if (employed && !vacation){
        return true
    }
    return false 
    }

    console.log(setAlarm(true, false))