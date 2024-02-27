import React from 'react'
import HeadingCaption from '../HeadingCaption/HeadingCaption'
import "./CryptoCard.css"


const CryptoCard = ({coin,setSelectedCoin,handleClose}) => {
  return (
    <div className='mb-4 CryptoCard' role="button" onClick={()=>{setSelectedCoin(coin);handleClose()}}>
     <div className='d-flex align-items-center '>
    <img src={coin?.image} width="30px" className="me-3 " alt="coin"/>
        <HeadingCaption
            heading={coin?.name}
            caption={coin?.symbol}
            textColor="#999999"
            fontSize="10px"
            fontHSize="12px"
        />
    </div>
    
    
    
    
    <HeadingCaption
    headerParentClass="innerCard"
    heading={`${coin?.symbol?.toUpperCase()} ${coin?.current_price?.toFixed(2)}`}
    // caption="$613.792"
    textColor="#999999"
    fontSize="10px"
    fontHSize="12px"

/>
   
  

  
</div>
  )
}

export default CryptoCard