
window.onload = function () {
  const input1 = document.createElement('input');
  input1.setAttribute('type', 'text');
  input1.setAttribute('name', 'order-name');
  input1.setAttribute('id', 'order-name');
  input1.setAttribute('placeholder', 'Full Name');
  input1.setAttribute('required', true);
  console.log(input1);
  const div1 = document.getElementById('custom_input_wrapper1');
  console.log(div1);
  div1.appendChild(input1);

  const input2 = document.createElement('input');
  input2.setAttribute('type', 'email');
  input2.setAttribute('name', 'email-address');
  input2.setAttribute('id', 'email-address');
  input2.setAttribute('placeholder', 'Email Address');
  input2.setAttribute('required', true);
  console.log(input2);
  const div2 = document.getElementById('custom_input2');
  console.log(div2);
  div2.appendChild(input2);

  const input3 = document.createElement('input');
  input3.setAttribute('type', 'tel');
  input3.setAttribute('name', 'phone-number');
  input3.setAttribute('id', 'phone-number');
  input3.setAttribute('placeholder', 'Phone Number');
  input3.setAttribute('required', true);
  console.log(input3);
  const div3 = document.getElementById('custom_input3');
  console.log(div3);
  div3.appendChild(input3);

  const button1 = document.createElement('button');
  button1.textContent = 'REQUEST A QUOTE';
  button1.setAttribute('class', 'request');
  console.log(button1);
  const div4 = document.getElementById('custom_input4');
  console.log(div4);
  div4.appendChild(button1);

  button1.addEventListener('click', function (event) {
    event.preventDefault();  // Предотвращение отправки формы

    
    // Получение данных из полей ввода
    const name = document.getElementById('order-name').value;
    const email = document.getElementById('email-address').value;
    const phone = document.getElementById('phone-number').value;
    
    // Очистка полей ввода
    document.getElementById('order-name').value = '';
    document.getElementById('email-address').value = '';
    document.getElementById('phone-number').value = '';
    
    //Отображение данных под соответствующими полями ввода
    const custom_input1 = document.getElementById('custom_input1');
    const custom_input_display = document.getElementsByClassName('display1');
    if(name !== ''){
      if(custom_input_display.length === 0){
        const nameDisplay = document.createElement('p');
        nameDisplay.classList.add('display1');
        custom_input1.appendChild(nameDisplay);
      }

      document.getElementsByClassName('display1')[0].textContent = `Name: ${name}`;
    }

    const custom_input2 = document.getElementById('custom_input2');
    const custom_input_display2 = document.getElementsByClassName('display2');
    if(email !== ''){
      if(custom_input_display2.length === 0){
        const emailDisplay = document.createElement('p');
        emailDisplay.classList.add('display2');
        custom_input2.appendChild(emailDisplay);
      }

      document.getElementsByClassName('display2')[0].textContent = `Email: ${email}`;
    }

    const custom_input3 = document.getElementById('custom_input3');
    const custom_input_display3 = document.getElementsByClassName('display3');
    if(phone !== ''){
      if(custom_input_display3.length === 0){
        const telDisplay = document.createElement('p');
        telDisplay.classList.add('display3');
        custom_input3.appendChild(telDisplay);
      }

      document.getElementsByClassName('display3')[0].textContent = `Phone Number: ${phone}`;
    }

  });
  /*button1.addEventListener('click', function () {
    const container = document.getElementById('service')
    container.removeAttribute('class')
  })*/

  const button2 = document.createElement('button');
  button2.textContent = 'READ MORE';
  button2.setAttribute('class', 'read_more');
  console.log(button2);
  const div5 = document.querySelector('#about .info');
  console.log(div5);
  div5.appendChild(button2);

  button2.addEventListener('click', function () {
    const choos_your_price = document.getElementById('pricing')
    choos_your_price.removeAttribute('class')
  })

  function abc() {
    this.style.background='red';
    console.log(this.style)
  }

  let user = document.querySelectorAll(".test");
console.log(user);
  user.forEach(function(element) {
    element.onclick = abc;
  });

  const form = document.getElementById('form');
  console.log(form)
  form.addEventListener('submit', function(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const userName = formData.get('order-name')
    console.log( userName)

    const userEmail = formData.get('email-address')
    console.log( userEmail)

    const userTel = formData.get('phone-number')
    console.log( userTel)
  }) 

  
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const aboutText = document.getElementById('aboutText');
  
    let isVisible = true; // Флаг для отслеживания видимости текста
  
    toggleButton.addEventListener('click', function() {
      isVisible = !isVisible; // Инвертируем состояние флага
  
      if (isVisible) {
        aboutText.style.display = 'block'; // Показываем текст
        toggleButton.textContent = 'HIDE TEXT'; // Меняем текст кнопки
      } else {
        aboutText.style.display = 'none'; // Скрываем текст
        toggleButton.textContent = 'READ MORE'; // Меняем текст кнопки
      }
    });
  });
  
};
