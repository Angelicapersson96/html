/**
 * Detta är för hamburgarmenyn på mobilversionen som togglar klassen isOpen,
 * som i detta fall är för navbaren som ska kunna öppnas och stängas.
 * klassen i sin tur har en transform: translateX(0).
 * elementet dvs navbaren har en färdig transform:translateX(-200px) som gör att den skjuts ut utanför
 * den synliga bodyn, och med hjälp av den så kan jag skjuta in den från sidan till mobilens vy.
 * 
 * Jag lägger till en event lyssnare som lyssnar på "click" på min hamburgarmeny som för varje klick på den kan man toggla menyn.
 * Jag använder mig av querySelector för att peka på de element jag vill ska manipuleras eller lyssnaren ska lyssna på och 
 * efter det så läggs klassen till eller tas bort beroende på vad det förgående statet var.
 * 
 * nästa steg ifall jag hade den tiden var att jag skulle lägga till en background opacity och om man klickar utanför det öppna elementet
 * så stängs menyn ned.
 */

const menu = document.querySelector('.nav-links');
const toggleMenu = document.querySelector('.toggle-menu__mobile')


toggleMenu.addEventListener("click", () =>{
  menu.classList.toggle("isOpen");

})

const light = document.querySelector('.light__btn')
const dark = document.querySelector('.dark__btn')
const bodyBg = document.querySelector('body')
const navBg = document.querySelector('nav')
const footerBg = document.querySelector('footer')


/**
 * Detta var min funktion för att kunna byta mellan dark och light mode men jag kände att jag inte
 * hade tiden riktigt för att kunna få till det som jag ville.
 */
/*light.addEventListener("click", () => {
    footerBg.classList.remove('gray')
    navBg.classList.remove('gray')
    bodyBg.classList.remove('dark-mode')
    bodyBg.classList.add('light-mode')
})
dark.addEventListener("click", () =>{
    bodyBg.classList.remove("light-mode")
    bodyBg.classList.add("dark-mode")
    navBg.classList.add('gray')
    footerBg.classList.add('gray')
    navLinks.classList.add('gray')

})*/ 