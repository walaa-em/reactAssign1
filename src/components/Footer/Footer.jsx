import React, { Component } from 'react'

export default class Footer extends Component {



  render() {


    return (
      <>

       <footer>
              
                <div className="container py-5">

                    <div className="row">


                        <div className="col-lg-4 py-4">

                            <div className='text-center'>

                                <h4>LOCATION</h4>
                                <p>2215 John Daniel Drive
                                    <br />Clark, MO 65243
                                </p>

                            </div>

                        </div>

                        <div className="col-lg-4 py-4">
                            <div>

                                <h4 className='text-center pb-3'>AROUND THE WEB</h4>

                                <div className='social-icons d-flex justify-content-center align-items-center'>
                                    <div><i className='fa-brands fa-facebook-f fs-4'></i></div>
                                    <div><i className='fa-brands fa-twitter fs-4'></i></div>
                                    <div><i className="fa-brands fa-linkedin-in fs-4"></i></div>
                                    <div><i className="fa-brands fa-dribbble fs-4"></i></div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4 py-4">


                            <div className='text-center'>
                                <h4>ABOUT FREELANCER</h4>
                                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                            </div>


                            <div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className='copyrights text-center py-3' >
                    <small>Copyright © Your Website 2021</small>
                </div>

       </footer>
        
      </>
    )
  }
}
