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
