//1
function addParamsToRequest(params) {
    let count = 0;
    return function(data) {
        count++;
        return {
            ...params,
            data,
            count
        };
    };
}
const sendData = addParamsToRequest({
    "access-token": "qwerty"
});
const result = sendData({
    name: "Bohdan",
    age: 26
});
console.log(result);
//2
const obj = {
    getData: function() {
        console.log(`Person name is: ${this.name} and age ${this.age}`);
    }
};
obj.getData.call({
    name: "Yulia",
    age: 18
});
function personData(name, age) {
    return function() {
        obj.getData.call({
            name,
            age
        });
    };
}
const showPersonDataInfo = personData("Mike", 5);
showPersonDataInfo("Mike", 5);
//3
const root = {
    name: "name",
    type: "folder",
    children: [
        {
            name: "folder 1",
            type: "folder",
            children: [
                {
                    name: "folder 2",
                    type: "folder",
                    children: [
                        {
                            name: "file 3",
                            type: "file",
                            size: 30
                        }
                    ]
                }
            ]
        },
        {
            name: "file 1",
            type: "file",
            size: 10
        },
        {
            name: "file 2",
            type: "file",
            size: 20
        }
    ]
};
function findFiles(obj) {
    let files = [];
    if (obj.type === "file") files.push(obj.name);
    if (obj.children && obj.children.length > 0) obj.children.forEach((child)=>{
        files = files.concat(findFiles(child));
    });
    return files;
}
const fileNames = findFiles(root);
console.log(fileNames);
//4
class Human {
    constructor(name, phone){
        this.name = name;
        this.phone = phone;
    }
    introduce() {
        console.log(`\u{41F}\u{440}\u{438}\u{432}\u{456}\u{442}, \u{43C}\u{435}\u{43D}\u{435} \u{437}\u{432}\u{430}\u{442}\u{438} ${this.name}, \u{43C}\u{456}\u{439} \u{43D}\u{43E}\u{43C}\u{435}\u{440} ${this.phone}.`);
    }
}
class Student extends Human {
    constructor(name, phone, course){
        super(name, phone);
        this.course = course;
    }
    study() {
        console.log(`\u{42F} \u{43D}\u{430}\u{432}\u{447}\u{430}\u{44E}\u{441}\u{44F} \u{43D}\u{430} ${this.course} \u{43A}\u{443}\u{440}\u{441}\u{456}.`);
    }
}
class Teacher extends Human {
    constructor(name, phone, subject){
        super(name, phone);
        this.subject = subject;
    }
    teach() {
        console.log(`\u{42F} \u{432}\u{438}\u{43A}\u{43B}\u{430}\u{434}\u{430}\u{44E} ${this.subject}.`);
    }
}
const student = new Student("Olha", "123-456-789", 2);
student.introduce();
student.study();
const teacher = new Teacher("John", "987-654-321", "Physic");
teacher.introduce();
teacher.teach();

//# sourceMappingURL=index.09c24910.js.map
