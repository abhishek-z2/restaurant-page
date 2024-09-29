function home(){
    
    const contentBox = document.querySelector("#content");
    contentBox.innerHTML="";
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-container')
    contentBox.appendChild(homeContent)
    const heroImage = document.createElement('div');
    heroImage.classList.add('hero-image')
    const img = document.createElement('img');


    img.src="https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    heroImage.appendChild(img);

    const heroText= document.createElement('div');
    heroText.textContent="We serve the best food in town!";
    heroText.classList.add('hero-text')

    homeContent.appendChild(heroImage);
    homeContent.appendChild(heroText);
}


export {home}