
import '../App.css';
import {  Button } from 'antd';
import {  useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate()
  return (
    <div className='flex shopping-card'>
        <div>Happy Shopping</div>

        
        <Button type="primary" onClick={() => navigate('nextpage')}>Add Products</Button>
        
        
        <div>  Cart </div>


    </div>
  );
}

export default Header;
