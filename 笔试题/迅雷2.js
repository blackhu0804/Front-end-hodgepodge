function tosort(argus1, argus2) {
    if(argus1.class > argus2.class) {
        return 1
    } else if (argus1.class < argus2.class) {
        return -1
    } else {
        if(argus1.score < argus2.score) {
            return 1
        } else {
            return -1
        }
    }
}
function sortStudents(students) {
    return JSON.stringify(students.sort(tosort))
}
let students = [
    { "name": "张三", "class": 2, "score": 64 },    
    { "name": "李四", "class": 1, "score": 80 }, 
    { "name": "王五", "class": 1, "score": 81 }, 
    { "name": "赵六", "class": 4, "score": 94 },
    { "name": "赵七", "class": 1, "score": 81 }
]
console.log(sortStudents(students))