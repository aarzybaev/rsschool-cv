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
        //console.log(e);
        
        let dataPriceCurr = e.target.parentElement.children[1].dataset.price;

        e.target.parentElement.children[1].hidden = !e.target.parentElement.children[1].hidden;
        e.target.parentElement.classList.toggle('prices-item-content-background-color');
        e.target.classList.toggle('drop-up-arrow');

        //console.log(e.target);
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

