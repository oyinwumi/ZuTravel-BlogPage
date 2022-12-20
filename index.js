 const checkbtn = document.getElementsByClassName("checkbtn")[0]
 const navbarLinks = document.getElementsByClassName("nav-link")[0]

 checkbtn.addEventListener("click", ()=>{
    navbarLinks.classList.toggle('active')
 })