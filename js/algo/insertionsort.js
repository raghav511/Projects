const arr = [9, 6, 3, 7, 1, 8, 2, 5];
let sortedArray = insetionsort(arr);
console.log(sortedArray);

function insetionsort(arr) {
    for (i = 0; i < arr.length; i++) {
        temp = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j]>temp) {
            a[j + 1] = a[j];
            j--;
        }
        
    }
}