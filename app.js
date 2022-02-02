/**--------------------------VARIABLES---------------------------------------- */
let mobileMenu = document.getElementById('mobileMenu')
let mobileMenuIcon = document.getElementById('mobileMenuIcon')
let navItems = document.getElementById('navItems')
let isMenuOpen = false;


/**-------------------------- MENU TOGGLE FUNCTION---------------------------------------- */
mobileMenu.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if(isMenuOpen){
        navItems.style.display = "block"
        
        navItems.classList.add('myStyle')
        
        mobileMenuIcon.src = "./close-modal.png"
        
    }else{
        navItems.style.display = "none"
        
        navItems.classList.remove('myStyle')
        

        mobileMenuIcon.src = "./hamburger.png"
        
    }
})
