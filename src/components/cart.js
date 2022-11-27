import { Space, Row, Col, Button } from "antd";

const Cart = ({ cart }) => {
    const { product } = cart;
    return (
        <div>
            <Row>
                <Col style={{border: "1px solid #000"}} span={12}>Product Details</Col>
                <Col style={{border: "1px solid #000"}} span={4}>Quantity</Col>
                <Col style={{border: "1px solid #000"}} span={4}>Unit Price</Col>
                <Col style={{border: "1px solid #000"}} span={4}>Total</Col>
                {product.map(p => {
                    return (
                        <>
                            <Col style={{border: "1px solid #000"}} span={12}>
                                <div>
                                    <img src={p.small_pictures[0].url}/>
                                    <p>{p.name}</p>
                                </div>
                            </Col>
                            <Col style={{border: "1px solid #000"}} span={4}>{p.qty}</Col>
                            <Col style={{border: "1px solid #000"}} span={4}>{p.price[0]}</Col>
                            <Col style={{border: "1px solid #000"}} span={4}>{p.price[0] * p.qty}</Col>
                        </>
                    )
                })}
                <Col style={{border: "1px solid #000"}} span={12}>Total</Col>
                <Col style={{border: "1px solid #000"}} span={6}>{cart.totalQty}</Col>
                <Col style={{border: "1px solid #000"}} span={6}>{cart.totalPrice}</Col>
            </Row>
        </div>
    )
}

export default Cart;