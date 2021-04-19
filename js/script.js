$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true
    });
  });


const nav = document.querySelector('.menu_nav');
const img = document.querySelector('.menu_img img');

const links = nav.querySelectorAll('a');

img.setAttribute('src', '/img/micro-droplet.png')


for (let i = 0; i < links.length; i++) {
    let specifiedImg = '';
    let linkName = links[i].innerHTML;

     switch (linkName) {
        case 'micro':
            specifiedImg = '/img/micro.png'   
            break;
        case 'micro se':
            specifiedImg = '/img/micro-se.png'
        break;
        case 'adiva':
            specifiedImg = '/img/adiva.png'   
            break;
        case 'adiva se':
            specifiedImg = '/img/adiva-se.png'   
            break;
        case 'micro droplet':
            specifiedImg = '/img/micro-droplet.png'   
            break;
        case 'micro se droplet':
            specifiedImg = '/img/micro-se-droplet.png'   
            break;
        case 'adiva droplet':
            specifiedImg = '/img/adiva-droplet.png'   
            break;
        case 'adiva se droplet':
            specifiedImg = '/img/adiva-se-droplet.png'   
            break;
        case 'strada 2':
            specifiedImg = '/img/strada-2.png'   
            break;
        case 'subwoofers':
            specifiedImg = '/img/subwoofers.png'   
            break;
        case 'accessories':
            specifiedImg = '/img/accessories.png'   
            break;
    }

    links[i].addEventListener('mouseover', () => {
        links[i].className = 'active_link';
        img.setAttribute('src', specifiedImg);
    })
}

/* const productPartImg = document.querySelector('.product-part_content > img');
const productPartColors = document.querySelector('.product-part_colors');

const productPartLinks = productPartColors.querySelectorAll('a');

for (let i = 0; i < productPartLinks.length; i++) {
    let productPartLink = '';

    let linkName = productPartLinks[i];
    console.log(productPartLinks[i].className)

     switch (productPartLinks[i].className) {
        case 'first':
            productPartLink = '/img/page-part_first.png'   
            break;
        case 'second':
            productPartLink = '/img/page-part_second.png'
        break;
        case 'third':
            productPartLink = '/img/page-part_third.png'   
            break;
    }

    productPartLinks[i].addEventListener('mouseover', () => {
        productPartImg.setAttribute('src', productPartLink);
    })
} */

