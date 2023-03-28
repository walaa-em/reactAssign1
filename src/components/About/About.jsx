import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <>
            <section id='about' className='py-5' >

                <div className="container py-5 m-auto ">
                    
                    <h2>ABOUT</h2>


                    <div className='text-center py-3'>
                        <span className='line'></span>
                        <i className="fa-solid fa-star fs-2"></i>
                        <span className='line'></span>
                    </div>

                    <div className='row g-2'>
                        <div className="col-lg-4 col-md-6 ms-auto pe-3">
                            <div>
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 me-auto">
                            <div>
                                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                            </div>
                        </div>
                    </div>

                </div>


      </section>
        
      </>
    )
  }
}
