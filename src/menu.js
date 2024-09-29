function  menu(){
    
    const contentBox = document.querySelector("#content");
    contentBox.innerHTML="";
    // contentBox.textContent="this worked";

    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menu-container");
    contentBox.appendChild(menuContainer);

    const menuArray = [];


    function addMenuItem(name,description){
        this.name=name;
        this.description=description;
    }

    menuArray[1]= new addMenuItem('idli','common in the south of India')
    menuArray[0]= new addMenuItem('bacon','popular pork based dish in the US')
    menuArray[2]= new addMenuItem('bread omelette','comes to rescue when you\'ve got only 50 rs and want a tasty snack')
    menuArray[3]= new addMenuItem('bread omelette','comes to rescue when you\'ve got only 50 rs and want a tasty snack')
    menuArray[4]= new addMenuItem('bread omelette','comes to rescue when you\'ve got only 50 rs and want a tasty snack')



    menuArray.forEach((item,index) => {
        
    
        const item1 = document.createElement('div');
        item1.classList.add('item');
        item1.classList.add(`item-${index+1}`);
        menuContainer.appendChild(item1);
        const itemImage= document.createElement('img');
        itemImage.src='https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?t=st=1727537844~exp=1727541444~hmac=071bac5dcf8a5057758b32154379f4316af6d3cd74ef0aad0d69466455bd1e9a&w=740';
        const itemDescription= document.createElement('div');
        itemDescription.classList.add('description');
        const itemHeader = document.createElement('h1');
        itemHeader.textContent=item.name;
        const itemSubHeader=document.createElement('p');
        itemSubHeader.textContent=item.description;
        itemDescription.append(itemHeader,itemSubHeader);
        item1.append(itemImage,itemDescription);
    
    });
   



}


export default menu;