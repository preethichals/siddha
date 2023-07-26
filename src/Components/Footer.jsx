import React from 'react'

function Footer() {
  return (
    <>
    <div className='sticky-bottom'>
    <div className='d-flex justify-content-center bg-black p-2  '>
        <h6 className='w-25 m-auto text-center text-white'>Get 100% Refund Guarantee<br/>
(After attending 2 Day Live UFWP)</h6>
<h6 className="w-25 text-center py-3 px-3 rounded-3 bg-white lt-spc1 fw-bold m-auto">ENROLL NOW @ ₹1050/-</h6>
<div className='w-25 d-flex flex-column m-auto'><p className='text-white'>Secure Payment Options</p><span><img
                  className="p-1 m-auto"
                  src={require("../Images/Payment.png")}
                  alt="icon"
                  width={"auto"}
                  height={"50px"}
                  style={{ backgroundColor: "#c2c2c2" }}
                /></span></div>


    </div>
    </div>
    
    </>
  )
}

export default Footer