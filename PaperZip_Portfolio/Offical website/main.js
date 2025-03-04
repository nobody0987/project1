//show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId)
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    });
  }
}
showMenu('nav_toggle', 'nav_menu')

//Active & remove active
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))
function linkAction() {
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  const navMenu = document.getElementById('nav_menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*send Email*/
function sendMail(){
  var params ={
   name:document.getElementById("name").Value,
   email:document.getElementById("email").value,
   message:document.getElementById("message").value,
  };

 const serviceID ="service_eopy5zk";
  const templateID ="template_n3bu8pa";
  emailjs.send(serviceID,templateID,params)
  .then(
    res => {
       document.getElementById("name").value ="";
       document.getElementById("email").value ="";
       document.getElementById("message").value ="";
       console.log(res);
        alert("your message sent successfully");   
   } )
    .catch((err) => console.log(err));
}


//skills
var typed  = new Typed(('.passon'),{
strings :['Web Developer','Frontend Developer'],
typeSpeed : 100,
backSpeed : 150,
typeDelay : 100,
loop:true,
});

