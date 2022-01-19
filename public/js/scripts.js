const socket = io('/');
const getElementById = (id) => document.getElementById(id) || null;

//* get DOM element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

function helloUser() {
  const username = prompt('이름을 입력해 주세요');
  // socket.emit("이벤트 이름", 보낼 데이터)
  socket.emit('new_user', username, (data) => {
    console.log(data);
  });
  console.log(username);
  socket.on('hello_user', (data) => {
    console.log(data);
  });
}

function init() {
  helloUser();
}

init();
