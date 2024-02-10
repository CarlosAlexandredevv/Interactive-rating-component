const buttons = document.querySelectorAll('.buttons button');
const thanks = document.querySelector('.thanks');
const rated = document.getElementById('rated');
let rate = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    cleanButtons();
    button.classList.add('active');
    rate = button.textContent;
  });
});

function cleanButtons() {
  buttons.forEach(button => {
    button.classList.remove('active');
  });
}

btn.onclick = () => {
  if (rate === 0) {
    alert('Select a rate');
  } else {
    thanks.classList.add('active');
    rated.innerText = rate; 
  }
};
