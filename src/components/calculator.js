import React from 'react'

export default function Calculator() {
    const containerStyle={
        background: 'linear-gradient(274deg, rgba(2,0,36,1) 0%, rgba(25,207,138,1) 0%, rgba(23,208,125,1) 40%, rgba(17,205,209,1) 61%, rgba(0,212,255,1) 100%)',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    const calcBody={
        height:'70%',
        width:'25%',
        backgroundColor:'blue'
    }
  return (
    <div className='container' style={containerStyle}>
      <div className="calculator" style={calcBody}></div>
    </div>
  )
}
