/*global scope  არის ცვლადი რომელიც გამოცხადებულია გლობალურად ანუ ფუნქციის ან ბლოკის გარეთ
ამისგან განსხვავებულია block scope რომელიც გულისხმობს იმ ცვლადებს რომლებიც გამოცხადებულნი არიან ფუნქციაში ან ბლოკში და მათზე წვდომა
გვაქვს მხოლოდ იმ ფუნქციისა თუ ბლოკის ფარგლებში რაცც შეეხება lexical scope არის ცვლადი რომლის გამოყენებაჩ შეგვიძლია შიდა ფუნქციაში */


const name ="Giorgi " // გლობალური ცვლადი

{
    let age = 18; //ბლოკური ცვლადი
}

function student(){
    let name1 = "giorgi"

    function user(){
        console.log(name1) // lexical ცვლადი
    }
}


console.log(name)
console.log(age)
console.log(name1)