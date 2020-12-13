import React from 'react'

const Contact = () => {
    return (
        <div className='container'>
            <h1 className='my-5'>Contact Us Virtually</h1>
            <div class="row">
             <div class="col-md-6">
               <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                </div>
              <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                 </div>
                 <br/>
                 <br/>
              <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Email" aria-label="Email" />
              </div>
              <div class="col-md-6">
              <input type="text" class="form-control" placeholder="PassWord" aria-label="Email" />
          </div>
          <br/>
          <br/>
          <textarea cols="30" rows="10">Please write your comment below:</textarea>
        </div>
        <br/>
        <button>Submit</button>
       </div>
    )
}

export default Contact;
