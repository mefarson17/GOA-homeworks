// .length -- გვიჩვენებს  ზომას 
// .charAt(index) -- გვიჩვენებს ჩაწერილ ინდექსზე მდგომ ელემენტს 
/* .at() -- იგივე რაც .charAt(index) იმ განსხვავებიტ რომ ინდექსად 
                        შეგვიძლია გამოვიყენოთ უარყოფითი რიცხვი
*/
// .slice(startIndex,endIndex) -- ყოფს სტრინგს მიცემული ინდექსების შუალედით 
// .toUpperCase() -- სტრინგი გამოაქვს დიდი ასოებით 
// .toLowerCase() -- სტრინგი გამოაქვს პატარა ასოებით 
// .trim() -- აშორებს დაშორებას ორივე მხრიდან 
// .trimStart() -- აშორებს დაშორებებს " " დასაწყისიდან
// .trimEnd() -- აშორებს დაშორებებს " " ბოლოდან
// .repeat() -- იმეორებს ტექსტს იმდენჯერ რამდენსაც ჩავწერთ ფრჩხილებში 
// .replace() -- მეთოდი რომელიც სტრინგის ერთ ნაწილს ცვლის მეორეთი მაგრამ მთვარი დეტალი არის ის რომ მხოლოდ პირველ დამთხვევას  ცვლის
// .replaceAll() -- მეთოდი რომელიც სტრინგის ყველა დამთხვევას  ცვლის მეორეთი 
// .split() -- მეთოდი რომელიც სტრინგს ყოფს ნაწილებად გამყოფი ელემენტით ვთქვათ " " და აბრუნებს მასივს



// განსხვავება .charAt(index)  და  .at() შორის არის ის რომ .charAt(index)-ში ინდექსის სახით უარყოფით რიცხვს ვერ ვიყენებთ ხოლო  .at() კი

const name = "giorgi" ; 

console.log(name.length)
console.log(name.charAt(2))
console.log(name.at(-1))
console.log(name.slice(0,3))
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.trim())
console.log(name.repeat(5))
console.log(name.replace("g","l"))
console.log(name.replaceAll("g","l"))
console.log(name.split("i"))




const userInfo = {
    userName : "Giorgi" , 
    age : 18 , 
    location : "Kutaisi , Georgia"
}