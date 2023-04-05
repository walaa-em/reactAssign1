import React, { Component } from 'react'

export default class Portfolio extends Component {


  //   changeModal = (text , imagePath ) => {

  //   document.getElementById('#portfolioModal1Label').innerHTML = text;

  //   document.getElementById('#modalImage').setAttribute('src' , imagePath)



  // }

  render() {



    return (
      <>

        <section id='portfolio' className='py-5'>


          <div className="container">

            <h2>PORTFOLIO</h2>

            <div className='text-center py-3'>
              <span className='line'></span>
              <i className="fa-solid fa-star fs-2"></i>
              <span className='line'></span>
            </div>


            <div className="row g-5">

              <div className="col-md-6 col-lg-4">

                <div className='position-relative '>

                  <div className='overlayer position-absolute top-0 left-0 d-flex justify-content-center align-items-center rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal">

                    <i className="fa-solid fa-plus fa-4x text-white"></i>

                  </div>

                  <div>
                    <img src="reactAssign1/images/cabin.png" alt="" className='w-100 rounded-2' />
                  </div>

                </div>

              </div>

              <div className="col-md-6 col-lg-4">

                <div className='position-relative '>

                  <div className='overlayer position-absolute top-0 left-0 d-flex justify-content-center align-items-center rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal2">

                    <i className="fa-solid fa-plus fa-4x text-white"></i>

                  </div>

                  <div>
                    <img src="reactAssign1/images/cake.png" alt="" className='w-100 rounded-2' />
                  </div>

                </div>

              </div>

              <div className="col-md-6 col-lg-4">

                <div className='position-relative '>

                  <div className='overlayer position-absolute top-0 left-0 d-flex justify-content-center align-items-center rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal3">

                    <i className="fa-solid fa-plus fa-4x text-white"></i>

                  </div>

                  <div>
                    <img src="reactAssign1/images/circus.png" alt="" className='w-100 rounded-2' />
                  </div>

                </div>

              </div>

              <div className="col-md-6 col-lg-4">

                <div className='position-relative '>

                  <div className='overlayer position-absolute top-0 left-0 d-flex justify-content-center align-items-center rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal4">

                    <i className="fa-solid fa-plus fa-4x text-white"></i>

                  </div>

                  <div>
                    <img src="reactAssign1/images/game.png" alt="" className='w-100 rounded-2' />
                  </div>

                </div>

              </div>

              <div className="col-md-6 col-lg-4">

                <div className='position-relative '>

                  <div className='overlayer position-absolute top-0 left-0 d-flex justify-content-center align-items-center rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal5">

                    <i className="fa-solid fa-plus fa-4x text-white"></i>

                  </div>

                        <div>
                    <img src="reactAssign1/images/safe.png" alt="" className='w-100 rounded-2'/>
                        </div>

                </div>

              </div>

              <div className="col-md-6 col-lg-4">

                <div className='position-relative'>

                  <div className='overlayer position-absolute top-0 left-0 d-flex justify-content-center align-items-center rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal6">

                    <i className="fa-solid fa-plus fa-4x text-white"></i>

                  </div>

                  <div>
                    <img src="reactAssign1/images/submarine.png" alt="" className='w-100 rounded-2' />
                  </div>

                </div>

              </div>

            </div>

          </div>














          {/* <!-- Modal --> */}

          {/* portfolioModal 1 */}

          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">

                <div className="modal-body text-center">



                  <h2 id="portfolioModal1Label">LOG CABIN</h2>



                  <div className='text-center py-3'>
                    <span className='line'></span>
                    <i className="fa-solid fa-star fs-2"></i>
                    <span className='line'></span>
                  </div>



                  <img src="reactAssign1/images/cabin.png" alt="" className='w-50' id='modalImage' />



                  <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">

                    <i className="fa-solid fa-xmark text-white pe-2"></i>Close Window

                  </button>
                </div>


              </div>
            </div>
          </div>

          {/* portfolioModal 2 */}


          <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">

                <div className="modal-body text-center">



                  <h2 id="portfolioModal1Label">TASTY CAKE</h2>



                  <div className='text-center py-3'>
                    <span className='line'></span>
                    <i className="fa-solid fa-star fs-2"></i>
                    <span className='line'></span>
                  </div>



                  <img src="reactAssign1/images/cake.png" alt="" className='w-50' id='modalImage' />



                  <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">

                    <i className="fa-solid fa-xmark text-white pe-2"></i>Close Window

                  </button>
                </div>


              </div>
            </div>
          </div>

          {/* portfolioModal 3 */}

          <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">

                <div className="modal-body text-center">



                  <h2 id="portfolioModal1Label">CIRCUS TENT</h2>



                  <div className='text-center py-3'>
                    <span className='line'></span>
                    <i className="fa-solid fa-star fs-2"></i>
                    <span className='line'></span>
                  </div>



                  <img src="reactAssign1/images/circus.png" alt="" className='w-50' id='modalImage' />



                  <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">

                    <i className="fa-solid fa-xmark text-white pe-2"></i>Close Window

                  </button>
                </div>


              </div>
            </div>
          </div>

          {/* portfolioModal 4 */}

          <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">

                <div className="modal-body text-center">



                  <h2 id="portfolioModal1Label">CONTROLLER</h2>



                  <div className='text-center py-3'>
                    <span className='line'></span>
                    <i className="fa-solid fa-star fs-2"></i>
                    <span className='line'></span>
                  </div>



                  <img src="reactAssign1/images/game.png" alt="" className='w-50' id='modalImage' />



                  <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">

                    <i className="fa-solid fa-xmark text-white pe-2"></i>Close Window

                  </button>
                </div>


              </div>
            </div>
          </div>

          {/* portfolioModal 5 */}

          <div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">

                <div className="modal-body text-center">



                  <h2 id="portfolioModal1Label">LOCKED SAFE</h2>



                  <div className='text-center py-3'>
                    <span className='line'></span>
                    <i className="fa-solid fa-star fs-2"></i>
                    <span className='line'></span>
                  </div>



                  <img src="reactAssign1/images/safe.png" alt="" className='w-50' id='modalImage' />



                  <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">

                    <i className="fa-solid fa-xmark text-white pe-2"></i>Close Window

                  </button>
                </div>


              </div>
            </div>
          </div>

          {/* portfolioModal 6 */}

          <div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">

                <div className="modal-body text-center">

                  <h2 id="portfolioModal1Label">SUBMARINE</h2>

                  <div className='text-center py-3'>
                    <span className='line'></span>
                    <i class="fa-solid fa-star fs-2"></i>
                    <span className='line'></span>
                  </div>



                  <img src="reactAssign1/images/submarine.png" alt="" className='w-50' id='modalImage' />



                  <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">

                    <i className="fa-solid fa-xmark text-white pe-2"></i>Close Window

                  </button>
                </div>


              </div>
            </div>
          </div>




        </section>

      </>
    )
  }
}
