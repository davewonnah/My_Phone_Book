const submit_btn = document.querySelector('#submit-btn');
const name_el = document.querySelector('#name');
const address_el = document.querySelector('#address');
const email_el = document.querySelector('#email');
const contact_el = document.querySelector('#contact-num');
const main_container = document.querySelector('.main-container');
const image_input = document.querySelector('#image-input');
const result_container = document.querySelector('#result-container');
const view_contact_btn = document.querySelector('#view-contact-btn');
const create_contact_btn = document.querySelector('#create-contact-btn');


submit_btn.addEventListener('click', function(){

    if(!name_el.value){
        alert("please fill in your name");
        return;
    }
    if(!email_el.value){
        alert("please fill in your email");
        return;
    }
    if(!address_el.value){
        alert("please fill in your address");
        return;
    }
    if(!contact_el.value){
        alert("please fill in your contact")
        return;
    }

    addInfo();

    name_el.value = "";
    email_el.value = "";
    address_el.value = "";
    contact_el.value = "";
    image_input.value = "";

    
})

view_contact_btn.addEventListener('click', function (){

  result_container.style.display = 'block';
  main_container.style.display = 'none';


})

create_contact_btn.addEventListener('click', function (){

  result_container.style.display = 'none';
  main_container.style.display = 'block';


})

const resultContainer = document.querySelector('#result-container');

function addInfo() {
  const info = {
    name: name_el.value,
    email: email_el.value,
    address: address_el.value,
    contact: contact_el.value,
    image: image_input.files[0]
  };

  // Create a new element to display the info
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');
  
  // Add the info to the new element
  const infoHtml = `
    <img src="${URL.createObjectURL(info.image)}" alt="${info.name}">
    <p>Name: ${info.name}</p>
    <p>Email: ${info.email}</p>
    <p>Address: ${info.address}</p>
    <p>Contact: ${info.contact}</p>
  `;
  infoDiv.innerHTML = infoHtml;

  // Add the new element to the result container
  resultContainer.appendChild(infoDiv);
}





