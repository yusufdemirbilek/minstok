import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    width: '200px', // Kart genişliği
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '18px',
  };

  return (
    <div className="stock-management" style={{ display: 'flex', justifyContent: 'center' }}>
      
      <div className='card' style={cardStyle}>
        <Link to='/stokduzenle' style={linkStyle}>STOK DÜZENLE/EKLE</Link>
      </div>
      <div className='card' style={cardStyle}>
        <Link to='/qrolustur' style={linkStyle}>QR OLUŞTUR</Link>
      </div>
    </div>
  );
};

export default Home;
