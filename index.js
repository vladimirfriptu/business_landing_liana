
window.onload = function () {
  const input1 = document.createElement('input');
  input1.setAttribute('type', 'text');
  input1.setAttribute('name', 'order-name');
  input1.setAttribute('id', 'order-name');
  input1.setAttribute('placeholder', 'Full Name');
  input1.setAttribute('required', true);
  console.log(input1);
  const div1 = document.getElementById('custom_input1');
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

  button1.addEventListener('click', function () {
    const container = document.getElementById('service')
    container.removeAttribute('class')
  })

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
    this.style.backround='red';
    console.log(this.style)
  }

  let user = document.querySelectorAll(".test");
console.log(user);
  user.forEach(function(element) {
    element.onclick = abc;
  });
  /*const test = document.querySelectorAll('.test');

function abs() {
  this.style.background = 'red';
}

test.forEach(function (element) {
  element.onclick = abs;
});*/
};
