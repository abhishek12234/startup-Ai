import React from 'react';
import { IoRocketOutline } from "react-icons/io5";
import { GiAstronautHelmet } from "react-icons/gi";
const Feature = () => {
  return (
    <>
      <section className="feauture-two">
        <div className="container px-5 w-full">
          <div className="row grid grid-cols-1 md:grid-cols-2 gap-4">
            {/*Start Feauture Two Single */}
            <div className="wow animated fadeInRight" data-wow-delay="0.1s">
              <div className="feauture-two__single">
                <div
                  className="feauture-two__single-img"
                  style={{ backgroundImage: 'url(/assets/img/resource/feauture-v2-img1.jpg)' }}
                >
                  <div className="icon-box">
                    <span className="icon-light-bulb"><IoRocketOutline/></span>
                  </div>
                </div>
                <div className="feauture-two__single-content">
                  <h2>
                    <a href="#">
                      We Will Provide You <br />
                      By Best Design
                    </a>
                  </h2>
                </div>
              </div>
            </div>
            {/*End Feauture Two Single */}

            {/*Start Feauture Two Single */}
            <div className="wow animated fadeInLeft" data-wow-delay="0.1s">
              <div className="feauture-two__single">
                <div
                  className="feauture-two__single-img"
                  style={{ backgroundImage: 'url(/assets/img/resource/feauture-v2-img2.png)' }}
                >
                  <div className="icon-box">
                    <span className="icon-engineer"><GiAstronautHelmet/></span>
                  </div>
                </div>
                <div className="feauture-two__single-content">
                  <h2>
                    <a href="#">
                      We Have Qualified <br />
                      Engineer’s Team
                    </a>
                  </h2>
                </div>
              </div>
            </div>
            {/*End Feauture Two Single */}
          </div>
        </div>
      </section>
      {/*End Feauture Two */}
    </>
  );
};

export default Feature;
