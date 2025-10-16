//methods of object creation
//1. object literal syntax
//2. object constructor syntax

//object literal syntax
let person={     // its a non singleton object
    name:"shree",
    "full name":"shreevallabh patidar",  //key with space must be in quotes and isko access karne ke liye bracket notation use karna padega, isko . use karke access nahi kar sakte
    1:"one", //key can be number also but it will be converted to string
    age:25,
    city:"indore",
    email:"shree@google.com",
    isLoggedIn:true,
    lastLoginDays:["monday","saturday"],
    address:{
        street:"sector 62",
        city:"noida",
        pincode:201301
    },
};

//in objects:-
//keys are always string
//values can be of any data type
//two ways to access object properties
// console.log(person.name); //shree
// console.log(person["name"]); //shree

// console.log(person["full name"]); //shreevallabh patidar
// console.log(person.full name); //error, because of space in key, isko access karne ke liye bracket notation use karna padega
// console.log(person.address.city); //noida
// console.log(person); 
// console.log(typeof person); //object

//to overwrite or update the value of a key
person.age=26;
// console.log(person.age); //26

//to add new key value pair
person.country="india";
// console.log(person);

//to delete a key value pair
delete person["1"];
// console.log(person);

//we can freeze the object to prevent any changes
// Object.freeze(person);
person.age=30; //will not update
// console.log(person.age); //26
delete person.city;


//functions in object
person.greet=function(){
    console.log("hello");
}
person.greet(); //hello
// console.log(person); 

person.greet2=function(){
    console.log(`hello ${this.name}`); //hello shree
}
person.greet2(); //hello shree



//-------------------------------------------------------------------------
//object constructor syntax
let person1=new Object();  //its a singleton object
//a singleton object is an object that can have only one instance
person1.name="shree";
person1.age=25;
person1.city="indore";

// console.log(person1.name); //shree
// console.log(person1); //{ name: 'John', age: 30, city: 'New York' }
// console.log(typeof person1); //object



//object create karne ka 3rd way
let person2=Object.create(person);



//nested object
let users={
    user1:{
        fullname:{
            firstname:"shree",
            lastname:"patidar"
        },
        age:25,
    }
};
// console.log(users.user1.fullname.firstname); //shree
// console.log(users.user1["age"]); //25

//merge two objects
let obj1={
    key1:"value1",
    key2:"value2"
};
let obj2={
    key3:"value3",
    key4:"value4"   
};

const obj3 = {obj1,obj2};  // merge nhi hua, nested object ban gya
// console.log(obj3); //{ obj1: { key1: 'value1', key2: 'value2' }, obj2: { key3: 'value3', key4: 'value4' } }

const obj4 = Object.assign({},obj1,obj2); //merge ho gya, isme pehla argument empty object hai jisme merge karna hai,nhi to obj1 me hi merge ho jata aur obj1 change ho jata,aur vo returned object k equal hota
// console.log(obj4);

const obj5={...obj1,...obj2}; //merge ho gya, spread operator use karke
// console.log(obj5);

//array of objects
let students=[
    {
        name:"shree",
        age:25
    },
    {
        name:"ram",
        age:24
    },
    {
        name:"hari",
        age:26
    }
];
// console.log(students[1].name); //ram
// console.log(students[2].age); //26

//array of objects me se specific object ko find karna
let student=students.find((student)=>student.name==="ram");
// console.log(student); //{ name: 'ram', age: 24 }

//all keys of object
// console.log(Object.keys(person)); //sari keys ko array me return karta hai,fir unpe loop bhi laga sakte hai

//all values of object
// console.log(Object.values(person)); //sari values ko array me return karta hai

//all entries of object
// console.log(Object.entries(person)); //sari key value pairs ko array of arrays me return karta hai

//check if key is present in object or not
// console.log(person.hasOwnProperty("name")); //true
// console.log(person.hasOwnProperty("state")); //false


//object destructuring
const {name} = person; //object destructuring, person object me se name key ki value ko nikal ke name variable me store kar diya
// console.log(name); //shree

const {address:{city}} = person; //nested object destructuring
// console.log(city); //noida

const {lastLoginDays:history} = person; //rename kar diya variable ko
// console.log(history); //['monday','saturday']
