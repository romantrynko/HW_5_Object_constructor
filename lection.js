// let maria = {
//     name: 'Maria',
//     hair: 'Black',
//     greeting: function() {
//         document.write(`Hello everyone, my name is ${this.name}`)
//     },
//     codding: function (hours = 8) {
//         document.write(`I am going to code ${hours} hour long`)
//         }
//     }

//     maria.greeting();

//     maria.codding(13);

// function Car(color, speed) {
//     this.color = color
//     this.speed = speed

//     this.ride = function() {
//         document.write(`I am riding ${this.speed} km/h`);
//     }
// }


// let tesla = new Car('white', 99);
// let volvo = new Car('blue', 80);
// let vaz = new Car('red', 70);

// tesla.ride()
// vaz.ride()

// console.log(tesla);

function User(age, gender, name, laptops = []) {
    this.age = age;
    this.gender = gender;
    this.name = name;
    this.education = 'high';
    this.laptops = laptops;
    this.work = function() {
        document.write(`I am working now so I'm busy! Sorry!`);
    }

    this.addLaptop = function(laptopName) {
        this.laptops.push(laptopName)
    }
}

let viktor = new User(22, 'male', 'Viktor');
let roman = new User(31, 'male', 'Roman');
roman.addLaptop('Dell');

roman.work();

console.log(viktor);
console.log(roman);



class Human {
    constructor(age, gender, name) {
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.money = 0;
    }

    eat() {
        console.log('Om nom nom');
    }

    goWork() {
        this.money += 100;
    }

    goBeer() {
        if(this.money > 200) {
            document.write('I am hammered!')
            this.money -= 200;
        } else {
            document.write('No money - no honey!')
        }
    }
}

let homer = new Human(35, 'male', 'Homer')

console.log(homer);

homer.eat()
homer.goWork()
homer.goWork()
homer.goWork()






class Developer extends Human {
    constructor(age, gender, name, skill) {
        super(age, gender, name)
        this.skill = skill;
    }

    
    goBeer() {
        if (this.money < 500) {
            document.write('malo')
        } else {
            document.write('Go beer');
            this.money = 0;
        }
    }
}


let roman = new Developer(31, 'male', 'Roman', 'node.js')

roman.goWork();
roman.goWork();
roman.goWork();
roman.goWork();

roman.goWork();


roman.goBeer();
