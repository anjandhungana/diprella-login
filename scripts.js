const clickSignup = () => {
  document.getElementById("side").style =
    "animation-name:slideLeft, stretch; animation-duration:1.5s; animation-timing-function:ease; animation-fill-mode:forwards";
  let res = document.querySelectorAll("#side-signup-head, #side-signup-p");
  for (let i = 0; i < res.length; i++) {
    res[i].style =
      "animation-name:fade-out; animation-duration:1s; animation-timing-function:ease; animation-fill-mode:forwards;";
  }
  let ressec = document.querySelectorAll("#side-signin-head, #side-signin-p");
  document.getElementById('')
  for (let i = 0; i < res.length; i++) {
    ressec[i].style =
      "animation-name:fade-in; animation-duration:1s; animation-timing-function:ease; animation-fill-mode:forwards;";
  }
  document.getElementById("main").style =
    "animation-name:slideRight, fade-out; animation-duration:1.5s; animation-timing-function:ease; animation-fill-mode:forwards;";
  document.getElementById("signUp-side-btn").style =
    "animation:fade-out 2s ease; animation-fill-mode:forwards;";
  document.getElementById("signIn-side-btn").classList.remove("d-none");
  document.getElementById('side-signup-p').classList.add('d-none');
  document.getElementById('side-signin-p').classList.remove('d-none');
  document.getElementById('side-signup-head').classList.add('d-none');
  document.getElementById('side-signin-head').classList.remove('d-none');
  document.getElementById('mainUp').classList.remove('d-none');
  document.getElementById('mainUp').style = "animation-name:fade-in, slidemainRight; animation-duration:1.5s; animation-fill-mode:forwards;";
  document.getElementById('cross').style = 'color:#333';


//   document.getElementById('')
};

const clickSignIn =()=>{
    // document.getElementById(signIn-side-btn).
    
}
