import React from "react";

function Enrollment() {
  const course1 = [
    {
      id: "001",
      course: "Basics of Stock Market Series",
    },
    {
      id: "008",
      course: "Strategy to Choose High-Profit Stocks",
    },
    {
      id: "002",
      course: "Trading System (Buy & Short)",
    },
    {
      id: "003",
      course: "System Case Studies for in-depth Clarity",
    },
    {
      id: "004",
      course: "Stock Allocation",
    },
    {
      id: "005",
      course: "Mindset Management for Successful Trading",
    },
    {
      id: "006",
      course: "10 Self-Assessment Exams",
    },
    {
      id: "007",
      course: "Twice-a-Week Support",
    },
  ];
  const course2 = [
    {
      id: "001",
      course: "Trading Strategies for Asian Paints",
    },
    {
      id: "002",
      course: "LIVE Market Analysis",
    },
    {
      id: "003",
      course: "Options Strategy",
    },
  ];
  return (
    <>
      <div className="container">
        {/* Enrollement */}
        <section className="clearfix mt-3" >
          <h4 className="fs-3 rounded-4 text-center heading2 p-4 text-white lt-spc2" style={{backgroundColor:"#C294a8"}} >
            Enrollment Ending Soon.{" "}
            <span className="fw-semibold text-uppercase ">
              Door Closes on Sunday, 30 July 2023.
            </span>
          </h4>
          <section className="pt-4">
            <h4 className="txt text-center lt-spc2 fs-3 fw-semibold txt-clr1">
              What You Will Learn?
            </h4>
            <h4 className="heading1 text-center mt-4 lt-spc2 mb-4">
              Ultimate Financial Wisdom Program
            </h4>
          </section>
        </section>
        <div className="container row justify-content-center align-items-center" style={{backgroundColor:"#f9f4f6"}}>
          {/* Course */}
          {/* section-01 */}
          <section className=" mt-4 p-4 rounded-4 col-md-5" style={{backgroundColor:'#eddfe5'}}>
         
              <h5 className="pt-3 pb-3 text-center heading1 fw-semibold text-uppercase">Course - 80+ Videos</h5>
           
            
              <h5 className="pb-3 text-center lt-spc2">(Beginners to Advanced)</h5>
            
            {course1 &&
              course1.map((m, index) => {
                return (
                  <p
                    key={index}
                    className="txt align-items-center justify-content-center"
                  >
                    <span>
                      <img
                        className="p-1 m-auto"
                        src={require("../Images/icon-violete.png")}
                        alt="icon"
                        width={"25px"}
                        height={"25px"}
                        style={{ backgroundColor: "#ffffff" }}
                      />
                    </span>
                    <span className="fs-6 lh-lg ms-2"> {m.course}</span>{" "}
                  </p>
                );
              })}
          </section>

          {/* section-02 */}
          <section className=" mt-4 ps-4 rounded-4 col-md-5">
            <h5 className="heading1 txet-center fw-bold txt-color2 text-capitalize lh-lg">
              <span className="txt-color1 text-uppercase text-center ms-5">
                Bonus 2 - Day LIVE Event
              </span>
            </h5>
            <h5 className="heading1 fw-bold txt-color2 text-capitalize lh-lg">
              <h5 className="ms-5 pb-3">(Trade LIVE with Siddharth)</h5>
            </h5>
            {course2 &&
              course2.map((m, index) => {
                return (
                  <p
                    key={index}
                    className="txt align-items-center justify-content-center"
                  >
                    <span>
                      <img
                        className="p-1 m-auto"
                        src={require("../Images/icon-violete.png")}
                        alt="icon"
                        width={"25px"}
                        height={"25px"}
                        style={{ backgroundColor: "#E3e3e3" }}
                      />
                    </span>
                    <span className="fs-6 lh-lg ms-2"> {m.course}</span>{" "}
                  </p>
                );
              })}
            <h5 className="text-center mt-4 py-3 px-3 border border-1 border-secondary-subtle rounded-3 lt-spc1 fw-medium shadow" style={{backgroundColor:'#eddfe5'}}>
              ENROLL NOW @ ₹1050/-
            </h5>
            <p className="text-center mt-4">
              100% Refund Guarantee (After attending 2-Days Live Event)
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Enrollment;
