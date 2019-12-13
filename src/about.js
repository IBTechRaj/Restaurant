// 'about' page
const about = () => {
  const content = document.getElementById('content');

  const para1 = document.createElement('h2');
  para1.innerHTML = 'Our Story';
  content.appendChild(para1);

  const br1 = document.createElement('br');
  content.appendChild(br1);

  const para2 = document.createElement('p');
  para2.innerHTML = 'We started off as a small time road side stall. Over next few months we could get the patronage of people from all classes by our culinary skills and passion for courteous service';
  content.appendChild(para2);

  const br2 = document.createElement('br');
  content.appendChild(br2);

  const img = new Image(345, 200);
  img.src = '../src/img/aboutImg-2.jpeg';

  content.appendChild(img);

  const br3 = document.createElement('br');
  content.appendChild(br3);
};
export default { about };