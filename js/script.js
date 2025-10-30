"use strict"

document.addEventListener('DOMContentLoaded', function(){
        /*Easy selector helper function */
        const select = (el, all = false) => {
                if (!el || typeof el !== 'string') return null;
                el = el.trim();
                if (all) {
                        return [...document.querySelectorAll(el)];
                } else {
                        return document.querySelector(el);
                }
        }
        /* Easy event listener function */
        const on = (type, el, listener, all = false) => {
                let selectEl = select(el, all)
                if (selectEl) {
                if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                selectEl.addEventListener(type, listener)
                }
                }
        }
        /* Easy on scroll event listener  */
        const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
        }
        
        // хедер при при скролле 
        let selectHeader = select('.header')
        if (selectHeader) {
        const headerScrolled = () => {
        if (window.scrollY > 100) {
                selectHeader.classList.add('scrolling')
        } else {
                selectHeader.classList.remove('scrolling')
        }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(window, headerScrolled)
        }
        // якоря
        on('click', '.js-scrollTo', function(e) {
        const href = this.getAttribute("href");
        if (href && href.startsWith('#')) {
                const targetElement = select(href);
                if (targetElement) {
                e.preventDefault();
                const rect = targetElement.getBoundingClientRect();
                const offsetTop = rect.top + window.scrollY - select('.header').offsetHeight;
                scroll({
                        top: offsetTop,
                        behavior: "smooth"
                });
                }
        }
        }, true);
       
        // observer, анимация на скролле 
        // const inViewport = (element, observer) => {
        // element.forEach(entry => {
        //         entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        //         element.forEach(item => {
        //         if(item.target.classList.contains('is-inViewport') && !item.target.classList.contains('watched')){
        //         item.target.classList.add("watched");
        //         }
        //         })
        // });
        // };
        // let ioConfiguration = {
        // rootMargin: '0% 0% 0% 0%',
        // threshold: 0.2
        // };
        // const Obs = new IntersectionObserver(inViewport, ioConfiguration);
        // const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
        // const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
        // ELs_inViewport.forEach(EL => {
        // Obs.observe(EL, obsOptions);
        // });
        const inViewport = (entries, observer) => {
        entries.forEach(entry => {
                const el = entry.target;

                el.classList.toggle("is-inViewport", entry.isIntersecting);

                if (entry.isIntersecting && !el.classList.contains('watched')) {
                let delay = el.getAttribute('data-delay');
                if (window.innerWidth < 992 && delay) {
                        const delayNum = parseFloat(delay) || 0;
                        delay = Math.min(delayNum, 0.2) + 's';
                }

                if (delay) {
                        el.style.transitionDelay = delay;
                        el.style.animationDelay = delay;
                }

                el.classList.add("watched");
                }
        });
        };

        let ioConfiguration = {
        rootMargin: '0% 0% 0% 0%',
        threshold: 0.2
        };

        const Obs = new IntersectionObserver(inViewport, ioConfiguration);
        document.querySelectorAll('[data-inviewport]').forEach(EL => {
        Obs.observe(EL);
        });

})
