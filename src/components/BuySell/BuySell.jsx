import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './BuySell.css'
import BuyfromCard from "../BuyfromCard/BuyfromCard"
import CoinOFFcanva from "../CoinOFFcanva/CoinOFFcanva"
import BuyInputCard from "../BuyInputCard/BuyInputCard";
import Button from "../Button/Button";
import { exchangeData } from '../../Service/Exchange';
import { useQuery } from 'react-query';


const BuySell = () => {
  const [show, setShow] = useState(false);
  const [selectedCoin,setSelectedCoin] = useState("")
  const { data, isLoading, error } = useQuery('coinsData', exchangeData, {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 3600000,
    retry: 2,
    onSuccess: (data) => {
      if (data && data.length > 0) {
        setSelectedCoin(data[0]);
      }
    },
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='buySellTab'>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="border-0"
      >
        <Tab className='p-3' eventKey="home" title="  Buy">
          <BuyfromCard handleShow={handleShow} selectedCoin={selectedCoin} />
          <CoinOFFcanva show={show} handleClose={handleClose} data={data} setSelectedCoin={setSelectedCoin} />
          <BuyInputCard handleShow={handleShow} CoinShortname="USD" />
          <BuyInputCard handleShow={handleShow} CoinShortname="BTC" />
          <Button buttonSize="100px" title="Buy BTC" BgColor="#2c65f0" />


        </Tab>

        <Tab className='p-3' eventKey="profile" title="Sell">
          Tab content for Profile
        </Tab>
      </Tabs>

    </div>

  )
}

export default BuySell