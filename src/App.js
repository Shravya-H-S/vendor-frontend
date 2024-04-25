
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
// import CartList from './components/CartList';

function App() {

  const [product, setProduct]= useState([
    {
      url:"https://5.imimg.com/data5/SELLER/Default/2023/2/MJ/QK/FH/12982737/whatsapp-image-2023-02-17-at-2-03-48-pm.jpeg",
      name:'White Shoes',
      category:'Shoes',
      description:'These shoes hug your feet with soft leather and cushiony insoles',
      price:2999,

    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xYBe8N7Xsi4NbxP4taoKVeE1Wxz2e8Iurg&s",
      name:'Boat Watch',
      category:'Watches',
      description:'A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory for men and women.',
      price:3999
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCew7lJpREugDFJSUn9JJ_LLD_Wn04cOulNw&s",
      name:'Dubai Perfumes',
      category:'Perfumes',
      description:'Instead of solely focusing on the visual aspects, incorporate descriptions that appeal to other senses such as touch,fragance.',
      price:5999
    },
    {
      url:"https://i0.wp.com/www.craftshades.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-27-at-7.36.43-PM.jpeg?fit=1280%2C1280&ssl=1",
      name:'Leather Bag',
      category:'Bags',
      description:'',
      price:400000
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvzEuvBIJ5648fU9QOaiMQHsGIF4ZeN1vIg&s",
      name:'Diamond Jewellery',
      category:'Jewellery',
      price:1000000
    },
  ])


  const [cart, setCart] = useState([])
  console.log(cart)

  const addToCart = (data) => {
    setCart([...cart, data])
  }


  return (
    <div>
      <Header/>
      <ProductList product={product} addToCart={addToCart}></ProductList>
      {/* <CartList cart={cart}></CartList> */}
    
    </div>
  );
}

export default App;
