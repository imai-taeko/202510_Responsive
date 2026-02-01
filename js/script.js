// グローバルナビゲーション
// const globalNav = document.querySelector('.l-header__nav');
const globalNavBtn = document.querySelector('.l-header__navBtn');
const globalNavCloseBtn = document.querySelector('.l-header__navClose');


globalNavBtn.addEventListener('click', () => {
    document.body.classList.add('is-open');
});
globalNavCloseBtn.addEventListener('click', () => {
    document.body.classList.remove('is-open');
});


// FAQのアコーディオン部分
document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll('.p-faq__listQ');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // 親要素の .p-faq__listItem に is-open クラスを付け外し
            question.closest('.p-faq__listItem').classList.toggle('is-open');
        });
    });
});
