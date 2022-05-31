
// Selected Items For User
let item = document.querySelectorAll('.item');

if (item.length >= 1) {
    item.forEach((el) => {
        el.addEventListener('click', () => {
            el.classList.toggle('clicked-item');
        });
    });
}
// Function Create Pop Up
function createPopUp (txt, className) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let p = document.createElement('p');
    let txtP = document.createTextNode(txt);
    let txtSpan = document.createTextNode('+');

    div.classList.add(className);
    span.classList.add('close');
    p.appendChild(txtP);
    span.appendChild(txtSpan);
    div.appendChild(span);
    div.appendChild(p);
    return div;
};

let mainButtons = document.querySelectorAll('.button-menus a');
let body = document.querySelector('body');


mainButtons.forEach((button) => {

    if (button.classList.contains('soon')) {
        
        button.addEventListener('click', (ev) => {
            // Stop Reloud Page
            ev.preventDefault();
            
            body.appendChild(createPopUp('Cooming Soon', 'center-box'))
            
            let closePopUp = document.querySelector('.close');
            
            closePopUp.addEventListener('click', () => {
                closePopUp.parentElement.remove();
            });
            
        });
        
    };

});


// links For Go Href 

function appLinks () {

    class Links {
        constructor (targetName, link) {
            this.targetName = targetName ;
            this.link = link ;
        } ;
    } ;


    let facebook = new Links('facebook', 'https://www.facebook.com/tenderfinedining/') ;
    let instagram = new Links('instagram', 'https://www.instagram.com/tender.dining/') ;
    let whatsapp = new Links('whatsapp', 'https://api.whatsapp.com/send?phone=201280188888&text=Hello%20Tender') ;
    let phone = new Links('phone', 'tel:0115418384') ;


    let allLinks = document.querySelectorAll('a') ;

    allLinks.forEach((el) => {
        let targetName = el.getAttribute('data-targetName') ;

        if (targetName == facebook.targetName) {
            
            el.href = facebook.link ;

        } else if (targetName == instagram.targetName) {
            
            el.href = instagram.link ;
            
        } else if (targetName == whatsapp.targetName) {
            
            el.href = whatsapp.link ;
            
        } else if (targetName == phone.targetName) {
            
            el.href = phone.link ;
            
        } ;

    }) ;

}

// Dynamec Add href For All Links On Page
    appLinks() ;
