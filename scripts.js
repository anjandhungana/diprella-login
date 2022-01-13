const signUpBtn = document.getElementById("signUpbtn");

const clickSignUp = () => {
  document.getElementById("overlay").classList.add("toRight");
  document.getElementById("sidebar").classList.add("toLeft");
  document.getElementById("main").classList.add('mainRight','decZindex');
  document.getElementById("mainUp").classList.add('mainRight');


  

};

const clickSignIn = ()=>{
  document.getElementById('overlay').classList.remove('toRight');
  document.getElementById("sidebar").classList.remove("toLeft");
  document.getElementById("main").classList.remove('mainRight','decZindex')
  document.getElementById("mainUp").classList.remove('mainRight');
  
  
}


