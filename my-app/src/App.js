import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="hero_section">
        {/* navbar  */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid"> 
    <a class="navbar-brand" href="#">Sk <span></span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link active"  href="#">Home</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
     
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
    
        <li class="nav-item">
          <a class="nav-link" href="#">Conatact</a>
        </li>
      
        
     
      </ul>
   
    </div>

    {/* <a className="contact_btn">  */}
    {/* <ion-icon name="person-sharp"></ion-icon>      </a> */}

  </div>
</nav>
        {/* navbar  */}


<div className="hero_container">

<div className="hero_text">        
    <h5>Hello</h5>
<h2><span>I'm</span> sohel  shaikh </h2>
<p>A front-end developer </p>

      </div>
</div>
      </div>

      <div className="about_section">
        <div className="container">

        </div>
      </div>

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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero non ad eveniet libero! Delectus error facere atque libero dolor suscipit.</p>
        </div>
      </div>
    </div>
  </div>
</div>






    </div>
  );
}

export default App;
