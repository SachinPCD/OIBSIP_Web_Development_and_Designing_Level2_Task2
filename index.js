
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.hero, .quote, section, .invention-card, .timeline-item').forEach(el => {
            observer.observe(el);
        });

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElement = document.querySelector('header');
            const coords = scrolled * 0.5;
            parallaxElement.style.backgroundPosition = `center ${coords}px`;
        });

        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });