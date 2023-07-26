import React from "react";

function MainPage() {
  return (
    <>
      <div className=" ">
        <div className="container pt-4 pb-4">
          <div className="row">
             {/* Section */}
          <section
            className="mt-5 col-md-5 text-center"
          >
            <h4 className="fs-1 txt-clr1 lt-spc2 text-capitalize fw-semibold">
            {" "}
            Siddharth Bhanushali
          </h4>
          <p className="fs-6 lt-spc2 fw-semibold ms-3 text-uppercase txt-clr2">
            {" "}
            Trader | Investor | Entrepreneur
          </p>
            
          </section>
            <div className="col-md-6 mt-5">
              {/* Section */}
              <section className="bg-white p-4 rounded-4 d-flex flex-column ">
                <h5 className="heading1 fw-bold txt-color2 text-capitalize lh-lg">
                  Ready to Build{" "}
                  <span className="txt-color1 text-uppercase">
                    Massive Wealth
                  </span>
                  <br /> With <span className="txt-color1">Stock Trading</span>{" "}
                  putting in
                  <br /> Just{" "}
                  <span className="text-uppercase txt-color1">
                    15 mins every Weekend?
                  </span>
                </h5>
                <p className="txt align-items-center justify-content-center">
                  <span>
                    <img
                      className="p-1 m-auto"
                      src={require("../Images/icon-violete.png")}
                      alt="icon"
                      width={"25px"}
                      height={"25px"}
                      style={{ backgroundColor: "#Edeced" }}
                    />
                  </span>
                  <span className="fs-6 ms-2">
                    {" "}
                    Learn Risk-Free Trading Strategies
                  </span>{" "}
                </p>
                <p className="txt align-items-center justify-content-center">
                  <span>
                    <img
                      className="p-1 m-auto"
                      src={require("../Images/icon-violete.png")}
                      alt="icon"
                      width={"25px"}
                      height={"25px"}
                      style={{ backgroundColor: "#Edeced" }}
                    />
                  </span>
                  <span className="fs-6 ms-2">
                    {" "}
                    Earn second Monthly income without leaving your job
                  </span>{" "}
                </p>
                <p className="txt align-items-center justify-content-center">
                  <span>
                    <img
                      className="p-1 m-auto"
                      src={require("../Images/icon-violete.png")}
                      alt="icon"
                      width={"25px"}
                      height={"25px"}
                      style={{ backgroundColor: "#Edeced" }}
                    />
                  </span>
                  <span className="fs-6 ms-2"> Twice-a-Week Assistance</span>{" "}
                </p>
                <p className="txt align-items-center justify-content-center">
                  <span>
                    <img
                      className="p-1 m-auto"
                      src={require("../Images/icon-violete.png")}
                      alt="icon"
                      width={"25px"}
                      height={"25px"}
                      style={{ backgroundColor: "#Edeced" }}
                    />
                  </span>
                  <span className="fs-6 ms-2">
                    {" "}
                    English-Hindi mix language
                  </span>{" "}
                </p>
              </section>
              <div className="m-4 " style={{ width: "85%" }}>
                <h5 className="text-center bg-light py-2 px-3 rounded-3 lt-spc1 fw-semibold">
                  ENROLL NOW @ ₹1050/-
                </h5>

                <p className="text-center lt-spc2 fw-medium">
                  100% Refund Guarantee <br />
                  (After attending 2-Days Live Event)
                </p> 
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
