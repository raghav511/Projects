var iifeModule = (function createInstructors() {
    var instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors() {
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor) {
            instructors.push(instructor)
            return instructors;
        }
    }
})();

// var class1 = createInstructors();
// class1.addInstructor('raghav');
// console.log(class1.showInstructors());

//we have also created a module named iifeModule

console.log(iifeModule.showInstructors());