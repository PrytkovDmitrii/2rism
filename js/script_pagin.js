const filter = document.querySelectorAll('.box');

document.querySelector('nav1').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    console.log(filterClass)
    console.log(filter)
    filter.forEach(elem => {
        elem.classList.remove('hide')
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });

});