import React from 'react'
import '../css/Drawer.css'
import {useNavigate} from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';
function Drawer() {
    var navigate = useNavigate()
  return (
    <div className = 'drawer'>
        <h3 onClick={()=>navigate('/products/')} className="drawer-header">
            SHOP
        </h3>
        <div id = 'top-div' className="divider">

</div>
        <div onClick={()=>navigate('/products/apple')} className="drawer-option">
            Apple
        </div>
        <div className="divider">

        </div>
        <div onClick={()=>navigate('/products/samsung')} className="drawer-option">
            Samsung
        </div>
        <div className="divider">

</div>
        <div onClick={()=>navigate('/products/microsoft')}  className="drawer-option">
            Microsoft
        </div>
        <div className="divider">

</div>
<div className="tab">
    <StorefrontIcon style={{fontSize:20,width:20, color:'rgb(189, 183, 183)'}}/>
   <p>S</p>
   <p>H</p>
   <p>O</p>
   <p>P</p>

 
</div>



    </div>
  )
}

export default Drawer