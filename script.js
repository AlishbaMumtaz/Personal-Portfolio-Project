
// Toggle bar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Scroll section
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset= sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top>= offset && top<offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// sticky navbar

let header=document.querySelector('header');
header.classList.toggle('sticky', window.scrollY>100);

// remove navbar when navbar link clicked 
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// scroll reaveal
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-image ', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });


//  Button download
document.getElementById("downloadButton").addEventListener("click", function() {
    var cvUrl = "Alishba's Resume (2).pdf ";
    
    fetch(cvUrl).then(function(response) {
        return response.blob();
    }).then(function(blob) {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "Alishba's Resume (2).pdf"; 
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    });
});
