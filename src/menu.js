// 'menu' page content module:
const menu = () => {
  const content = document.getElementById('content');

  const para1 = document.createElement('h2');
  para1.innerHTML = 'Our Delicacies';
  para1.style.textAlign = 'center';
  content.appendChild(para1);

  const br1 = document.createElement('br');
  content.appendChild(br1);

  const para2 = document.createElement('p');
  para2.innerHTML = 'Yorkshire Lamb Patties. Lamb patties which melt in your mouth';
  para2.style.textAlign = 'center';
  content.appendChild(para2);

  const br2 = document.createElement('br');
  content.appendChild(br2);

  const para3 = document.createElement('p');
  para3.innerHTML = 'Chicken And Cheese Salad';
  para3.style.textAlign = 'center';
  content.appendChild(para3);

  const br3 = document.createElement('br');
  content.appendChild(br3);

  const para4 = document.createElement('p');
  para4.innerHTML = 'Baked Potato And Aubergines';
  para4.style.textAlign = 'center';
  content.appendChild(para4);

  const br4 = document.createElement('br');
  content.appendChild(br4);

  const para5 = document.createElement('p');
  para5.innerHTML = 'Peppered Pasta Salad';
  para5.style.textAlign = 'center';
  content.appendChild(para5);

  const br5 = document.createElement('br');
  content.appendChild(br5);

  const para6 = document.createElement('p');
  para6.innerHTML = 'Roesti And Salad';
  para6.style.textAlign = 'center';
  content.appendChild(para6);


  const br10 = document.createElement('br');
  content.appendChild(br10);

  const para10 = document.createElement('p');
  para10.innerHTML = 'Apple Sausage Plait';
  para10.style.textAlign = 'center';
  content.appendChild(para10);

  const br11 = document.createElement('br');
  content.appendChild(br11);

  const para11 = document.createElement('p');
  para11.innerHTML = 'Paneer Steak';
  para11.style.textAlign = 'center';
  content.appendChild(para11);

  const br12 = document.createElement('br');
  content.appendChild(br12);

  const para12 = document.createElement('p');
  para12.innerHTML = 'Batter Fried Fish With Cheese Sauce';
  para12.style.textAlign = 'center';
  content.appendChild(para12);


};

export { menu }

