import InitialData from "../../initialData"

class Insights{

    constructor(initialProducts){
        this.nonCreatedProducts = initialProducts;
        this.onSellProducts = 0;
        this.expiredProducts = 0;
        this.soldProducts = 0;
    }

    productCreated(){
        this.onSellProducts++;
        this.nonCreatedProducts--;

    }

    productSold(){
        this.onSellProducts--;
        this.soldProducts++;
    }

    productExpired(){
        this.onSellProducts--;
        this.expiredProducts++;
    }

    productReactivated(){
        this.onSellProducts++;
        this.expiredProducts--;
    }

}


export let insights = new Insights(InitialData.InitialProducts);

