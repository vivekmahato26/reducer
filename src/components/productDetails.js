import { Space, Image, Card } from "antd"
const { Meta } = Card;
const ProductDetails = ({product}) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={product.pictures[0].url} />}
        >
            <Meta title={product.name} />
        </Card>
    )
}

export default ProductDetails;