// local reviews data
const reviews = [
  {
        id: 1,
        name: "Anna Evgen",
        job: "Photography Artist",
        img:
            "image-anna.jpg",
        text:
            "To be honest, i tried some more retouchers.And no one,literally NO ONE did that amazing job as did you!You'tr was very natural,still perfectly edited.very balanced overall!",
   
  },
  {
    id: 2,
    name: "Felicia Boettcher",
    job: "Certified Makeup Artist ,Fashion, Beauty & Commercial Photography",
    img:
      "image-felica.jpg",
    text:
      "Gorgeous Work!You're So Talented!!",
  },
  {
    id: 3,
      name: "Cerasela Popoviciu",
      job: "Model",
      img:
          "image-cerasela.jpg",
      text:
          "Hallo lieber Ahmed,vielen lieben dank!!!Die sind super schön!ich liebe deine Arbeitem so sehr!!!Ich wünsche dir einen schönen Tag.",
  },
  {
    id: 4,
    name: "Michael Hoss",
    job: "Art Director,Photographer",
    img:
      "image-hoss.jpg",
    text:
      "Sounds Great!Thanks Ahmed.Beautiful work!",
    },
    {
        id: 5,
        name: "Radwa Tarek",
        job: "photographer",
        img:
            "image-radwaatarek.jpg",
        text:
            "Hi there!So my friend contacted you to retouch a photographs i have taken and GOD,you transferred them to the next level!!So in love with your work!",
    },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

//show person based on item
function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

//show next person

nextBtn.addEventListener("click", function(){
  currentItem++
  if(currentItem > reviews.length -1){
    currentItem =0
  }
  showPerson(currentItem);
});

//show previous person

prevBtn.addEventListener("click", function(){
  currentItem--
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//random button

randomBtn.addEventListener("click", function(){
 const randomNumber = Math.floor(Math.random()*reviews.length);
  currentItem = randomNumber;
  showPerson(currentItem);
});