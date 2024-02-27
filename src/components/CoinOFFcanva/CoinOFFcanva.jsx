import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./CoinOFFcanva.css"
import CryptoCard from '../CryptoCard/CryptoCard';


const CoinOFFcanva = ({show,handleClose,data,setSelectedCoin}) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement='end'  className="OffcanvasStyle">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {data?.map(i=><CryptoCard coin={i} setSelectedCoin={setSelectedCoin} handleClose={handleClose}/>)}
        
          
        </Offcanvas.Body>
      </Offcanvas>
  )
}

export default CoinOFFcanva