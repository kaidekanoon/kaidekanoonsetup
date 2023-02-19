
/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', {
    delay: 200
});
sr.reveal('.home__img', {
    delay: 400
});
sr.reveal('.home__social-icon', {
    interval: 200
});

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {
    delay: 400
});
sr.reveal('.about__text', {
    delay: 400
});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', {
    interval: 200
});
sr.reveal('.skills__img', {
    delay: 600
});

/*SCROLL WORK*/
sr.reveal('.work__img', {
    interval: 200
});

/*SCROLL CONTACT*/
sr.reveal('.contact__input', {
    interval: 200
});


const contactForm = document.querySelector(".contact-form");
let namee = document.getElementById('namee');
let email = document.getElementById('email');
let desc = document.getElementById('desc');

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = {
        Name : namee.value,
        Email: email.value,
        Description : desc.value
    }
    console.log(formData)
    let url = "https://kaydakanoon.onrender.com"
    // let url = "http://localhost:5000"
    fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then((response) => {
    alert("Message sent")
    console.log(JSON.stringify(response))
    namee.value = ""
    email.value = ""
    desc.value = ""
}

    )
})



// console.log(formData)
// let xhr = new XMLHttpRequest();
// xhr.open('POST','')
// xhr.setRequestHeader("Accept", "application/json");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.onload =  function(){
//     console.log(xhr.responseText);
//     if(xhr.responseText == 'success'){
//         alert("email sent");
//         namee.value = "";
//         email.value = "";
//         desc.value = "";
//     }else{
//         alert("Something went wrong");
//     }
// }
// xhr.send(JSON.stringify(formData))