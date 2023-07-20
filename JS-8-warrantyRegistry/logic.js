function createWarrantysheet(){

    let label; 
    let element;

    element = document.createElement('h2');
    element.innerHTML = '<h2>WhirlWind Warranty Registration</h2>'
    document.body.appendChild(element); 

    element = document.createElement('h3');
    element.innerHTML = '<h3>Contact Information</h3>'
    document.body.appendChild(element);

    label = document.createElement('label'); 
    label.innerHTML = "First Name"
    document.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    document.body.appendChild(element);
    
}