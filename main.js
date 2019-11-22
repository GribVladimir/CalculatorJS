let Buttons = document.getElementsByClassName('button');

for (let i = 0; i < Buttons.length; i++) {
  Buttons[i].onclick = () => {
  document.getElementById('root').value += Buttons[i].innerText;
  }

  document.getElementById('erase').onclick = () => {
  document.getElementById('root').value = '';
  }
}

document.getElementById('enter').onclick = () => {
  let input = document.getElementById('root');
  input.value = eval(input.value);
}
