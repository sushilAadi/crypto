import React, { useEffect, useState } from "react";
import CardCoin from "../../components/CardCoin/CardCoin";
import HeadingCaption from "../../components/HeadingCaption/HeadingCaption";
import Table from "react-bootstrap/Table";
import "./Cryptotable.css";
import axios from "axios";
import CoinData from "./CoinData";
import { useQuery } from "react-query";
import { exchangeData } from "../../Service/Exchange";

const Cryptotable = () => {
  
  const { data, isLoading, error } = useQuery('myData', exchangeData,{
    refetchOnWindowFocus:false,
    staleTime: 60000,
    cacheTime: 3600000,
    retry:2
  });

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const addToFav = (coin) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFav = prevFavorites.some((fav) => fav.id === coin.id);
      return isAlreadyFav
        ? prevFavorites.filter((fav) => fav.id !== coin.id)
        : [...prevFavorites, coin];
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  

  
  return (
    <div className="p- w-100 overflow-auto dashboardStyle">
      <div>
        <Table className="table-black  table-dark TextSize " responsive="xl">
          <thead>
            <tr>
              <th className="fw-light"></th>
              <th className="fw-light">#</th>
              <th className="fw-light">Name</th>
              <th className="fw-light">Price $</th>
              <th className="fw-light">Lose Price</th>
              <th className="fw-light">High 24hr</th>
              <th className="fw-light">Market Cap</th>
              <th className="fw-light">Total Volume</th>
              <th className="fw-light">Total Supply</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i) => (
              <CoinData key={i.id} i={i} addToFav={()=>addToFav(i)}  isFavorite={favorites.some((fav) => fav.id === i.id)} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Cryptotable;
