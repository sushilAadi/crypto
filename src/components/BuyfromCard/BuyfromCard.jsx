import React from 'react'
import CardCoin from "../../components/CardCoin/CardCoin";
import CoinOFFcanva from "../CoinOFFcanva/CoinOFFcanva";
import "./BuyfromCard.css"

const BuyfromCard = ({ handleShow,selectedCoin }) => {
    return (

        <div className="d-flex gap-2 offcanvasBorder nowrap p-3  mb-3 justify-content-between align-items-center w-100 rounded ">
            <div className='w-100'>
                <p className="fontStyle mb-2 nowrap text-truncate"> {selectedCoin?.name} Price</p>
                <CardCoin coin={selectedCoin?.image} FontSize="12px" textColor="gray" BitcoinName={selectedCoin?.name} coinShortName={selectedCoin?.symbol?.toUpperCase()} />
            </div>
            
            <i className="fa-solid fa-chevron-down cursor-pointer" onClick={handleShow} />
            <div>
            </div>
        </div>
    )
}

export default BuyfromCard