
let addItemId = 0;
function addToCart(item) {
    addItemId += 1; 
   let selectedItem = document.createElement("div");
   selectedItem.classList.add("cartImg");
   selectedItem.setAttribute("id",addItemId);
   let img = document.createElement("img");
   img.setAttribute("src",item.children[0].currentSrc);
   let title = document.createElement("div");
   title.innerText = item.children[1].innerText;
   let title1 = document.createElement("div");
   title1.innerText = item.children[2].innerText;
   let cartItems = document.getElementById("title");

   selectedItem.append(img);
   selectedItem.append(title);
   selectedItem.append(title1);
   cartItems.append(selectedItem);
}