import React from "react";
import "./Partner.css";
import Partner1 from "../../public/images/partner1.png";
import Partner2 from "../../public/images/partner2.png";
// import Partner3 from "../../public/images/partner3.png";

function Partner() {

  const partners = [
    { id: 1, src: Partner1 },
    { id: 2, src: Partner2 },
    // { id: 3, src: Partner3 }, 

  ];

  return (
    <>
      <div className="partner flex flex-col mx-auto lg:py-24 lg:px-0 xs:py-9 xs:px-6 gap-gap10 ">
        <div className="partner-container flex flex-col items-center lg:gap-12 xs:gap-7 overflow-hidden">
          <h2 className=" font-bold lg:text-3xl xs:text-2xl text-center">
            Our Partner
          </h2>
          <div className="frame205 flex items-start gap-14">
            {/* Render partner secara dinamis dari array partners */}
            {partners.map((partner) => (
              <div
                key={partner.id} // Penting untuk kinerja React saat rendering list
                className="logoplaceholder flex w-120 h-120 content-center items-center"
              >
                <img
                  src={partner.src}
                  alt="partnerlogo"
                  className="w-120 h-120 flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;