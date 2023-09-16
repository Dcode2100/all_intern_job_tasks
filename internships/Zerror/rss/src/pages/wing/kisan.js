import Footer from 'components/Footer'
import Wing from 'components/Wing'
import React from 'react'
import Header from '../../../components/header/Header'


const kisan = () => {

  return (
    <div>
      <div className="about-header">
        <Header />
      </div>
      <div style={{marginTop:"5.3rem"}}>
      <Wing stitle={"Kisan"} title={`KISAN`} qimg1={`/kisan/qkisan1.jpg`} qimg2={`/kisan/qkisan2.jpg`} qimg3={`/kisan/qkisan3.jpg`} qimg4={`/kisan/qkisan4.jpg`} simg1={`/kisan/skisan1.jpg`} simg2={`/kisan/skisan2.jpg`} simg3={`/kisan/skisan3.jpg`} simg4={`/kisan/skisan4.jpg`}/>
      </div>
      <Footer/>
    </div>
  )
}

export default kisan