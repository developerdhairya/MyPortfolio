var app = document.getElementById('app');
 
var customNodeCreator = function(character) {
  return document.createTextNode(character);
}
 
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
  onCreateTextNode: customNodeCreator,
});
 
typewriter
  .typeString('Hi!! 👋')
  .changeDelay(75)
  .pauseFor(3000)
  .changeDeleteSpeed(5)
  .deleteChars(7)
  .typeString('I am Dhairya Taneja!')
  .pauseFor(1500)
  .deleteChars(20)
  .typeString('a B.E CSE Student..')
  .pauseFor(3000)
  .deleteChars(19)
 
  .start();

var descr=document.querySelector("#descr");
descr.innerHTML="I am pursuing B.E CSE from <b>Chitkara</b> University,Chandigarh.I am polishing my skills of Python,Java,Flutter and Mern Stack.If you need to collaborate in any of the projects plz feel free to contact me."

// if(window.innerWidth > 440){
//   document.getElementsByClassName('hamburger')[0].style.display = 'none';
// }else{
//   document.getElementsByClassName('hamburger')[0].style.display = 'unset';
// }

document.getElementsByClassName('hamburger')[0].addEventListener('click', (e) => {
  console.log(true)
    const nav = document.getElementById('mobile-nav');
    const icon = document.getElementsByClassName('hamburger')[0];
    const img = document.getElementById('img-mobile');
    const root = document.getElementById('root');
    if(nav.style.display !== 'flex'){
      nav.style.display = 'flex';
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      img.style.display = 'none';
      root.style.backgroundImage = 'none';
    }else{
      nav.style.transform = 'scale(0)';
      setTimeout(() => {nav.style.display = 'none'; nav.style.transform = null}, 500)
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      img.style.display = 'unset';
      root.style.backgroundImage = null;
  }
});