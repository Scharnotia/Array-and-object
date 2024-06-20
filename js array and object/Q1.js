// In the following shopping cart add, remove, and edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea',  honey]
// add 'Meat' in the beginning of Your shopping cart if it has not been already added
// add Sugar at the end of your shopping cart if it has not been already added
// remove 'honey' if you are allergic to honey
//  modify Tea to 'Green Tea'


// 1st question
const shoppingcart = ['MILK', 'COFFEE', 'TEA', 'HONEY'];
let meatfound = false;

for (let index = 0; index < shoppingcart.length; index++) {
    const element = shoppingcart[index];
    if (element == "MEAT") {
        meatfound = true;
        console.log("MEAT is already there");
        break;
    }
}
if (meatfound == false) {
    shoppingcart.unshift("MEAT")
    console.log("MEAT is added")
}
console.log(shoppingcart)

// 2nd question

let sugarfound = false;

for (let index = 0; index < shoppingcart.length; index++) {
    const element = shoppingcart[index];
    if (element == "SUGAR") {
        sugarfound = true;
        console.log("SUGAR is already there");
        break;
    }
}
if (sugarfound == false) {
    shoppingcart.push("SUGAR")
    console.log("SUGAR is added")
}
console.log(shoppingcart)

// 3rd question

allergictohoney = true;
if (allergictohoney) {
    for (let index = 0; index < shoppingcart.length; index++) {
        const element = shoppingcart[index];
        if (element == "HONEY") {
            shoppingcart.splice(index, 1);
            console.log("HONEY IS REMOVED")
            console.log(shoppingcart)

        }

    }
}


for (let index = 0; index < shoppingcart.length; index++) {
    const element = shoppingcart[index];
    if (element == "TEA") {
        shoppingcart[index] = "GREEN TEA"
        console.log("TEA is changed to GREEN TEA")
        console.log(shoppingcart)
    }
}

