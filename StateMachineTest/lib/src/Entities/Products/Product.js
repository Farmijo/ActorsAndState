import ProductStatesDefinition from "./productStateMachine"

class Product{

    constructor(){
        this.name = "Product_" + Math.random() * 10000;
        this.productStateContainer = new ProductStatesDefinition();
    }

}

export default Product;