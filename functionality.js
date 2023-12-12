
// declare some variable for functionality
let count=0;
let price=0;


// input field
let input_field=document.getElementById('input-field');

// apply-button
let apply_btn=document.getElementById('apply-btn');
apply_btn.setAttribute('disabled',true)

// purchase-btn
let purchase_btn=document.getElementById('purchase_btn');
purchase_btn.setAttribute('disabled',true)


// discount 
let discount=document.getElementById('discount');

// original price
let original_price=document.getElementById('original-price');


// all card access
function card_details(a){

        count++;

        // name and price find from button click event
        let name=a.childNodes[3].childNodes[7].innerText;

        let priceString=a.childNodes[3].childNodes[9].innerText.split(" ")[0];
        console.log(a.childNodes[3].childNodes[9].innerText.split(" "))
        let price1=parseFloat(priceString);


        // items added to cart
        let item_container=document.getElementById('item-container');

        let h1=document.createElement('h1');

        h1.innerHTML=`<h1 class="text-sm md:text-base font-bold  text-black py-2">
        ${count}. ${name}</h1>`

        item_container.appendChild(h1);

        // calculation

        price=price+price1;

        if(`${price}`>0){

            purchase_btn.removeAttribute('disabled');
            let total_price=document.getElementById('total-price');

            
            // dynamic price
            total_price.innerText=`${price}`;
            

            // intial discount=0 set
            discount.innerText=0;
        

            // original price
            let original_price_value=parseFloat(total_price.innerText)-parseFloat(discount.innerText);

            original_price.innerText=original_price_value;

            

            if(`${price}`>200){

                apply_btn.removeAttribute('disabled');

            }

            

        }


    }



 // cuppon apply button
 apply_btn.addEventListener('click',function(){

    if(input_field.value >= 'SELL200'){

        let offerString=price*(20/100);
        let offer=parseFloat(offerString);

        discount.innerText=offer.toFixed(2);

        original_price.innerText=(price-(parseFloat(discount.innerText))).toFixed(2);

     }

    document.getElementById('input-field').value='';
    

})


// promo code

document.getElementById('promo_code').addEventListener('click',function(){

     input_field.value='SELL200';

    
})


// modal home button

document.getElementById('home_button').addEventListener('click',function(){

    window.location.href='index.html';

})

