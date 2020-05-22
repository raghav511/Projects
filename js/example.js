let exampleObject = {
    name: 'raghav'
}

let exampleFunc = obj => {
    obj.name = 'abcxyz';
}

exampleFunc(exampleObject);

console.log(exampleObject);