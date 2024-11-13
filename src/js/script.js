document.querySelector(".menu-btn").addEventListener("click", function () {
    const isOpen = this.getAttribute("aria-expanded") === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);

    const nav = document.querySelector(".menu");

    nav.setAttribute("aria-hidden", isOpen ? "true" : "false"); 
    this.setAttribute("aria-expanded", isOpen ? "false" : "true"); 
});