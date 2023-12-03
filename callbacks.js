let stocks = {
  Fruits: ["strawberry", "grabes", "banana", "apple"],
  liquids: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["choclate", "peanuts"],
};
let order = (Fruit_name, holder_name, topping_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected.`);

    call_production(holder_name, topping_name);
  }, 2000);
};

let production = (holder_name, topping_name) => {
  setTimeout(() => {
    console.log("Production has started");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);

        setTimeout(() => {
          console.log("machine has started");

          setTimeout(() => {
            console.log(
              `ice cream was placed on ${stocks.holder[holder_name]}`
            );
            setTimeout(() => {
              console.log(`${stocks.toppings[topping_name]} as added.`);

              setTimeout(() => {
                console.log("serve ice cream");
              }, 7000);
            }, 3000);
          }, 5000);
        }, 1000);
      }, 4000);
    }, 3000);
  }, 0);
};

order(0, 0, 1, production);
