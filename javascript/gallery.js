export function gallery() {

        document.addEventListener("DOMContentLoaded", function () {
            var sm = 480;
            var md = 768;
            const lg = 992;
            var imgH;
            var sections = document.querySelectorAll('.project-section');
            var left = document.querySelector('.left');
            var right = document.querySelector('.right');
            var section;

            function resizeThis() {
                imgH = document.querySelector('.middle img').clientWidth;
                if (window.innerWidth >= sm) {
                    left.style.height = imgH + "px";
                    right.style.height = imgH + "px";
                    for (var i = 0; i < sections.length; i++) {
                        sections[i].style.height = imgH + "px";
                    }
                } else {
                    left.style.height = "auto";
                    right.style.height = "auto";
                    for (var i = 0; i < sections.length; i++) {
                        sections[i].style.height = "auto";
                    }
                }
            }

            resizeThis();

            window.addEventListener("resize", function () {
                resizeThis();
            });

            window.addEventListener("scroll", function () {
                for (var i = 0; i < sections.length; i++) {
                    section = sections[i];
                    var elementPos = section.offsetTop;
                    var scrollPos = window.scrollY;
                    var sectionH = section.offsetHeight;
                    var h = window.innerHeight;
                    var sectionVert = (h / 2) - (sectionH / 4);

                    // console.log(elementPos + 'E')
                    // console.log(sectionVert)

                    if ((elementPos - sectionVert) <= scrollPos && (elementPos - sectionVert) + sectionH > scrollPos) {
                        section.classList.add('animate');
                        console.log(h)
                    } else {
                        section.classList.remove('animate');
                    }
                }
            });

            var btnPrimary = document.querySelector('.btn-primary');
            btnPrimary.addEventListener('click', function () {
                alert('I lied');
            });

            var links = document.querySelectorAll('a[href*="#"]:not([href="#"])');
            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function () {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = document.querySelector(this.hash);
                        target = target ? target : document.querySelector('[name=' + this.hash.slice(1) + ']');
                        if (target) {
                            window.scrollTo({
                                top: target.offsetTop,
                                behavior: 'smooth'
                            });
                            return false;
                        }
                    }
                });
            }
        });
    }