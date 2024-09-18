const carouselData = [
    {
            "image": "images/img1.png",
            "title": "DESIGN SLIDER",
            "topic": "Airpod",
            "shortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
            "productTitle": "Airpod GHTK",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.",
            "specifications": {
              "Used Time": "6 hours",
              "Charging port": "Type-C",
              "Compatible": "Android",
              "Bluetooth": "5.3",
              "Controlled": "Touch"
            }
          },
          {
            "image": "images/img2.png",
            "title": "DESIGN SLIDER",
            "topic": "Airpod",
            "shortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
            "productTitle": "Airpod GHTK",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.",
            "specifications": {
              "Used Time": "6 hours",
              "Charging port": "Type-C",
              "Compatible": "Android",
              "Bluetooth": "5.3",
              "Controlled": "Touch"
            }
          },
          {
            "image": "images/img3.png",
            "title": "DESIGN SLIDER",
            "topic": "Airpod",
            "shortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
            "productTitle": "Airpod GHTK",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.",
            "specifications": {
              "Used Time": "6 hours",
              "Charging port": "Type-C",
              "Compatible": "Android",
              "Bluetooth": "5.3",
              "Controlled": "Touch"
            }
          },
          {
            "image": "images/img4.png",
            "title": "DESIGN SLIDER",
            "topic": "Airpod",
            "shortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
            "productTitle": "Airpod GHTK",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.",
            "specifications": {
              "Used Time": "6 hours",
              "Charging port": "Type-C",
              "Compatible": "Android",
              "Bluetooth": "5.3",
              "Controlled": "Touch"
            }
          },
          {
            "image": "images/img5.png",
            "title": "DESIGN SLIDER",
            "topic": "Airpod",
            "shortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
            "productTitle": "Airpod",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.",
            "specifications": {
              "Used Time": "6 hours",
              "Charging port": "Type-C",
              "Compatible": "Android",
              "Bluetooth": "5.3",
              "Controlled": "Touch"
            }
          },
          {
            "image": "images/img6.png",
            "title": "DESIGN SLIDER",
            "topic": "Airpod",
            "shortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
            "productTitle": "Airpod GHTK",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.",
            "specifications": {
              "Used Time": "6 hours",
              "Charging port": "Type-C",
              "Compatible": "Android",
              "Bluetooth": "5.3",
              "Controlled": "Touch"
            }
          }
];

const carouselList = document.getElementById('carousel-list');

carouselData.forEach(item => {
    console.log(item);
    const itemElement = document.createElement('div');
    itemElement.className = 'item';
    itemElement.innerHTML = `
        <img src="${item.image}">
        <div class="introduce">
            <div class="title">${item.sliderTitle}</div>
            <div class="topic">${item.topic}</div>
            <div class="des">${item.introDescription}</div>
            <button class="seeMore">SEE MORE &#8599;</button>
        </div>
        <div class="detail">
            <div class="title">${item.detailTitle}</div>
            <div class="des">${item.detailDescription}</div>
            <div class="specifications">
                <div><p>Used Time</p><p>${item.specifications.usedTime}</p></div>
                <div><p>Charging port</p><p>${item.specifications.chargingPort}</p></div>
                <div><p>Compatible</p><p>${item.specifications.compatible}</p></div>
                <div><p>Bluetooth</p><p>${item.specifications.bluetooth}</p></div>
                <div><p>Controlled</p><p>${item.specifications.controlled}</p></div>
            </div>
            <div class="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
            </div>
        </div>
    `;
    carouselList.appendChild(itemElement);
});
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}