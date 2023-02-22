let project = document.getElementById('project')
let about = document.getElementById('about')
let cv = document.getElementById('cv')
let skill = document.getElementById('skill')
let contact = document.getElementById('contact')
let overlay = document.querySelector('.overlay')


let div = document.createElement('div')
div.className = "inner"



project.onclick = ()=>{
    change_dom(project_dom())
    slide()
}

about.onclick = ()=>{
    change_dom(about_dom())    
}

contact.onclick = ()=>{
  change_dom(contact_dom())
}

skill.onclick = ()=>{
  change_dom(skill_dom())
}

function change_dom(func){
    overlay.style.display = "flex"
    div.innerHTML = func
    overlay.appendChild(div)
    if (!window.matchMedia("(max-width: 600px)").matches) {
        dragElement(div);
    }
    let close = document.querySelector('.close')
    close.onclick = ()=>{
      div.classList.add('hidden');
      setTimeout(function() {
        div.classList.remove('hidden');
        overlay.style.display = 'none';
      }, 200);
  }
  
}

function project_dom(){

    let render = `
    <div class="contact">
    <div class="header">
      <button class="close">X</button>
      <p>
      My Projects
      </p>
    </div>
    <section class="slider-wrapper">
    <button class="slide-arrow" id="slide-arrow-prev">
      &#8249;
    </button>
    <button class="slide-arrow" id="slide-arrow-next">
      &#8250;
    </button>
    <ul class="slides-container" id="slides-container">
      <li class="slide">
      <img src="./images/game.png" class="slide-img" />
      <div class="slide-description">
        <h2>Gamery<h4>
        <p>This is free to play games web application. Users can download free games in this app.</p>
        <h4>Technologies</h4>
          <span>HTML,</span>
          <span>CSS,</span>
          <span>JavaScript,</span>
          <span>React,</span>
          <span>Redux</span>
      <br>
      <br>
        <a href="https://gamery.onrender.com/" target="_blank">Live Demo</a>
        <a href="https://github.com/Htetaungkyaw71/Gamery" target="_blank">Source Code</a>
      </div>
      </li>
        <li class="slide">
        <img src="./images/chat.png" class="slide-img" />
        <div class="slide-description">
          <h2>Chat Valley<h4>
          <p>Users can chat random strangers from around the world. Users need to allow their camera and microphone in web browsers.</p>
          <h4>Technologies</h4>
            <span>HTML,</span>
            <span>CSS,</span>
            <span>JavaScript,</span>
            <span>Web RTC,</span>
            <span>Nodejs</span>
        <br>
        <br>
          <a href="https://chat-valley-zx8a.onrender.com/" target="_blank">Live Demo</a>
          <a href="https://github.com/Htetaungkyaw71/Chat-Valley" target="_blank">Source Code</a>
        </div>
      

      </li>
        <li class="slide">
          <img src="./images/ask.png" class="slide-img" />
          <div class="slide-description">
            <h2>Ask Me<h4>
            <p>
            Question and Answer application. Users can create account and ask questions.</p>
            <h4>Technologies</h4>
              <span>HTML,</span>
              <span>CSS,</span>
              <span>JavaScript,</span>
              <span>React,</span>
              <span>Redux,</span>
              <span>Firebase</span>
          <br>
          <br>
            <a href="https://askme-sigma.vercel.app/" target="_blank" >Live Demo</a>
            <a href="https://github.com/Htetaungkyaw71/askme" target="_blank">Source Code</a>
          </div>
        </li>
      <li class="slide">
        <img src="./images/s.png" class="slide-img" />
        <div class="slide-description">
          <h2>Shoppe<h4>
          <p>
          A simple and small ecommerce application. Users can view products and can add products to cart and can checkout.</p>
          <h4>Technologies</h4>
            <span>HTML,</span>
            <span>CSS,</span>
            <span>JavaScript,</span>
            <span>React,</span>
            <span>Redux</span>
        <br>
        <br>
          <a href="https://shoppe-eltm.onrender.com/" target="_blank" >Live Demo</a>
          <a href="https://github.com/Htetaungkyaw71/Ecommerce" target="_blank">Source Code</a>
        </div>
    </li>
    </ul>
  </section>
   </div>





    `
    return render
}

function contact_dom(){
  let render = `
  <div class="contact">
  <div class="header">
      <button class="close">X</button>
      <p>
          Contact Me
      </p>
  </div>
  <div class="contact-main">
      <div class="social">
          <a href="https://github.com/Htetaungkyaw71" target="_blank">
              <img src="./images/github.png" alt="">
          </a>
          <a href="https://twitter.com/Htetaungkyaw172" target="_blank">
              <img src="./images/twitter.png" alt="">
          </a>
          <a href="https://www.facebook.com/htet.aungkyaw.33234/" target="_blank">
              <img src="./images/facebook.png" alt="">
          </a>
      </div>
      <hr>
      <form class="form-control">
          <input type="email" placeholder="Email" class="email" required>
          <textarea name="message" Placeholder="Message" class="message" cols="58" rows="10" required></textarea>
          <input type="submit" value="Send" class="send">
      </form>
  </div>

 
</div>
  `
  return render
}

function skill_dom(){
  let render = `
  <div class="skill">
  <div class="header">
      <button class="close">X</button>
      <p>
          My Skills
      </p>
  </div>
  <div class="skill-main">
  <div>
      <div class="tech">
            <img src="./images/html.png" alt="">
            <img src="./images/css.png" alt="">
            <img src="./images/js.png" alt="">
        </div>
          <div class="tech">
            <img src="./images/python.png" alt="">
            <img src="./images/ruby.png" alt="">
            <img src="./images/rails.png" alt="">
          </div>
          <div class="tech">
            <img src="./images/physics.png" alt="">
              <img src="./images/django.png" alt="">
              <img src="./images/redux.png" alt="">
          </div>
      
  </div>
    
  </div>

 
</div>
  `
  return render
}


function about_dom(){
    let render = `
   
    <div class="about">
        <div class="header">
          <button class="close">X</button>
          <p>
          About Me
          </p>
        </div>
        <div class="about-main">
            <img src="./images/htet.png" alt="">
            <h1>Htetaungkyaw</h1>
            <p>
                A full-stack developer who focuses on using Javascript, Python, React, Redux, Django, Flask, and Rails to build software solutions. My biggest goal in my life is to help people and improve society by using software engineering. Now I am a student at Microverse, a remote software development school that allows developers to pair programs and build projects together.
            </p>
        </div>
        
       
        </div>
     
    `
    return render
}




// Draggable


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function slide(){
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
  
  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });
  
  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });
}

