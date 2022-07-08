const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animacaoScroll() {
    const windowTop = window.scrollY + (window.innerHeight*0.82)
    target.forEach(function(element){
        if ((windowTop) >element.offsetTop) {
            element.classList.add(animationClass)
        }
        else{
            element.classList.remove(animationClass)
        }
    })
}

animacaoScroll()

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animacaoScroll();
    },50))
}