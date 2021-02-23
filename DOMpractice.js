// >>>>>>>>Coding Exercise 51: getElementById Practice
const unicorn = document.getElementById('unicorn');
const heading = document.getElementById('mainheading');

// >>>>>>>>>Coding Exercise 52: querySelector Practice
const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('input[type="checkbox"]');

// >>>>>>>>Coding Exercise 53: Pickles Exercise
const pickles = document.querySelector('span').innerText = 'Disgusting';

// >>>>>>>>Coding Exercise 54: Manipulating Attributes Practice
const egg = document.querySelector('#egg');
egg.getAttribute('src');
egg.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg')
document.querySelector('#egg').alt = 'chicken'

// >>>>>>>>Coding Exercise 55: Magical Fores Circle Exercise
const tree = document.querySelector('#container');
const image = tree.querySelector('img');
tree.style.textAlign = "center"
image.style.width = '150px';
image.style.borderRadius = '50%'

// >>>>>>>>Coding Exercise 56: Rainbow Text Exercise
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; const spans = document.querySelectorAll(' .bow span');
for (let i in colors) {
    spans[i].style.color = colors[i];
    console.log(i);
}

// >>>>>>>>Coding Exercise 57: classList Practice
const listPractice = document.querySelector('.listPractice');
const liE = listPractice.querySelectorAll('li');
for (let li of liE) {
    li.classList.toggle('highlight');
}

// >>>>>>>>Coding Exercise 58: Button Insanity Exercise
for (let i = 0; i < 100; i++) {
    const nButton = document.createElement('button');
    console.dir(nButton)
    nButton.innerText = 'Hey!';
    const container1 = document.querySelector('#container1')
    container1.appendChild(nButton);
}

// >>>>>>>>Coding Exercise 59: the events has been created in DOMpractice.html

// >>>>>>>>Coding Exercise 60: Click Events Exercise
const helloBtn = document.querySelector('#hello');
const gByeBtn = document.querySelector('#goodbye');
helloBtn.addEventListener('click', () => {
    console.log('hello');
});
gByeBtn.addEventListener('click', () => {
    console.log('goodbye');
})

// >>>>>>>>Coding Exercise 62: Input Event Practice
const input = document.querySelector('#username');
const h1 = document.querySelector('#inputH1');

input.addEventListener('input', function (e) {
    // console.log('I am Working!')
    if (!input.value) {
        //The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa.As you know, the empty string "" is falsy value, the condition if (!this.value) basically just checks if the input is empty or not, if it is empty then this.value will be false and negating it i.e (using !) will make the condition if (!this.value) will return true and if block will run, or else the else block will run.
        h1.innerText = 'Enter Your Username';
    } else {
        h1.innerText = `Welcome, ${input.value}`;
    }
})


