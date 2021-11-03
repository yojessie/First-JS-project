const quotes = [
    {
        quote: 'What you do makes a difference, and you have to decide what kind of difference you want to make.',
        author: 'Jane Goodall',
    },
    {
        quote: 'Strive not to be a success, but rather to be of value.',
        author: 'Albert Einstein',
    },
    {
        quote: 'The swiftest way to triple your success is to double your investment in personal development.',
        author: 'Robin Sharma',
    },
    {
        quote: 'Dont go through life, grow through life.',
        author: 'Eric Butterworth',
    },
    {
        quote: 'We cant become what we need to be by remaining what we are.',
        author: 'Oprah Winfrey',
    },
    {
        quote: 'Lifes challenges are not supposed to paralyze you, theyre supposed to help you discover who you are.',
        author: 'Bernice Johnson Reagon',
    },
    {
        quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
        author: 'Amelia Earhart',
    },
    {
        quote: 'People who are crazy enough to think they can change the world are the ones who do.',
        author: 'Rob Siltanen',
    },
    {
        quote: 'If there is no struggle, there is no progress.',
        author: 'Frederick Douglass',
    },
    {
        quote: 'Do the best you can until you know better. Then when you know better, do better.',
        author: 'Maya Angelou',
    },
]

const quote = document.querySelector('.quotes .quote');
const author = document.querySelector('.quotes .author');

// Math.random() * 10; 10 이내의 랜덤한 숫자를 표시 but 소수점
// Math.round(1.3); 숫자를 반올림 처리
// Math.ceil(1.3); 숫자를 올림 처리
// Math.floor(1.3); 숫자를 버림 처리

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// length 수 만큼의 random한 소수 숫자를 가져오고, floor로 버림처리 한 후 나오는 정수에 해당하는 array를 호출

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;