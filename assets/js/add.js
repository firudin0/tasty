const product = document.getElementById("product");
const button = document.getElementById("btn");


async function get() {
    const res = await axios.get(
        `https://655c844f25b76d9884fd70a7.mockapi.io/products`
    );
    const data = res.data;
    db = data;
    db.map((item) => {
        const box = document.createElement("div");
        box.className = "boxs col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12";
        box.innerHTML = `
        <div class="divz">
        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.name}</p>
        </div>
        <p>$ ${item.price}</p>
        <button onclick="removeCart(${item.id})">Remove</button>
        </div>
        `
        product.appendChild(box);
    });


}

get()

function removeCart(id) {
    axios.delete(`https://655c844f25b76d9884fd70a7.mockapi.io/products/${id}`)
  
}







