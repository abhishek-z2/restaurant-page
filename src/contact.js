function  contact(){
    
    const contentBox = document.querySelector("#content");
    contentBox.innerHTML="";
    // contentBox.textContent="this worked"
    
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container')
    const contactBox = document.createElement('div')
    contactBox.classList.add('contact-box')
    const header=document.createElement('h1')
    header.textContent='For more information, feel free to reach out to us at:';
    const list = document.createElement('ul')
    const email = document.createElement('li')
    email.innerHTML='<span class="highlight">Email</span>: bergman32@gmail.com';
    const phone= document.createElement('li')
    phone.innerHTML='<span class="highlight">Phone</span>: +91 773384741';
    const address = document.createElement('li')
    address.innerHTML='<span class="highlight">Address</span>: void, totally existing place P.O ,<br>In The Middle Of Nowhere';

    list.append(email,phone,address)
    contactBox.append(header,list)
    contactContainer.appendChild(contactBox)
    contentBox.appendChild(contactContainer)

}

export default contact