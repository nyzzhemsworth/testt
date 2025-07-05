       const welcomePopupOverlay = document.getElementById('welcomePopupOverlay');
        const continueButton = document.getElementById('continueButton');
        const backgroundVideo = document.getElementById('background-video');
        const mainContent = document.getElementById('mainContent');
        function initializeWebsite() {
            welcomePopupOverlay.classList.add('hidden');
            backgroundVideo.classList.add('active');
            backgroundVideo.play();
            backgroundVideo.muted = false;
            setTimeout(() => {
                welcomePopupOverlay.style.display = 'none';
                mainContent.classList.add('visible');
                const cards = document.querySelectorAll('.payment-card');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.animation = `slideUp 0.6s ease-out forwards ${0.2 + index * 0.1}s`;
                });
                const qrisSection = document.querySelector('.qris-section');
                if (qrisSection) {
                    qrisSection.style.opacity = '0';
                    qrisSection.style.animation = `slideUp 0.6s ease-out forwards ${0.2 + cards.length * 0.1 + 0.2}s`;
                }
                const noteSection = document.querySelector('.note-section');
                if (noteSection) {
                    noteSection.style.opacity = '0';
                    noteSection.style.animation = `slideUp 0.6s ease-out forwards ${0.2 + cards.length * 0.1 + 0.4}s`;
                }
            }, 500);
        }
        continueButton.addEventListener('click', initializeWebsite);
        function copyToClipboard(text, element) {
            navigator.clipboard.writeText(text.replace(/\s/g, '')).then(() => {
                showNotification();
                element.classList.add('glow');
                setTimeout(() => {
                    element.classList.remove('glow');
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
        function showNotification() {
            const notification = document.getElementById('notification');
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2500);
        }
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            const toggleBtn = document.querySelector('.theme-toggle');
            if (document.body.classList.contains('dark-mode')) {
                toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
            } else {
                toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> ';
            }
        }
        document.addEventListener('DOMContentLoaded', () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-mode');
                document.querySelector('.theme-toggle').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> ';
            } else {
                document.querySelector('.theme-toggle').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
            }
        });