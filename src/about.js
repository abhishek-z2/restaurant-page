function  about(){
    
    const contentBox = document.querySelector("#content");
    contentBox.innerHTML="";
    // contentBox.textContent="this worked"
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container')
    contentBox.appendChild(aboutContainer)

    const aboutArray = []
    function About(topic,description){
        this.topic=topic;
        this.description=description;
    }

    aboutArray[0]= new About('Our Mission','At bergman fastfood, our mission is to deliver exceptional quality and service to our customers. We believe in fostering a culture of innovation and continuous improvement.')
    aboutArray[1]= new About('Our Story','Founded in 2017, we started as a small business with a vision to serve savory burgers. Over the years, we have grown into a trusted name in the industry, thanks to our dedicated team and loyal customers.')
    aboutArray[2]= new About('Our Team','Our team is composed of passionate individuals who are experts in their respective fields. Together, we work towards achieving our mission and delivering outstanding results for our clients.')

    aboutArray.forEach((element)=>{

    
    const section = document.createElement('div');
    const currentTopic = element.topic.split(' ')[1]
    section.classList.add('item', currentTopic)
    const header = document.createElement('h1')
    header.textContent=element.topic

    const summary  = document.createElement('p');
    summary.textContent= element.description;

    section.append(header,summary);
    aboutContainer.appendChild(section)
    })
}


export default about