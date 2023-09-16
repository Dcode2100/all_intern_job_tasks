import Contribute from 'components/header/Contribute'
import React from 'react'
import Header from 'components/header/Header'
import Footer from 'components/Footer'
const contribute = () => {
  return (
    <div>
      <div className="about-header">
          <Header />
        </div>
        <div style={{marginTop:"5.3rem"}}>
        <Contribute/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default contribute