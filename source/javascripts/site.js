// define two buttons
const cafe = document.querySelector('.cafe-button');
const gift = document.querySelector('.gift-button');

cafe.addEventListener('click', (event) => {
  console.log("cafe button clicked")
  const pageDiv = document.querySelector('.page-div');
  pageDiv.innerHTML = `<div>
    <h1>Our Cafe</h1>
  </div>
  <p>We have a lovely cafe with different treats weekly. Please stop in for a nice drink and enjoy some of our many amazing deserts. Here are some photos from our happy customers!</p>
  <div>
    <img src="./images/food/customer-photo-.png" alt="our cake display filled with many kinds of treats">
    <img src="./images/food/customer-photo-1.png" alt="a chocolate covered item and soft cake">
    <img src="./images/food/customer-photo-2.png" alt="a fruity item and iced black coffee">
    <img src="./images/food/customer-photo-3.png" alt="one of our whole cakes in the cake display">
    <img src="./images/food/customer-photo-4.png" alt="a creamy cake and hot coffee">
    <img src="./images/food/customer-photo-5.png" alt="our cake display filled with many kinds of treats">
    <img src="./images/food/customer-photo-6.png" alt="a soft pudding with a hard caramelized top">
    <img src="./images/food/customer-photo-7.png" alt="our cake display filled with many kinds of treats">
    <img src="./images/food/customer-photo-8.png" alt="our cake display filled with many kinds of treats">
    <img src="./images/food/customer-photo-9.png" alt="a fresh sweet cake">
  </div>`;
});

gift.addEventListener('click', (event) => {
  console.log("gift button clicked")
  const dishes = dishes.yml
  dishes.forEach(dish => {

  })
});
