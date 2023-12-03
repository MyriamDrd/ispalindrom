let stocks = {
  Fruits: ["strawberry", "grabes", "banana", "apple"],
  liquids: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["choclate", "peanuts"],
};

//let is_shop_open = true;
//let odrer = () => {
//return new Promise((resolve,reject){
//if () {
//  resolve
//}else {
// reject
//}

//})

//}
//order()
//.then()
//.then()
//.then()
//.then()
//.catch()
//.finally()
// we will remplace thn ..catch..finally by try catch

//async function order () {
//try {

//} catch(error) {

//} finally {
// console.log("Order complete")
//}
//}
// meme s'il ya une erreur on va finir le code par finally  ( try --> then)
let is_shop_open = true;
function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected `);

    await time(0);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruits");

    await time(1000);
    console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added `);

    await time(1000);
    console.log("Start the machine");

    await time(2000);
    console.log(`Ice cream placed ${stocks.holder[1]}  `);

    await time(3000);
    console.log(`${stocks.toppings[0]} was selected `);

    await time(2000);
    console.log("Serve the ice cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended,shop is closed");
  }
}

kitchen();
