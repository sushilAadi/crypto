import React, { useState } from 'react'
import HeadingCaption from '../../components/HeadingCaption/HeadingCaption'

const CoinData = ({i,addToFav,isFavorite}) => {

  return (
    <tr>
    <td>
      <i role="button"  className={`fa-solid fa-star cursor-pointer ${isFavorite ? 'text-warning' : ''}`} onClick={addToFav} /> 
    </td>
    <td> {i?.market_cap_rank}</td>
    <td className="fw-light ">
      <div className="d-flex align-items-center ">
        <img
          src={i?.image}
          width="25px"
          className="me-3 "
          alt="coin"
        />
        <HeadingCaption
          heading={i?.name}
          caption={i?.symbol}
          textColor="#999999"
          fontSize="10px"
          fontHSize="12px"
        />
      </div>
    </td>
    <td className="fw-light TextSize">$ {i?.current_price}</td>
    <td className="fw-light TextSize ">
      <i className={`fa-solid fa-chevron-down   me-1 text-danger`} />
      <span className={`text-danger`}>{i?.low_24h}</span>
    </td>
    <td className=" TextSize fw-light TextSize ">
      {" "}
      <i class="fa-solid fa-chevron-up  text-success me-1" />
      <span className=" text-success">{i?.high_24h}</span>
    </td>
    <td className="fw-light TextSize ">{i?.market_cap}</td>
    <td className="fw-light TextSize ">{i?.total_volume}</td>
    <td className="fw-light TextSize ">{i?.total_supply}</td>
  </tr>
  )
}

export default CoinData
