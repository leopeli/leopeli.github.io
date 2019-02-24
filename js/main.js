const getAnimationleft = document.querySelectorAll('.js-scroll');
const halfWindow = window.innerHeight * 0.7;

function animationLeft() {
  getAnimationleft.forEach((getAnimationleft) => {
    const topDistance = getAnimationleft.getBoundingClientRect().top;
    const sectionVisible = (topDistance - halfWindow) < 0;
    if(sectionVisible) {
      getAnimationleft.classList.add('fade-left')
    } else {
      getAnimationleft.classList.remove('fade-left')
    }
  })
}

window.addEventListener('scroll', animationLeft);