'use strict'
const events = [
  {
    name: "Music Festival",
    image: "https://thumbs.dreamstime.com/b/futuristic-music-festival-stage-holographic-visuals-crowd-glowing-blue-lights-floral-inspired-screens-surrounded-375574107.jpg",
    date: "2025-06-15"
  },
  {
    name: "Art Exhibition",
    image: "https://i.pinimg.com/736x/f3/e9/04/f3e904eb5d183756c2b672e647f4054d.jpg",
    date: "2025-07-01"
  },
  {
    name: "Tech Conference",
    image: "https://images.stockcake.com/public/d/4/a/d4a8462a-2aa9-4e89-8cfb-6374370a25c5_large/futuristic-technology-presentation-stockcake.jpg",
    date: "2025-08-10"
  },
  {
    name: "City Marathon",
    image: "https://static01.nyt.com/images/2021/11/07/sports/00burst-marathon-posters-slide-F7MO/00burst-marathon-posters-slide-F7MO-blog480.jpg",
    date: "2025-09-05"
  }
];

const div = document.getElementById('image');
events.forEach(event => {
  let li = document.createElement('li')
  let img = document.createElement('img')
  img.src=event.image;
  img.alt=event.nsme;

  const text = document.createElement('div');
  text.classList.add('text');
  text.innerHTML = `<h3>${event.name}</h3><p>${event.date}</p>`;

  li.append(img);
  li.append(text)
  
  li.addEventListener("mouseover", ()=> {
    text.classList.add('show')
  })

  li.addEventListener("mouseout", ()=>{
    text.classList.remove('show')
  })

  div.append(li)
});








