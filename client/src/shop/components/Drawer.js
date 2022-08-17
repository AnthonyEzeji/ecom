import React from 'react'
import '../css/Drawer.css'
import {useNavigate} from 'react-router-dom'
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
    
</div>



    </div>
  )
}

export default Drawer