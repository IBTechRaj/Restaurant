// 'contact' page content module:
const contact = () => {
    let content = document.getElementById('content');
    const br1 = document.createElement('br');
    content.appendChild(br1);

    const br2 = document.createElement('br');
    content.appendChild(br2);

    const para1 = document.createElement('h2');
    para1.innerHTML = "Find Us Here";
    content.appendChild(para1);


    const br3 = document.createElement('br');
    content.appendChild(br3);

    const para2 = document.createElement('p');
    para2.innerHTML = "Telephone: +914027809999";
    content.appendChild(para2);

    const br4 = document.createElement('br');
    content.appendChild(br4);

    const para3 = document.createElement('p');
    para3.innerHTML = "Email: ";
    content.appendChild(para3);

    const para4 = document.createElement('p');
    para4.innerHTML = "customercare@gourmet.com";
    content.appendChild(para4);

    const br5 = document.createElement('br');
    content.appendChild(br5);


    content.appendChild(br1);

    const img = new Image(345, 200);
    img.src = '../src/img/location.png';
    img.alt = "map missing";

    content.appendChild(img);


};

export { contact }