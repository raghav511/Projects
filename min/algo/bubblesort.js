const array = [9, 6, 3, 7, 1, 8, 2, 5];
let iterations = 0;

function sort(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            iterations = iterations + 1
            temp = array[i];
            array[i] = array[i + 1]
            array[i + 1] = temp;
            console.log(array);

            return sort(array);

        }

    }
    console.log('sorting completed', iterations);
}

sort(array);