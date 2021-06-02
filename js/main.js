/* Loader Animation */
const loaderSpinner = document.querySelector('.loader');
window.addEventListener('load', function()
{
      loaderSpinner.style.display = 'none';
});

/* Hamburger Menu */
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener('click', function()
{
    header.classList.toggle('menu-open');
});

/* Scroll Top Button */
topbutton=document.getElementById("myBtn");
window.onscroll=function(){scrollFunction()};
function scrollFunction()
{
      if(document.body.scrollTop>200 || document.documentElement.scrollTop>200)
      {
            topbutton.style.display="block";
      }
      else
      {
            topbutton.style.display="none";
      }
}

function goToTop()
{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}


/* Show & Hide password on click */
const password = document.getElementById("pass");
const showBtn = document.getElementById("show");
showBtn.addEventListener("click", function()
{
      if(password.type === "password")
      {
            password.type = "text";
            showBtn.style.color = "#3498db";
            showBtn.innerHTML = "Hide";
      }
      else
      {
            password.type = "password";
            showBtn.style.color = "#444";
            showBtn.innerHTML = "Show";
      }
});


/* Java Script For Catogory Wise Courses */
function populate(s1,s2)
{
      var s1 = document.getElementById(s1);
      var s2 = document.getElementById(s2);

      s2.innerHTML = "";

      if(s1.value === "Basic Computer Courses (BCC)")
      {
            var optionArray = ["Select Course", "Computer Basic (MS Office)", "Course on Computer Concept (CCC)", "Basic Tally (Fundamental)", "Typing Courses (Full Keyboards)"];
      } 
      else if(s1.value === "Advance Courses (AC)")
      {
            var optionArray = ["Select Course", "Diploma in Computer Hardware", "Advance Tally", "Advance Excel & Powerpoint", "NIELIT Advance Courses Classes"];
      } 
      else if(s1.value === "Programming Languages (PL)")
      {
            var optionArray = ["Select Course", "C Programming", "JavaScript & it's Libraries", "C++ Programming", "HTML5, CSS3 & Bootstap 3 & 4", "Java Programming", "C# & ASP .NET Programming"];
      }
      else if(s1.value === "Professional Courses (PC)")
      {
            var optionArray = ["Select Course", "WEB Designing & Development Course", "Game Development using UNITY", "UI/UX Designer & Development", "App Development (Android & IOS)", "Animation Designer", "Graphic Designing", "Photoshop Master Course"];
      }
      else
      {
            var optionArray = ["Select Category First"];
      }

      for(var option in optionArray)
      {
            var pair = optionArray[option];//.split("|");
            var newOption = document.createElement("option");
            //newOption.value = pair[0];
            newOption.innerHTML = pair;//[1];
            s2.options.add(newOption);
      }
}

