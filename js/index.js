// Дано 3 блоки
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).


// fetch('https://dummyjson.com/products/category/smartphones')
//     .then(res => res.json())
//     .then(products => {
//         const smartphones = [];
//         products.forEach(product => {
//             if (product.category === 'smartphones') {
//                 smartphones.push(product);
//             }
//         });
//         console.log('Smartphones:', smartphones);
//         const smartphonesList = generateList(smartphones);
//         document.body.appendChild(smartphonesList);
//     });

// fetch('https://dummyjson.com/products/category/laptops')
//     .then(res => res.json())
//     .then(products => {
//         const laptops = [];
//         products.forEach(product => {
//             if (product.category === 'laptops') {
//                 laptops.push(product);
//             }
//         });
//         console.log('Laptops:', laptops);
//         const laptopsList = generateList(laptops);
//         document.body.appendChild(laptopsList);
//     });

// const generateList = (array) => {
//     const ul = document.createElement("ul");
//     array.forEach(item => {
//         let li = document.createElement("li");
//         if (Array.isArray(item)) {
//             li.append(generateList(item));
//         } else {
//             li.textContent = item;
//         }
//         ul.append(li)
//     });
//     return ul;
// }

const categoryList = document.querySelectorAll('.category');
const productList = document.querySelector('.product-list');

const requestURL = 'https://dummyjson.com/products';

console.log(requestURL);

const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    const goods = request.response;
    showCard(goods);
}
//const productInfo = document.querySelector('.card');



const buttonBuy = document.getElementById("button");

buttonBuy.addEventListener("click", function () {
    alert("Thank you for purchasing our product!");
    productInfo.style.display = "none";

});