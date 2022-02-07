let place = [];
let price = [];
function gettingID(clickID,event){

    let sliceTo = event.target.className.slice(10, 12);

    if(classCheck(clickID,event)){
        event.target.classList.toggle('selected')
        if(event.target.className.includes('selected')){
            if(sliceTo.endsWith(" ")){
                sliceTo = event.target.className.slice(10, 11);
            }
            place.push(clickID + sliceTo);
            price.push(highPrice(clickID));
            blockAdder(place,clickID,event);
        }
        else{
            blockAdder(place,clickID,event);
            placeRemover(clickID,event);
        }
        if(price.length){
            document.getElementById("order__total").innerHTML = price.reduce(reducer) + " AMD";
        }
    }
    sectionBlock(place.length);
    console.log(place);
    console.log(price);
}

function reducer(total, num){
    return total + num;
}

function seatNum(event){
    if(event.target.className.slice(10, 12).endsWith(" ")){
        return event.target.className.slice(10, 11);
    }
    return event.target.className.slice(10, 12);;
}

function blockAdder(place,clickID,event){
    if(event.target.className.includes('selected')){
        let list = document.getElementById("order__item");
        let li = document.createElement("li");
        li.innerHTML = 'Row: ' + clickID + " Seat: " + seatNum(event) + " Price: " + highPrice(clickID) + " AMD";
        list.appendChild(li);
    }else{
        let list = document.getElementById("order__item");
        for(let i = 0;i < list.childNodes.length; i++){
            if(list.childNodes[i].innerText == 'Row: ' + clickID + " Seat: " + seatNum(event) + " Price: " + highPrice(clickID) + " AMD"){
                list.removeChild(list.childNodes[i]);
                break;
            }
        }
    }
}

function classCheck(clickID,event){
    if( event.target.className.includes('seat-') && !(event.target.className.includes('unable'))){
        return true;
    }
}

function highPrice(clickID){
    if(clickID == "F" || clickID == "G"){
        return 2000;
    }
    return 1500;
}

function placeRemover(clickID,event){
    let index = place.indexOf(clickID + event.target.className.slice(10, 12));
    if (index > -1) {
        place.splice(index, 1);
    }
    let indexPrice = price.indexOf(clickID + event.target.className.slice(10, 12));
    if (index > -1) {
        price.splice(index, 1);
    }
}

function sectionBlock(length){
    if(place.length){
        document.getElementById("ticket__order").style.display = "block";
    }else if(!(place.length)){
        document.getElementById("ticket__order").style.display = "none";
    }
}
