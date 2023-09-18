document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    console.log(navLinks);

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            
            const targetSection = document.getElementById(targetId);
            
            console.log(targetSection,'as');
          
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }, 3000); 
            }
        });
    });

    const navLinks1 = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".tabs");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const targetId = entry.target.id;
            const correspondingNavLink = document.querySelector(`.nav-link2[href="#${targetId}"]`);
            const correspondingNavLink1 = document.querySelector(`.nav-link[href="#${targetId}"]`);
            if (entry.isIntersecting) {
                correspondingNavLink.classList.add("active");
                correspondingNavLink1.classList.add('active');
            } else {
                correspondingNavLink.classList.remove("active");
                correspondingNavLink1.classList.remove("active");
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });
});


function open_linkedin()
{
    window.open('https://www.linkedin.com/in/mairaj-ahmed-5a84b8252','_blank');
}

function open_github()
{
    window.open('https://github.com/Mairaj001','_blank');
}


function open_insta()
{
    window.open('https://www.instagram.com/ig.mairaj001/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D','_blank');
}

function open_twitter()
{
    window.open('https://twitter.com/MairajAhmedKho1?t=OlSAqAtpDBpY2hRBjOPKsQ&s=09','_blank');
}

function open_facebook()
{
    window.open('https://www.facebook.com/mairajahmed.khoso?mibextid=ZbWKwL','_blank');
}

