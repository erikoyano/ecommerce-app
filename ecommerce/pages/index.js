import React from 'react'
import { Cart, Footer, FooterBanner, HeroBanner, Layout, Navbar,Product } from '../components';

import { client } from '../lib/client';


const Home = ({products, bannerData}) => (
        <div>
         <HeroBanner  />
         {console.log(bannerData)}
                <div className='products-heading'>
                <h2> Minet's Little Bags </h2> 
                <p>Little bags sewn with love</p>
                 </div>
            

          <div className="products-container">
                {products?.map((product) => product.name)}
         </div>    
       
         {/* <FooterBanner  /> */}
       </div>
);
        
export const getServerSideProps = async () => {
       const query = '*[_type == "product"]';
       const products = await client.fetch(query);
        
       const bannerQuery = '*[_type == "banner"]';
       const bannerData = await client.fetch(bannerQuery);
        return {
            props: { products, bannerData }
          }
        }

export default Home;