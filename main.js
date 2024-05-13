const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item"); 

// Functions select item
function selectItem(e){
    removeBorder();
    removeShow();
    // Add border
    this.classList.add("tab-border");
    // grab content from DOM

   const tabContentItem = document.querySelector(`#${this.id}-content`);
   tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove("tab-border"));
}
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove("show"));
}
// Listner
tabItems.forEach(item => item.addEventListener("click", selectItem));
