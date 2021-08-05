
const users = [
    {name: 'jaime', 'premium': true},
    {name: 'Angelica', 'premium': true},
    {name: 'Jess', 'premium': false},
];

const greet = name =>{
    console.log(`Hello ${name}`);
}


export {greet, users as default};