// console.log("Hi...")

// Question#1
function link(){
    alert("success")
}


// Question#2
function foo(){
    alert("Thanks for puschasing a phone")
}

// Question#3
function deleterow(element){
element.parentNode.parentNode.remove();
}

/// Question#4
var supra = document.getElementById("supra")
function supra2(){
    supra.src = "file:///E:/Ayan%20Assignment/43-52/supra2.jpg";
}
function supra1(){
    supra.src = "file:///E:/Ayan%20Assignment/43-52/supra1.jpg" 
}

///Question#5
var counter = document.getElementById("counter")
var countertxt = counter.innerText

function add(){
 countertxt = +countertxt +1
 console.log(countertxt)
 return

}