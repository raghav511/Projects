var arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        arr[i][j] = Math.floor(Math.random() * 9) + 1;
    }
}
console.log(arr);