const clock = document.querySelector('.clock');

// setInterval(functionName, 1000); 1초 후 실행, 이후 1초 마다 반복
// setTimeout(functionName, 1000); 1초 기다렸다가 한번만 실행

function getClock() {
    const date = new Date();
    // new는 새로운 object를 생성
    // date는 원래 function이기때문에, new를 쓰고 생성자 함수인 date를 호출해서 instance object로 반환한다.
    // 생성자 함수는 arguments를 받을 수 있으므로 object.property 형태로 사용이 가능해진다.
    // date라는 object는 현재 날짜와 시간을 가지고 있다.

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    // 'hello'.padStart(20, 'x'); 원하는 자릿수(20)만큼 string '앞'에 x를 채워줌
    // 'hello'.padEnd(20, 'x'); 원하는 자릿수(20)만큼 string '뒤'에 x를 채워줌

    // 가지고오는 시간은 number이기때문에 string으로 변환해줘야 padStart를 사용할 수 있다.
    // String() 괄호 안에 number로 출력되는 코드를 넣으면 string으로 변환시킨다.

    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock(); //시간을 즉시 호출한 다음
setInterval(getClock, 1000); // 1초마다 시간을 갱신해서 표시
