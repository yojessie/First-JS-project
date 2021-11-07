const todoForm = document.querySelector('.todo-form');
// const todoInput = document.querySelector('.todo-form input'); 아래와 같은 코드
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');

const TODOS_KEY = 'todoList';

let toDos = [];
// todo가 storage에 value를 가지고 있을 경우 (= savedTodo가 null이 아닐 경우),
// 위 array에 savedTodo가 있는 상태로 새로 정의될 수 있도록 let으로 선언. 


function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // 그냥 저장하면 단순 텍스트로 저장된다. array로 저장이 안됨.
    // 일단 string으로 바꿔주는 JASON.stringify(variableName) 을 사용해서 array를 일단 array의 문자형태 그대로 저장한다.
}


function deleteTodo(event) {
    const listToDelete = event.target.parentElement;
    // event라는 매개변수를 통해 click 이벤트 내용을 잡아옴
    // 이벤트 내용에 있는 property를 사용해 우리가 필요한 요소를 잡아보자
    // event의 target(=button) 의 부모요소(=li)를 잡아옴
    listToDelete.remove();

    // list에서 항목을 지우면서 storage에서도 삭제해야 refresh 했을때 삭제한 상태의 목록이 유지된다.
    // 위 방식으로 targeting한 list를 잡아서, filter 함수로 storag에서도 삭제하자.

    toDos = toDos.filter((item) => item.id !== parseInt(listToDelete.id));
    saveToDo();
    // 삭제된 항목을 제외한 array를 리스트가 가지고있을 수 있게 새로 정의함.
    // item.id 는 숫자로 정의되었으나
    // listToDelete.id 는 string의 형태로 출력되기 때문에, parseInt로 변환이 필요함.
    // 그리고 toDos 리스트에서 지웠으니, storage에 저장해야 refresh 해도 삭제 기록이 사라지지 않는다.
}


function generateTodo(newTodo) {
    const list = document.createElement('li'); // 우선 li 태그를 HTML에 생성시키는 variable 정의
    list.id = newTodo.id; // 부여한 랜덤 id 활용을 위해 HTML에 id를 추가

    const span = document.createElement('span');
    span.innerText = newTodo.text;

    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteTodo);

    list.appendChild(span); // list안에 (= 끝에, = 뒤에) span을 넣음
    list.appendChild(button);

    todoList.appendChild(list);
}


function todoSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    // 리스트에 있는 항목을 지울때는, X버튼을 targeting하고, 그 버튼의 parent를 찾아서 특정시킬 수 있었지만
    // data base(storage) 에서는 이 방식으로 특정할 수 없기때문에, 각 항목에 ID 부여가 필요하다.
    // 그래서 인풋텍스트를 그대로 array에 저장하는게 아니라, 거기에 ID까지 같이 부여해서 object로 보내줘야 한다.
    // ID를 위한 랜덤 숫자에 Date.now() 함수를 활용한다. 현재의 밀리초를 알려주는 함수. 
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }

    todoInput.value = ''; 
    toDos.push(newTodoObj);
    generateTodo(newTodoObj);
    saveToDo();
}


todoForm.addEventListener('submit', todoSubmit); 

// 위 내용까지는 input에 입력한 todo를 리스트에 출력하고, storage에 array의 모양을 가진 string으로 저장했다.
// 이제 그 array 모양의 string을 진짜 array로 만들어서 활용할 차례.


const savedTodo = localStorage.getItem(TODOS_KEY); 

if (savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);

    toDos = parsedTodo;
    // 저장된 value를 toDos array가 갖고 시작할 수 있도록 새로 정의함

    // generateTodo(parsedTodo); foreach로 각 아이템을 나누지 않은 경우, value들이 통째로 한 list에 출력됨.
    parsedTodo.forEach(generateTodo); 
    // parsed된 todos 각각에 generateTodo 라는 function을 실행시킴
    // generateTodo가 이미 item에 해당하는 인자를 갖고있기때문에 여기다 추가 입력해주지 않아도 됨.
}



// TIP : Arrow Function
// function sayHello(item) {
//    console.log('Hello ', item);
// }
// 위 아래가 동일 역할을 하는 코드
// (item) => console.log('Hello ', item)

