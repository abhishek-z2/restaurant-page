import "./styles.css";
import { home} from "./home.js";
import about from "./about.js"
import menu from "./menu.js"
import contact from "./contact.js"

home()

const enableButtons =(()=>{
    const homeButton=document.querySelector('#home-button');
    homeButton.addEventListener('click',()=>{
        home();
    });

    
    const aboutButton=document.querySelector('#about-button');
    aboutButton.addEventListener('click',()=>{
        about();
    });

    const contactButton=document.querySelector('#contact-button');
    contactButton.addEventListener('click',()=>{
        contact();
    });

    const menuButton=document.querySelector('#menu-button');
    menuButton.addEventListener('click',()=>{
        menu();
    });


    
})();

enableButtons();
// home();