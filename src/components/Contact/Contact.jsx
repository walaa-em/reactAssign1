import React, { Component } from 'react'

export default class Contact extends Component {

  render() {
    return (
      <>

        <section id='contact' className=' py-5'>

          <h2>CONTACT ME</h2>


          <div className='text-center py-3'>
            <span className='line'></span>
            <i className="fa-solid fa-star fs-2"></i>
            <span className='line'></span>
          </div>

          <div className='container'>

            <div>

              <form action="">

                <div className='input-box'>

                  <label htmlFor="">Name</label>
                  <input type="text" id='name' placeholder="Name" required="required" className='form-control' />
                  <p className='text-danger'> </p>

                </div>

                <div className='input-box'>

                  <label htmlFor="">Email Address</label>
                  <input type="email" id='email' placeholder="Email Address" required="required" className='form-control' />
                  <p className='text-danger'></p>

                </div>


                <div className='input-box'>

                  <label htmlFor="">Phone Number</label>
                  <input type="text" id='phone' placeholder="Phone Number" required="required" className='form-control' />
                  <p className='text-danger' ></p>

                </div>

                <div className='input-box'>

                  <label htmlFor="">Message</label>
                  <textarea rows='5' id='message' placeholder="Message" required="required" className='form-control' />
                  <p className='text-danger'></p>

                </div>


                <button type='submit' className='btn py-3 px-4'>Send</button>


              </form>
            </div>

          </div>

        </section>

      </>
    )
  }
}
