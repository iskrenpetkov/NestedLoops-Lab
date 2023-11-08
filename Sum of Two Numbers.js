function Traveling(input) {
    let start = Number(input[0])
    let end = Number(input[1])
    let magic = Number(input[2])
    
    let c = 0
    let isFound = false

    for (let n = start; n <= end; n++) {
        for (let i = start; i <= end; i++) {
            let sum = n + i;
            c++
            if (sum === magic) {
                console.log(`Combination N:${c} (${n} + ${i} = ${magic})`);
                isFound = true
                break
            }

        }

        if (isFound) {
            break
        }
    }
    if (!isFound) {
        console.log(`${c} combinations - neither equals ${magic}`);
    }




}
Traveling(["88", "888", "1000"])