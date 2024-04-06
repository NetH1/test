import {useEffect, useState} from 'react';
import {CryptoItem} from '../CryptoItem';

export const CryptoList = (props) => {
   const [crypto, setCrypto] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      try {
         const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1');
         if (!response.ok) {
            throw new Error('Failed to fetch data');
         }
         const data = await response.json();
         setCrypto(data);
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };
 return (
    <table className=''>
        {crypto.map((cryp, index) => 
        <CryptoItem key={cryp.id} {...cryp} index={index} />
      )}
    </table>
 )
}
    



