import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/614k4M7xFCL._SR1050,1050_.jpg"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"(the orginale link )
          alt=""
        />

        <div className="home__row">
          {/**product */}
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/31B6CWp4N8L._SR420,420_.jpg"
            //
            // https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg(the orginal link )
          />

          <Product
            id="49538049"
            title="Kenwood KMix stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass BowL"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61MGM8RMZAL._SR1050,1050_.jpg"
            // https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg(the orginal link)
            //
          />

          {/**product */}
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row ">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image=" https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        {/* <div className="home__row ">
          <Product
            id="90829890"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="    https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/Fashion_Discovery/Lifestyle/PBM_2022/1080x2.40.5x._SY304_CB620448857_.jpg"
            // https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg(the orginal link)
          />
        </div> */}
        {/* <div className="home__row ">
          <Product
            id="90829890"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image=" https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/Fashion_Discovery/Lifestyle/PBM_2022/AZ_Lifestyle_030.5x._SY304_CB619024414_.jpg "
            // https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/Fashion_Discovery/Lifestyle/PBM_2022/1080x2.40.5x._SY304_CB620448857_.jpg(the orginal link)
          />
        </div> */}
      </div>
    </div>
  );
}
export default Home;
