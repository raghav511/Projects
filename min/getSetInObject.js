let obj = {
    firstname: 'raghavendra',
    lastname: 'ballur',
    get fullname() {
        return `${this.firstname} ${this.lastname}`
    },
    set fullname(value) {
        const input = value.split(' ');
        this.firstname = input[0];
        this.lastname = input[1];
    }
};

obj.fullname = 'abc xyz';

console.log(obj.fullname);