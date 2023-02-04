window.onload = function() {
   
    init();
    
}


const init = () => {
    // burger menu
    document.querySelector('.hamburger').addEventListener('click', (e) => {
        
        //create burger-v
        const hamburgerVLine1 = createElement('span', 'hamburger__v-line');
        const hamburgerVLine2 = createElement('span', 'hamburger__v-line');
        const hamburgerVLine3 = createElement('span', 'hamburger__v-line');
        const hamburgerVLine4 = createElement('span', 'hamburger__v-line');
        const hamburgerVWrapper = createElement('span', 'hamburger__v-wrapper');
        
        appendChild(hamburgerVWrapper, hamburgerVLine1);
        appendChild(hamburgerVWrapper, hamburgerVLine2);
        appendChild(hamburgerVWrapper, hamburgerVLine3);
        appendChild(hamburgerVWrapper, hamburgerVLine4);

        //create burger-v
        const hamburgerLayout = createElement('div', 'hamburger__layout');
        hamburgerLayout.setAttribute('tabindex', "-1");
        const navigationWrapper = getElementsByClassName('navigation__wrapper')[0];

        appendChild(hamburgerLayout, hamburgerVWrapper);
        appendChild(hamburgerLayout, navigationWrapper);
        
        //Insert hamburger layout to end of body
        appendChild(document.getElementsByTagName('body')[0], hamburgerLayout);
        changeClass('navigation__wrapper', 'hamburger__wrapper');
        
        //animation
        addClass('hamburger__layout', 'show-block');

        document.querySelector('.hamburger__layout').focus();

        document.querySelector('.hamburger__layout').addEventListener('blur', () => {
            
            hideBlockAnimation('hamburger__layout', 'hide-block');

        });
        
        //Menu close handler
        addHamburgerMenuCloseClickHandler();
        addHamburgerMenuItemClickHandler();
    });




// Service card select

let buttons = document.querySelector('.service-header__button-wrapper');
let clickedButtonsCount = 0;

buttons.addEventListener('click', (e) => {

if(!e.target.attributes['data-button']) return;

if (e.target.classList.contains('service-header__button-active')) {
    
    if (clickedButtonsCount == 1) {
            addRemoveClass('blur', 'remove', `[data-service-card]`);
    } else {
        addRemoveClass('blur', 'add', `[data-service-card="${e.target.dataset.button}"]`);
    }

    e.target.classList.remove('service-header__button-active');
    clickedButtonsCount--;

} else {

    if (clickedButtonsCount < 2) {
        e.target.classList.add('service-header__button-active');

        if (clickedButtonsCount == 0) {
            addRemoveClass('blur', 'add', `[data-service-card]:not([data-service-card="${e.target.dataset.button}"])`); 
        } else {
            addRemoveClass('blur', 'remove', `[data-service-card="${e.target.dataset.button}"]`); 
        }

    clickedButtonsCount++;

    }
}


});

// Service card select end

// Prices action

let accordion = document.querySelector('.prices-item-content');
let dataPrices = document.querySelectorAll('[data-price]');

accordion.addEventListener('click', (e) => {
    if(e.target.tagName == 'SPAN' && e.target.classList.contains('prices-item-content__icon')) {
        
        let dataPriceCurr = e.target.parentElement.children[1].dataset.price;

        e.target.parentElement.children[1].hidden = !e.target.parentElement.children[1].hidden;
        e.target.parentElement.classList.toggle('prices-item-content-background-color');
        e.target.classList.toggle('drop-up-arrow');

        if(!e.target.parentElement.children[1].hidden) {
            for (let item of dataPrices) {
                if(item.dataset.price != dataPriceCurr) {
                    item.hidden = true;
                    item.parentElement.classList.remove('prices-item-content-background-color');
                    item.previousElementSibling.classList.remove('drop-up-arrow');
                }
            }
        }
        
    }
});

// Prices action end

// Contacts action start
const city = {
    yonkers: {
        city: "Yonkers, NY",
        phone: "+1	914	678 0003",
        address: "511 Warburton Ave" 
    },
    canandaigua: {
        city: "Canandaigua, NY",
        phone: "+1	585	393 0001",
        address: "151 Charlotte Street" 
    },
    sherrill: {
        city: "Sherrill, NY",
        phone: "+1	914	678 0003",
        address: "14 WEST Noyes BLVD" 
    },
    newyork: {
        city: "New York City",
        phone: "+1	212	456 0002",
        address: "9 East 91st Street" 
    }
};

let contactItem = document.querySelector('.contacts-item-content');
let contactListWrapper = document.querySelector('.contacts-item-content__data');
let contactCityCard = document.querySelector('.contact-city-card');

contactItem.addEventListener('click', (e) => {
    if(e.target.tagName == 'SPAN') {
        if(contactCityCard.childElementCount) {
            contactCityCard.hidden = true;
        } 
        e.target.parentElement.nextElementSibling.hidden = !e.target.parentElement.nextElementSibling.hidden;
        e.target.parentElement.classList.toggle('contacts-item-content__item-background');
        e.target.classList.toggle('contacts-item-content__item-drop-up-arrow');
    }
});

contactListWrapper.addEventListener('click', (e) => {

    if(e.target.tagName == 'LI') {
        let cardTemplate = `<div class="contact-city-card__wrapper">
        <div class="contact-city-card__key-value">
            <div class="contact-city-card__key">
                <span class="contact-city-card__city-key">City:</span>
                <span class="contact-city-card__phone-key">Phone:</span>
                <span class="contact-city-card__address-key">Office address:</span>
            </div>
            <div class="contact-city-card__value">
                <span class="contact-city-card__city-value">${city[e.target.dataset.city]['city']}</span>
                <span class="contact-city-card__phone-value">${city[e.target.dataset.city]['phone']}</span>
                <span class="contact-city-card__address-value">${city[e.target.dataset.city]['address']}</span>
            </div>
        </div>
        <a href="tel:${city[e.target.dataset.city]['phone']}" class="contact-city-card__button">Call us</a>
    </div>
</div>`;

e.target.parentElement.previousElementSibling.firstChild.data = city[e.target.dataset.city]['city'];
e.target.parentElement.previousElementSibling.classList.add('contacts-item-content__item-background');
contactListWrapper.hidden = true;
contactCityCard.innerHTML = cardTemplate;
contactCityCard.hidden = false;

    }

    
    
});

// Contacts action end


};

// Init end






// Functions

function addRemoveClass(className, classOperation, filter) {

    let items = document.querySelectorAll(filter);

    for(let element of items) {
        element.classList[classOperation](className);
    }   
}

const addHamburgerMenuCloseClickHandler = () => {
    document.querySelector('.hamburger__v-wrapper').addEventListener('click', (e) => {
        
        hideBlockAnimation('hamburger__layout', 'hide-block');
        
    })
    
};

const addHamburgerMenuItemClickHandler = () => {
    document.querySelector('.hamburger__wrapper').addEventListener('click', (e) => {
        if(e.target.className.includes('navigation__link')) {

                hideBlockAnimation('hamburger__layout', 'hide-block'); 
        }
        
    });
    
};


const addClass = (className, addedClassName) => {
    let HTML_Collection = [...document.getElementsByClassName(className)];
    HTML_Collection.forEach(element => {
        element.classList.add(addedClassName);
    });
};

const changeClass = (currClassName, repClassName) => {
    let HTML_Collection = getElementsByClassName(currClassName);
        HTML_Collection.forEach(element => {
        element.className = repClassName;
    });
};

const createElement = (tagName, className) => {
const newElement = document.createElement(tagName);
      newElement.classList.add(className);
      return newElement;
};

const removeElement = (className) => {
    const element = getElementsByClassName(className)[0];
    if(element) {
       element.remove();
    } 
};

const removeClassName = (className) => {
    let element = getElementsByClassName(className)[0];
    if(element) {
        element.classList.remove(className);
    }
};

const appendChild = (parentTag, childTag) => parentTag.appendChild(childTag);

const getElementsByClassName = (className) => [...document.getElementsByClassName(className)];

const hideBlockAnimation = (className, addedClassName, callback) => {
    
    //removeElement('hamburger__v-wrapper');
    addClass(className, addedClassName);

    let cb = () => {
        
        removeClassName('show-block');
        changeClass('hamburger__wrapper', 'navigation__wrapper',);

        const navigationWrapper = getElementsByClassName('navigation__wrapper')[0];
        const navigation = getElementsByClassName('navigation')[0]; 

        appendChild(navigation, navigationWrapper);
        removeElement('hamburger__layout');

    }; 
    setTimeout(cb, 1000);
    
};

