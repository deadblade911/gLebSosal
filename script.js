document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const pages = document.querySelectorAll('.page');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    navLinks.forEach(item => item.classList.remove('active'));
                    pages.forEach(page => page.classList.remove('active'));
                    
                    this.classList.add('active');
                    
                    const pageId = this.getAttribute('data-page');
                    document.getElementById(pageId).classList.add('active');
                });
            });
            
            const feedbackForm = document.getElementById('feedback-form');
            if (feedbackForm) {
                feedbackForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;
                    
                    if (name && email && message) {
                        alert('Сообщение отправлено! Спасибо за вашу обратную связь.');
                        feedbackForm.reset();
                    } else {
                        alert('Пожалуйста, заполните все обязательные поля.');
                    }
                });
            }
        });