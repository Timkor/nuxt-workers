export function expensiveTask(time) {
    
    const start = Date.now()

    let count = 0
    
    while (Date.now() - start < time) {
        count++
    }
    
    return count;
}