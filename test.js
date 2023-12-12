// card details

function card_details(a){


    let name=a.childNodes[3].childNodes[7].innerText;
    let priceString=a.childNodes[3].childNodes[9].innerText.split(" ")[0]

    console.log(name , priceString);

}

