import './App.css';
// import { Link } from 'react-router-dom';


function contact() {
  return (
    <div className="contact">
      


      <div className="contact_section">
<div className="container">
  <div className="row">
    <div className="col-6">
      <div className="contact_text">
        <h5>Let's chat. <br /> Tell me about your project.</h5>
        <p>let's create something together</p>
      </div>
    </div>
    <div className="col-6">
      <div className="contact_form">
      <form >
        <h4>Get in Touch</h4>
      <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="" required />
            <label for="floatingInput">Your Name<span className="red">*</span></label>
       </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput" placeholder="number" min="10"  required />
            <label for="floatingInput">Mobile Number<span className="red">*</span></label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  required />
            <label for="floatingInput">Email address<span className="red">*</span></label>
          </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="" required />
            <label for="floatingInput">Message<span className="red">*</span></label>
          </div>

          <input type="submit" name="button" id="submit" />
  

</form>
      </div>
    </div>
  </div>
</div>
</div>







    </div>
  );
}

export default contact;



