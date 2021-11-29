const rot = document.querySelector('#rotator')
const info = document.querySelector('#info');
const bBox = document.querySelector('#boundingBox')
let degree = 0;

setInterval(() => {
    degree ++;
    rot.style.transform = 'rotate(' + degree + 'deg)';

    if (degree > 359) {
        degree = 0;
    }
    const bounding = rot.getBoundingClientRect();
    // const boundString = '<div>top: ' + bounding.top + 'left: '+ bounding.left + 'right: ' + bounding.right + '</div>';
       bBox.style.top = bounding.top + 'px';
       bBox.style.left = bounding.left + 'px';
       bBox.style.height = bounding.height + 'px';
       bBox.style.width = bounding.width + 'px';
    }, 50)
