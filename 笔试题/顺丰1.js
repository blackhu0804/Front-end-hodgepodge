function compare(t1, t2) {
    var startTime = t1.replace(/\-/g, "/");
    var endTime = t2.replace(/\-/g, "/");
    var sTime = new Date(startTime);
    var eTime = new Date(endTime);  

    let date = Math.abs(parseInt(sTime - eTime))
    let hours = date / 1000 / 3600
    if( hours < Math.floor(hours) + 0.5) {
        return Math.floor(hours)
    } else if (hours >= Math.floor(hours) + 0.5) {
        return Math.floor(hours) + 0.5
    }
}

console.log(compare("2018-06-23 11:59", "2018-06-22 15:30"))