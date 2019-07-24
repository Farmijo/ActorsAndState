import { insights} from "../../Data/Insights"

export const ProductTransitioner = function(product) {

    console.log(`${product.name} created`)
    console.log("The state of the product on this iteration is", product.productStateContainer.state)

    const index = Math.random() * 100;

        if(index>changesIndex){

        switch(product.productStateContainer.state){
            case "nonExisting":
                product.productStateContainer.create(); 
                insights.productCreated()
                break;
            case "onSell":
                const expireIndex = Math.round(Math.random() * (100 - global.changesIndex)) + global.changesIndex;
                if(index > expireIndex){
                    product.productStateContainer.expire();
                    insights.productExpired();
                }
                else{
                    product.productStateContainer.sell();
                    insights.productSold();
                }
                break;
            case "expired":
                product.productStateContainer.reactivate();
                insights.productReactivated();
                break;
            case "sold":
                console.log("Product was sold, you're not be able to change it anymore")
                break;
            default:
                throw Error("Ya la has liado con los estados si has llegado aqui")
        }
    }
    else{
        console.log("The product will keep it state this iteration")
    }

}
