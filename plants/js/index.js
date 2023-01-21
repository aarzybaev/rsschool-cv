window.onload = function() {
    console.log('Ready to use!');

    addHamburgerMenuOpenClickHandler();
    
}


const addHamburgerMenuOpenClickHandler = () => {
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
        const navigationWrapper = getElementsByClassName('navigation__wrapper')[0];

        appendChild(hamburgerLayout, hamburgerVWrapper);
        appendChild(hamburgerLayout, navigationWrapper);
        //Insert hamburger layout to end of body
        appendChild(document.getElementsByTagName('body')[0], hamburgerLayout);
        changeClass('navigation__wrapper', 'hamburger__wrapper');
      
        //Menu close handler
        addHamburgerMenuCloseClickHandler();
        //Menu closw handler
      
    })
}

const addHamburgerMenuCloseClickHandler = () => {
    document.querySelector('.hamburger__v-wrapper').addEventListener('click', (e) => {
        
        changeClass('hamburger__wrapper', 'navigation__wrapper',);
        const navigationWrapper = getElementsByClassName('navigation__wrapper')[0];
        const navigation = getElementsByClassName('navigation')[0];
        appendChild(navigation, navigationWrapper);
        removeElement('hamburger__layout');
        
    })
}


const addClass = (className, addedClassName) => {
    let HTML_Collection = [...document.getElementsByClassName(className)];
    HTML_Collection.forEach(element => {
        element.classList.add(addedClassName);
    });
}

const changeClass = (currClassName, repClassName) => {
    let HTML_Collection = getElementsByClassName(currClassName);
        HTML_Collection.forEach(element => {
        element.className = repClassName;
    });
}

const createElement = (tagName, className) => {
const newElement = document.createElement(tagName);
      newElement.classList.add(className);
      return newElement;
}

const removeElement = (className) => {
    const element = getElementsByClassName(className)[0];
    element.remove();
}

const removeClassName = (className) => {
    let element = getElementsByClassName(className)[0];
    element.classList.remove(className);

}

const appendChild = (parentTag, childTag) => parentTag.appendChild(childTag);

const getElementsByClassName = (className) => [...document.getElementsByClassName(className)];



