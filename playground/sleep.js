const sleep = (time) => {
    return new Promise ((resolve) => {
        setTimeout(resolve, time);
    });
}

console.log('Start');
sleep(1000).then(() => {
    console.log('End');
});