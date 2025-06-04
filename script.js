const messages = [
  'images/msg1.png',
  'images/msg2.png',
  'images/msg3.png',
  'images/msg4.png',
  'images/msg5.png',
  'images/msg6.png',
  'images/msg7.png'
];

let index = 0;
const imageEl = document.getElementById('messageImage');

imageEl.addEventListener('click', () => {
  index = (index + 1) % messages.length;
  imageEl.src = messages[index];
});
