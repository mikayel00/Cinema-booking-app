const place = [];
const price = [];
function gettingID(clickID,event){

    if(classCheck(clickID,event)){
        event.target.classList.toggle('selected')
        if(event.target.className.includes('selected')){
            seatNum(event);
            place.push(rowName(clickID) + seatNum(event));
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

function rowName(clickID){
    let num;
    for(let i = 0;i<clickID.length;i++){
        num = clickID.indexOf('-');
        if(num){
            break;
        }
    }
    return clickID.slice(num+1);
}

function seatNum(event){
    if(event.target.className.slice(10, 12) < 10){
        return event.target.className.slice(10, 11);
    }
    return event.target.className.slice(10, 12);
}

function blockAdder(place,clickID,event){
    if(event.target.className.includes('selected')){
        let list = document.getElementById("order__item");
        let li = document.createElement("li");
        li.innerHTML = 'Row: ' + rowName(clickID) + " Seat: " + seatNum(event) + " Price: " + highPrice(clickID) + " AMD";
        list.appendChild(li);
    }else{
        let list = document.getElementById("order__item");
        for(let i = 0;i < list.childNodes.length; i++){
            if(list.childNodes[i].innerText == 'Row: ' + rowName(clickID) + " Seat: " + seatNum(event) + " Price: " + highPrice(clickID) + " AMD"){
                list.removeChild(list.childNodes[i]);
                break;
            }
        }
    }
}

function classCheck(clickID,event){
    return event.target.className.includes('seat-') && !(event.target.className.includes('unable'));
}

function highPrice(clickID){
    if(clickID.includes('F') || clickID.includes('G')){
        return 3500;
    }
    return 2500;
}

function placeRemover(clickID,event){
    let index = place.indexOf(rowName(clickID) + seatNum(event));
    
    if (index > -1) {
        place.splice(index, 1);
    }
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
