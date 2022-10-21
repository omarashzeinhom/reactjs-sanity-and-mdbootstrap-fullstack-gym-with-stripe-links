// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
//MDB Styles
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
//Sanity Client
import { client, urlFor } from "../../client";
import { useEffect, useState } from "react";

export default function AboutBrands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const query = '*[_type == "brands"]';
    client.fetch(query).then((data) => setBrands(data));
  }, []);

  return (
    <>
        <h5 className="text-white text-center">
          Br<span className="text-info">ands</span>{" "}
        </h5>
        <MDBRow>
          <MDBCol size={12}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper py-4 px-2   rounded-1 w-100  bg-dark "
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index + brand}>
                  <img
                    src={urlFor(brand.brandimg)}
                    loading="lazy"
                    alt="swiperimage"
                    height="75rem"
                    width="150rem"
                    className="rounded-5 shadow-5-strong bg-info"
                  />
                  <h5 className="text-white">
                    <em>{brand.brandtitle}</em>
                  </h5>
                </SwiperSlide>
              ))}
            </Swiper>
          </MDBCol>
        </MDBRow>
    </>
  );
}


