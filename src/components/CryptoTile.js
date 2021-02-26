import React from 'react';

const CryptoTile = ({ data }) => {
  const { name, rate, icon } = data;
  return (
    <div className='card'>
      <div className='card-body'>
        <img className='coin-icon' src={icon} />
        <div>{name}</div>
        <div>{rate}</div>
      </div>
    </div>
  );
};

export default CryptoTile;
