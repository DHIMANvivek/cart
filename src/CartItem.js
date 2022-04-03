import React from "react";
class CartItem extends React.Component{
render () {
        console.log('this.props',this.props)
        const {price , title , qty} = this.props.product;
        return(
            <div className="cart-item">

            <div className="left-block">


            <img style={styles.image} />

            </div>

            <div className="right-block">

            <div style={{fontSize: 25}}>{title}</div>
            <div style={{color: '#777'}}>{price}</div>
            <div style={{color: '#777'}}>{qty}</div>
            <div className="cart-item-actions">
            {/*Button */}
            <img alt="increase" className="action-icons" 
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            onClick={() => this.props.onIncreaseQuantity(this.props.product)}>

            </img>
            <img alt="decrease" className="action-icons"
             src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
             >

             </img>
            <img alt="delete" className="action-icons" 
            src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png">

            </img>
            </div>

            </div>

            </div>

        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;