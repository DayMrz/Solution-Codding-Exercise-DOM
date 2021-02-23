const form = document.querySelector('form');
const ulContainer = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('submit!');
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addList(productInput.value, qtyInput.value);
    productInput.value = '';
    qtyInput.value = '';
});
const addList = (product, qty) => {
    const newLi = document.createElement('li');
    newLi.append(qty);
    newLi.append(` ${product}`);
    ulContainer.append(newLi);    // this works GOOOD JOB!!
}
// const addList = (product, qty) => {
//     const li = document.createElement('li');
//     li.innerText = `${qty} ${product}`
//     ulContainer.appendChild(li);
// }
