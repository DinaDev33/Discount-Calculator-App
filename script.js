let text = "DISCOUNT CALCULATOR"
let i = 0;
let speed = 150;

 function type() {
    if (i < text.length) {
    document.querySelector("#headingText").textContent += text.charAt(i);
    i++;
    setTimeout(type, speed)
 }
}
type()


const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", calculateSale);
});

function calculateSale(e) {
    e.preventDefault();
    const noDiscount = parseFloat(document.querySelector("#noDiscount").value);

    const discountPercentage = parseFloat(e.target.value);


    if (isNaN(noDiscount) || noDiscount <= 0) {
  
        Swal.fire({
            
            text: 'Please enter a valid original price!'
          })
        return;
    }

    let discountPrice = noDiscount * discountPercentage;
    let discountedPrice = noDiscount - discountPrice;

    discountPrice = discountPrice.toFixed(2);
    discountedPrice = discountedPrice.toFixed(2);

    document.querySelector("#discount").textContent = discountedPrice;
}
