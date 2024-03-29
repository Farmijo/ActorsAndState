import Product  from "./src/Entities/Products/Product"
import { ProductTransitioner } from "./src/Entities/Products/productTransitions"
import { insights } from "./src/Data/Insights"
import  InitialData  from "./initialData"

let iterationIndex = 0;
let products;
global.changesIndex = 50;

process.stdin.resume();

// Loop
setInterval(function(){
    lifePassing();
}, 2400)
//

const lifePassing = function(){

    console.log("[STATUS] This is the iteration", iterationIndex  )

    if(iterationIndex == 0){
        global.productsToGenerate = 50;
        console.log("Generating data...", InitialData.InitialProducts)
        products = getAutogeneratedProducts(InitialData.InitialProducts);
    }

    products.map( product => {
        ProductTransitioner(product)
    });
    console.log(insights)

    iterationIndex++;
}



const getAutogeneratedProducts = function(numberOfProducts){

    let productArray = new Array();
    console.log(`Generating ${numberOfProducts} products`)
    for (let index = 0; index < numberOfProducts; index++) {
        productArray[index] = new Product();
    }

    return productArray;
}
