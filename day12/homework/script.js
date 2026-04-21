let price = 100;

const changePrice = () => {
    newPrice = 50; // აქ არის შეცდომა
    console.log(`ახალი ფასი : ${newPrice}`);
};

changePrice();
console.log("გლობალური ფასი:", price); // აქ ისევ 100 უნდა ეწეროს!