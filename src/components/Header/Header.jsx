import React, { Component } from 'react'

export default class Header extends Component {

  render() {

    return (
      <>
        <header className='text-center py-2 vh-100'>
          <img src="/startreact-v2/images/avataaars.svg" alt=""></img>
          <h1>START REACT</h1>
          <div className='py-3'>
            <span className='line'></span>
            <i className="fa-solid fa-star fs-2"></i>
            <span className='line'></span>
          </div>

          <p>Graphic Artist - Web Designer - Illustrator</p>

        </header>
      </>
    )
  }
}
