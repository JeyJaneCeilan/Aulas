
const NavPrincipal = document.getElementById("nav-principal");

document.addEventListener('keyup', (e) => {
  console.log('key:', e.key)
  console.log('code:', e.code)
  
    
  if(e.code == 'Escape') {
    NavPrincipal.click()
    NavPrincipal.style.display = "none"
      
    }
 
})