const image = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

const chooseImage = image[Math.floor(Math.random() * image.length)];

const background = document.createElement('img'); // JS로 HTML에 요소를 넣기 위해 img 태그를 create
background.src = `img/${chooseImage}`; // 위에 만든 background에 src로 img 폴더의 랜덤한 image array 요소를 연결

document.body.appendChild(background);
// body에 HTML 태그를 추가
// append는 끝에 추가, prepend는 앞에 추가

