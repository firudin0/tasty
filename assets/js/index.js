const product = document.getElementById("product");
const button = document.getElementById("btn");


async function get() {
  const res = await axios.get(`https://655c844f25b76d9884fd70a7.mockapi.io/products`);
  const data = res.data;
  db = data;
  db.map(item => {
    const box = document.createElement("div");
    box.className = "boxs col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12";
    box.innerHTML = `
        <div class="divz">
        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.title}</p>
        </div>
        <p>$ ${item.price}</p>
    <button onclick="addToCart(${item.id})">Sebete Ekle</button>
    <button onclick="addToHeart(${item.id})"><i class="fa-solid fa-heart"></i></button>
            </div>
        `
    product.appendChild(box);
  });

  
}

function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == index));
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToHeart(index) {
  const heart = JSON.parse(localStorage.getItem("heart")) || [];
  heart.push(db.find((item) => item.id == index));
  localStorage.setItem("heart", JSON.stringify(heart));
}

get()











  // // sort js
  
  // const max = document.getElementById('max')
  // const min = document.getElementById('min')
  
  // function maxFunc(){
  //   product.innerHTML = ''
  //   axios.get('https://655c844f25b76d9884fd70a7.mockapi.io/products')
  //   .then(res =>{
  //     db = res.data
  //    let sortData = db.sort((a, b) => (a.title.localeCompare(b.title)))
  //    console.log(sortData);
  //    sortData.map(item =>{
  //     const box = document.createElement("div");
  //     box.className = "boxs col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12";
  //     box.innerHTML = `
  //         <div class="divz">
  //         <img src="${item.image}" alt="">
  //         <div class="divc">
  //             <p>${item.title}</p>
  //         </div>
  //         <p>$ ${item.price}</p>
  //         <button onclick="addToCart(${item.id})">Sebete Ekle</button>
  //         <button onclick="addToHeart(${item.id})"><i class="fa-solid fa-heart"></i></button>
  //             </div>
  //         `;
  //     product.appendChild(box);
  //    })
  //   })
  // }
  
  // max.addEventListener('click', maxFunc)
  
  
  
  // function minFunc(){
  //   product.innerHTML = ''
  //   axios.get('https://655c844f25b76d9884fd70a7.mockapi.io/products')
  //   .then(res =>{
  //     db = res.data
  //    let sortData = db.sort((a, b) => (b.title.localeCompare(a.title)))
  //    console.log(sortData);
  //    sortData.map(item =>{
  //     const box = document.createElement("div");
  //     box.className = "boxs";
  //     box.innerHTML = `
  //         <div class="divz">
  //         <img src="${item.image}" alt="">
  //         <div class="divc">
  //             <p>${item.title}</p>
  //         </div>
  //         <p>$ ${item.price}</p>
  //         <button onclick="addToCart(${item.id})">Sebete Ekle</button>
  //         <button onclick="addToHeart(${item.id})"><i class="fa-solid fa-heart"></i></button>
  //             </div>
  //         `;
  //     product.appendChild(box);
  //    })
  //   })
  // }
  
  // min.addEventListener('click', minFunc)
  



  
//Form


// const nameInp = document.getElementById('exampleInputName')
// const PriceInp = document.getElementById('exampleInputPrice')
// const form = document.getElementById('form')

// function getdorm(e) {
//     e.preventDefault()

//     axios.post('https://655c844f25b76d9884fd70a7.mockapi.io/products', {
//         name: nameInp.value,
//         Price: PriceInp.value
//     })
//         .then(res => {
//             console.log(res.data);
//             form.reset();
//         })
// }

// form.addEventListener('submit', getdorm)



// const forme = document.getElementById("forme");
// const inp = document.getElementById("inp");


// function geta() {
//     product.innerHTML = ''
//     axios.get(
//         `https://655c844f25b76d9884fd70a7.mockapi.io/products`
//     )
//     .then(res => {
//         db = res.data
//         const search = db.filter(item => item.title.toLowerCase().includes(inp.value.toLowerCase()))
//         search.map(item => {
//             console.log(item)
//             const box = document.createElement('div')
//             box.innerHTML = `
//             <div class="divz col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
//             <img src="${item.image}" alt="">
//             <div class="divc">
//                 <p>${item.title}</p>
//             </div>
//             <p>$ ${item.price}</p>
    
//         <button onclick="removeCart(${item.id})">Remove</button>
//                 </div>
//             `
//             product.appendChild(box)
//         })
//     })

  
// }

// forme.addEventListener('submit', (e) => {
//     e.preventDefault()
//     geta()
// })








