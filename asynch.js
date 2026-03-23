// async function getData() {
//     let response = await fetch('https://api.example.com/data');//await krega jab tak response nahi aata
//     let data = await response.json();
//     console.log(data);
// }
// getData();
// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));    
//error handling
// try{
//     var x=y+10;//y is not defined
//     console.log(x);
// } catch(error){
//     console.error('Error:', error);

// }

localStorage.setItem('name','John');
//retrieve data from local storage
var name=localStorage.getItem('name');
console.log(name);
//remove data from local storage
localStorage.removeItem('name');
//store object
var user={
    name:'Alice',
    age:30};
localStorage.setItem('user',JSON.stringify(user));
//retrieve object
var data=JSON.parse(localStorage.getItem('user'));
console.log(data.name,data.age);
