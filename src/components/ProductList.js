import '../App.css';
import { Card, Button } from 'antd';


function ProductList({product}){
    return(
        <div className='flex'>
            {
                product.map((productItem,productIndex)=>{
                    return(
                        <div style={{margin:20}}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img
                                    alt="example"
                                    src={productItem.url}
                                    style={{width: '100%', height: 200, objectFit: 'cover' }}
                                    width={100}
                                    height={100}
                                    />
                                }
                                >
                                <h3>{productItem.name}</h3>
                                <p>{productItem.description}</p>
                                <p>Rs.{productItem.price}/-</p>
                                <Button type="primary">Buy Now</Button>
                                </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;