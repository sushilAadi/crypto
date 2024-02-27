import React, { useState } from 'react';
import CardCoin from "../../../components/CardCoin/CardCoin";
import HeadingCaption from '../../../components/HeadingCaption/HeadingCaption';
import "./Watchlist.css";

const WatchList = ({ favorites }) => {
    
      
    return (
        <div className="ColorStyle p-3 card ">
            <h6 className='text-light '>Watchlist</h6>
            <br />
            <div className='overflow-x-auto whitespace-nowrap'>
            {favorites?.map(i=><div className="inline-block w-[200px]">
                    <CardCoin coin={i?.image} FontSize="12px" textColor="gray"  BitcoinName={i?.name} coinShortName={i?.symbol?.toUpperCase}/>
                    <HeadingCaption
                        heading={`$ ${i?.current_price?.toFixed(2)}`}
                        caption={`${i?.price_change_percentage_24h <0?"-":"+"}${i?.price_change_percentage_24h?.toFixed(2)}%`}
                        textColor={`${i?.price_change_percentage_24h < 0 ? "red" : "#8bc34a"}`}
                   
                    />
                </div>)}
               
                
            </div>
        </div>
    )
}

export default WatchList