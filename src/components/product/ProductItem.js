import React, {Component} from "react";

class ProductItem extends Component {
    constructor(props) {
        super(props);
        
    }

    doSomething(productName) {
        console.log(productName);
    }

    render() {
        const {productName, unitPrice, thumbnail} = this.props.product;

        return (
            <div className="col-md-3 col-sm-6">
            <img className="img-fliud img-thumbnail" src={thumbnail} />
                <h5 className="mt-2">{productName}</h5>
                <p className="text-right title">{unitPrice} บาท</p>
                <button className="btn btn-block btn-secondary title"  onClick={() => this.props.onAddOrder(this.props.product)}>
                    ซื้อ
                </button>
                <hr />
            </div>
        )
    }
}
export default ProductItem;