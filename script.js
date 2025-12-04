const dataUrl="data/products.json";
async function loadProducts(){
 const res=await fetch(dataUrl);
 const products=await res.json();
 const c=document.getElementById("product-container");
 const search=document.getElementById("search");
 function render(list){
    c.innerHTML="";
    list.forEach(p=>{
      const card=document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML=`<img src="${p.image}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
      <h3>${p.name}</h3><p class='price'>$${p.price}</p>`;
      c.appendChild(card);
    });
 }
 render(products);
 search.addEventListener("input",()=> {
    const term=search.value.toLowerCase();
    render(products.filter(p=>p.name.toLowerCase().includes(term)));
 });
}
loadProducts();