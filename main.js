
console.log('testing');



let b = document.getElementById('box');
b.addEventListener("keyup",function(){
    console.log(b.value);
})

console.log(b);


let button = document.getElementById('submit')

button.addEventListener("click", function(){

let b = document.getElementById('box').value;
console.log(b);
})

/*
console.log("before fetch")
//let promise = fetch("https://randomuser.me/api") //10 seconds to respond 
fetch("https://randomuser.me/api").then(function(response){
    //do this when the results come back
    console.log("processing fetch results")
    return response.json()
    
}).then(function(json){
    console.log("the json payload is", json)
})



//process the results of the request 
console.log("after fetch")
*/
/*
//let promise = fetch("https://randomuser.me/api") //10 seconds to respond 
*/


fetch("https://ip-fast.com/api/ip/?format=json&location=True").then(function(response){
    //do this when the results come back
    //console.log("processing fetch results")
    return response.json();
    
}).then(function(json){
    console.log("the json payload is", json.city)
    fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=" + json.city).then(function(response){
        return response.json();
    }).then(function(json){

    })
})





/*
.then(function(json){
    console.log("the json payload is", json.city)
})



//some code here...
console.log("before fetch")
let promise = fetch("https://randomuser.me/api") //10 seconds to respond 
console.log(promise);

let promise2 = promise.then(function(response){
    //do this when the results come back
    //console.log("processing fetch results")
    console.log("the promise response", response)
    console.log("the promise response", response.json());
    return response.json(); // returns the promise
    
})

console.log(promise2);

promise2.then(function(json){
    console.log("the json payload is", json)
})
//process the results of the request 
console.log("after fetch")
//some other code here...


//asyncrhonus code is multitasking as you are waiting on something
//synchronus code or blocking is you have to do it right then

*/