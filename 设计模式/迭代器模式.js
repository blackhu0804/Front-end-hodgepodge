function iteratorGenerator(list) {
    let idx = 0;
    let len = list.length;
    return {
        next: function() {
            let done = idx >= len;
            let value = !done ? list[idx++] : undefined;

            return {
                done,
                value
            }
        }
    }
}

let iterator = iteratorGenerator(['1', '2', '3']);
iterator.next();
iterator.next();
iterator.next();