import React from 'react';
import CryptoTile from './CryptoTile';
import btc from '../assets/btc-icon.png';
import eth from '../assets/eth-icon.png';
import xem from '../assets/xem-icon.jpg';

const Home = () => {
  const tiles = [
    { id: 1, icon: btc, name: 'BTC', rate: 47000 },
    { id: 2, icon: eth, name: 'ETH', rate: 1500 },
    { id: 3, icon: xem, name: 'XEM', rate: 0.3 },
  ];
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className='d-flex'>
            {tiles.map((coin) => (
              <CryptoTile data={coin} />
            ))}
          </div>
        </div>
        <div className='col-6'>col2</div>
      </div>
    </div>
  );
};

export default Home;
