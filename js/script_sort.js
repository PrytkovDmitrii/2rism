// document.getElementById("attractions").addEventListener("click",function() {
//     alert("Подробности Достопримечательности можно узнать на основной странице с достопримечательностями");
// });

const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    console.log(filterClass)
    console.log(filterBox)
    filterBox.forEach(elem => {
        elem.classList.remove('hide')
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });

});
