// export function gallery() {

//         document.addEventListener("DOMContentLoaded", function () {
//             var sm = 480;
//             var md = 768;
//             const lg = 992;
//             var imgH;
//             var sections = document.querySelectorAll('.project-section');
//             var left = document.querySelector('.left');
//             var right = document.querySelector('.right');
//             var section;

//             function resizeThis() {
//                 imgH = document.querySelector('.middle img').clientWidth;
//                 if (window.innerWidth >= sm) {
//                     left.style.height = imgH + "px";
//                     right.style.height = imgH + "px";
//                     for (var i = 0; i < sections.length; i++) {
//                         sections[i].style.height = imgH + "px";
//                     }
//                 } else {
//                     left.style.height = "auto";
//                     right.style.height = "auto";
//                     for (var i = 0; i < sections.length; i++) {
//                         sections[i].style.height = "auto";
//                     }
//                 }
//             }

//             resizeThis();

//             window.addEventListener("resize", function () {
//                 resizeThis();
//             });

//             window.addEventListener("scroll", function () {
//                 for (var i = 0; i < sections.length; i++) {
//                     section = sections[i];
//                     var elementPos = section.offsetTop;
//                     var scrollPos = window.scrollY;
//                     var sectionH = section.offsetHeight;
//                     var h = window.innerHeight;
//                     var sectionVert = (h / 2) - (sectionH / 4);

//                     // console.log(elementPos + 'E')
//                     // console.log(sectionVert)

//                     if ((elementPos - sectionVert) <= scrollPos && (elementPos - sectionVert) + sectionH > scrollPos) {
//                         section.classList.add('animate');
//                     } else {
//                         section.classList.remove('animate');
//                     }
//                 }
//             });

//             var links = document.querySelectorAll('a[href*="#"]:not([href="#"])');
//             for (var i = 0; i < links.length; i++) {
//                 links[i].addEventListener('click', function () {
//                     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//                         var target = document.querySelector(this.hash);
//                         target = target ? target : document.querySelector('[name=' + this.hash.slice(1) + ']');
//                         if (target) {
//                             window.scrollTo({
//                                 top: target.offsetTop,
//                                 behavior: 'smooth'
//                             });
//                             return false;
//                         }
//                     }
//                 });
//             }
//         });
//     }


export function gallery() {
    document.addEventListener("DOMContentLoaded", () => {
        const sm = 480;
        const md = 768;
        const lg = 992;
        let imgH;
        const sections = document.querySelectorAll('.project-section');
        const left = document.querySelector('.left');
        const right = document.querySelector('.right');
        let section;

        const resizeThis = () => {
            imgH = document.querySelector('.middle img').clientWidth;
            if (window.innerWidth >= sm) {
                left.style.height = `${imgH}px`;
                right.style.height = `${imgH}px`;
                for (let i = 0; i < sections.length; i++) {
                    sections[i].style.height = `${imgH}px`;
                }
            } else {
                left.style.height = "auto";
                right.style.height = "auto";
                for (let i = 0; i < sections.length; i++) {
                    sections[i].style.height = "auto";
                }
            }
        };

        resizeThis();

        window.addEventListener("resize", () => {
            resizeThis();
        });

        window.addEventListener("scroll", () => {
            for (let i = 0; i < sections.length; i++) {
                section = sections[i];
                const elementPos = section.offsetTop;
                const scrollPos = window.scrollY;
                const sectionH = section.offsetHeight;
                const h = window.innerHeight;
                const sectionVert = (h / 2) - (sectionH / 4);


                if ((elementPos - sectionVert) <= scrollPos && (elementPos - sectionVert) + sectionH > scrollPos) {
                    section.classList.add('animate');
                } else {
                    section.classList.remove('animate');
                }
            }
        });

        const links = document.querySelectorAll('a[href*="#"]:not([href="#"])');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', (e) => {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    const target = document.querySelector(e.target.hash);
                    if (target) {
                        e.preventDefault();
                        window.scrollTo({
                            top: target.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        }
    });
}
