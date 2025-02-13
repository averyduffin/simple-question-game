const socket = io();

document.getElementById('submitQuestion').addEventListener('click', () => {
  const questionInput = document.getElementById('questionInput');
  const question = questionInput.value;
  socket.emit('newQuestion', question);
  questionInput.value = '';
});

socket.on('newQuestion', (question) => {
  const questionsList = document.getElementById('questionsList');
  const li = document.createElement('li');
  li.textContent = question;
  questionsList.appendChild(li);
});
