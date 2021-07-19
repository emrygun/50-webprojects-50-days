const faqList = document.querySelectorAll('.faq');
const btnList = document.querySelectorAll('.faq-toggle')

btnList.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})
