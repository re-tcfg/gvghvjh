const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');

const loginButton = document.querySelector('a[href="#login"]');
const registerButton = document.querySelector('a[href="#register"]');


const loginClose = loginModal.querySelector('.close');
const registerClose = registerModal.querySelector('.close');


loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'block';
});

registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'block';
});


loginClose.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

registerClose.addEventListener('click', () => {
    registerModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === registerModal) registerModal.style.display = 'none';
});


document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;


    if (email === "rehab@emil.com" && password === "password123") {
        alert("تم تسجيل الدخول بنجاح!");
        loginModal.style.display = 'none';
    } else {
        alert("خطأ في البريد الإلكتروني أو كلمة المرور.");
    }
});


document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    alert(`مرحبًا ${name}! تم تسجيلك بنجاح.`);
    registerModal.style.display = 'none';
});