export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD": return incrementProduct(state, action.payload)
        case "REMOVE": return decrementProduct(state, action.payload)
        case "DELETE": return {
            product: [],
            totalQty: 0,
            totalPrice: 0
        };
    }
}

const incrementProduct = (cart, product) => {
    const tempProduct = cart.product.filter(e => e.id == product.id);
    if (tempProduct.length) {
        const tempProducts = cart.product.map(e => {
            if(e.id == product.id ) {
                return {
                    ...e,
                    qty: e.qty+1
                }
            }
            else {
                return e;
            }
        })
        return {
            product: tempProducts,
            totalQty: cart.totalQty + 1,
            totalPrice: cart.totalPrice + product.price[0]
        }
    } else {
        const tempProducts = [...cart.product, { ...product, qty: 1 }]
        return {
            product: tempProducts,
            totalQty: cart.totalQty + 1,
            totalPrice: cart.totalPrice + product.price[0]
        }
    }

}

const decrementProduct = (cart, product) => {
    if(cart.product.length == 0) return cart;
    const tempProduct = cart.product.filter(e => e.id == product.id);
    if(tempProduct.length == 0) return cart;
    if(tempProduct.length) {
        if(tempProduct[0].qty == 1) {
            const tempProducts = cart.product.filter(e => e.id != product.id );
            return {
                product: tempProducts,
                totalQty: cart.totalQty - 1,//product.qty
                totalPrice: cart.totalPrice - product.price[0]// product.price[0]*product.qty
            }
        } else {
            const tempProducts = cart.product.map(e => {
                if(e.id == product.id ) {
                    return {
                        ...e,
                        qty: e.qty-1
                    }
                }
                else {
                    return e;
                }
            })
            return {
                product: tempProducts,
                totalQty: cart.totalQty - 1,
                totalPrice: cart.totalPrice - product.price[0]
            }
        }
    }
}