const loginForm = document.querySelector('.login-form')
const loginInput = document.querySelector('.login-form input');
const greeting = document.querySelector('.greeting');

const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY = 'username'; // 이 때 변수명을 대문자로 쓰는 이유가 뭐라고 했더라???

function loginSubmit(event) {
  event.preventDefault(); //브라우저의 기본 동작을 막아줌 (여기서는 submit하면 refresh 되는 것을 막아줌)
  loginForm.classList.add(HIDDEN_CLASS);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  
  generateGreeting(username);
}

function generateGreeting(tomato) {
    // greeting.innerText = 'Hello, ' + tomato + ' !'; // 아래와 동일한 내용의 코드
    greeting.innerText = `Hello, ${tomato} !`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener('submit', loginSubmit);
} else {
    generateGreeting(savedUsername);
}


// const loginForm = document.querySelector('.login-form')
// const loginInput = document.querySelector('.login-form input');
// const greeting = document.querySelector('.greeting');

// const HIDDEN_CLASS = 'hidden';
// const USERNAME_KEY = 'username'; // 이 때 변수명을 대문자로 쓰는 이유가 뭐라고 했더라???

// function loginSubmit(event) {
//   event.preventDefault(); //브라우저의 기본 동작을 막아줌 (여기서는 submit하면 refresh 되는 것을 막아줌)
//   loginForm.classList.add(HIDDEN_CLASS);

//   localStorage.setItem(USERNAME_KEY, loginInput.value);
  
//   generateGreeting();
// }

// function generateGreeting() {
//     const savedUsername = localStorage.getItem(USERNAME_KEY);
    
//     greeting.innerText = `Hello, ${savedUsername} !`;
//     greeting.classList.remove(HIDDEN_CLASS);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);
// // 이렇게 축약?해볼 수 있지만, savedUsername을 두번 실행하게 되므로 별로

// if (savedUsername === null) {
//     loginForm.classList.remove(HIDDEN_CLASS);
//     loginForm.addEventListener('submit', loginSubmit);
// } else {
//     generateGreeting();
// }