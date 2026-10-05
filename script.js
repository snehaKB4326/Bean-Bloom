const menuItems = [
  {id:'signature-latte',name:'Signature Latte',category:'Coffee',price:180,oldPrice:220,discount:18,rating:4.9,reviews:186,tag:'MOST ORDERED',image:'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',description:'Smooth espresso with silky steamed milk and delicate latte art.',ingredients:'Espresso, steamed milk, microfoam and house syrup.'},
  {id:'cappuccino',name:'Cappuccino',category:'Coffee',price:170,oldPrice:200,discount:15,rating:4.8,reviews:154,tag:'POPULAR',image:'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',description:'A balanced classic with rich espresso, creamy milk and airy foam.',ingredients:'Espresso, steamed milk and milk foam.'},
  {id:'iced-coffee',name:'Iced Coffee',category:'Coffee',price:190,oldPrice:230,discount:17,rating:4.8,reviews:139,tag:'FAN FAVOURITE',image:'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg',description:'Chilled coffee served over ice for a smooth and refreshing finish.',ingredients:'Cold coffee, milk, ice and light sweetness.'},
  {id:'breakfast-sandwich',name:'Breakfast Sandwich',category:'Breakfast',price:240,oldPrice:280,discount:14,rating:4.7,reviews:112,tag:'POPULAR',image:'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg',description:'A warm, filling cafe breakfast with egg, cheese and fresh greens.',ingredients:'Toasted bread, egg, cheese, greens and house seasoning.'},
  {id:'grilled-sandwich',name:'Grilled Sandwich',category:'Savory',price:230,oldPrice:270,discount:15,rating:4.9,reviews:203,tag:'MOST ORDERED',image:'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg',description:'Golden grilled bread with a warm, cheesy and flavorful filling.',ingredients:'Bread, cheese, vegetables, herbs and house sauce.'},
  {id:'creamy-pasta',name:'Creamy Pasta',category:'Savory',price:320,oldPrice:360,discount:11,rating:4.8,reviews:97,tag:"CHEF'S PICK",image:'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',description:'Comforting pasta in a rich creamy sauce finished with herbs.',ingredients:'Pasta, cream sauce, parmesan, herbs and cracked pepper.'},
  {id:'berry-cheesecake',name:'Berry Cheesecake',category:'Dessert',price:240,oldPrice:280,discount:14,rating:4.8,reviews:121,tag:'POPULAR',image:'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',description:'Creamy cheesecake topped with fresh berries and berry sauce.',ingredients:'Cream cheese, biscuit base, berries and berry sauce.'},
  {id:'chocolate-brownie',name:'Chocolate Brownie',category:'Dessert',price:220,oldPrice:260,discount:15,rating:4.9,reviews:175,tag:'MOST ORDERED',image:'https://images.pexels.com/photos/1579926/pexels-photo-1579926.jpeg',description:'Warm chocolate brownie served with vanilla ice cream.',ingredients:'Dark chocolate, cocoa, butter, flour, sugar and vanilla ice cream.'},
  {id:'classic-cheesecake',name:'Classic Cheesecake',category:'Dessert',price:220,oldPrice:250,discount:12,rating:4.7,reviews:88,tag:'CLASSIC',image:'https://images.pexels.com/photos/4040806/pexels-photo-4040806.jpeg',description:'Smooth and creamy cheesecake with a buttery biscuit base.',ingredients:'Cream cheese, biscuit crumbs, butter, sugar and vanilla.'}
];

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function card(item){
  return `<article class="menu-card">
    <a class="menu-image" href="item.html?id=${item.id}"><img src="${item.image}" alt="${item.name}" loading="lazy"><span class="item-tag">${item.tag}</span><span class="discount">${item.discount}% OFF</span></a>
    <div class="menu-body"><div class="item-title"><h3>${item.name}</h3><strong>₹${item.price}</strong></div>
    <div class="price-line"><del>₹${item.oldPrice}</del><span>Save ₹${item.oldPrice-item.price}</span></div>
    <div class="rating"><span>★</span> ${item.rating} <small>(${item.reviews} reviews)</small></div>
    <p>${item.description}</p><a class="details-link" href="item.html?id=${item.id}">View details <i class="fa-solid fa-arrow-right"></i></a></div>
  </article>`;
}

function renderMenu(){
  const grid = $('#menuGrid'); if(!grid) return;
  const filter = $('.menu-filter.active')?.dataset.filter || 'All';
  grid.innerHTML = menuItems.filter(i => filter==='All' || i.category===filter).map(card).join('');
}

if($('#menuGrid')){
  $$('.menu-filter').forEach(btn=>btn.addEventListener('click',()=>{$$('.menu-filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderMenu();}));
  renderMenu();
}

const params = new URLSearchParams(location.search);
const detail = $('#itemDetail');
if(detail){
  const item = menuItems.find(i=>i.id===params.get('id')) || menuItems[0];
  detail.innerHTML = `<div class="detail-image"><img src="${item.image}" alt="${item.name}"><span class="discount detail-discount">${item.discount}% OFF</span></div>
  <div class="detail-content"><span class="eyebrow">${item.category} • ${item.tag}</span><h1>${item.name}</h1>
  <div class="rating large"><span>★</span> ${item.rating} <small>${item.reviews} verified ratings</small></div>
  <p class="detail-description">${item.description}</p><div class="detail-price"><strong>₹${item.price}</strong><del>₹${item.oldPrice}</del><span>Save ₹${item.oldPrice-item.price}</span></div>
  <div class="detail-box"><h3>Ingredients</h3><p>${item.ingredients}</p></div><a href="contact.html" class="btn btn-dark">Visit the Cafe <i class="fa-solid fa-arrow-right"></i></a></div>`;
}

const franchiseForm = $('#franchiseForm');
if(franchiseForm){franchiseForm.addEventListener('submit',e=>{e.preventDefault();const name=franchiseForm.elements.name.value;franchiseForm.innerHTML=`<div class="success"><i class="fa-solid fa-circle-check"></i><h3>Thank you, ${name}!</h3><p>Your franchise enquiry has been received. Our franchise team will contact you soon.</p></div>`;});}

const contactForm=$('#contactForm');
if(contactForm){contactForm.addEventListener('submit',e=>{e.preventDefault();alert('Thank you! Your message has been received.');contactForm.reset();});}

$$('.year').forEach(el=>el.textContent=new Date().getFullYear());
