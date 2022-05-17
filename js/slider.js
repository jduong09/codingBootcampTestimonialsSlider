document.addEventListener('DOMContentLoaded', () => {
  const arrowPrev = document.getElementById('slider-arrow-prev');
  const arrowNext = document.getElementById('slider-arrow-next');
  const sliderItems = document.getElementsByClassName('slider-image');
  const testimonialsList = document.getElementsByClassName('testimonial');
  let testimonialIndex = 0;

  arrowPrev.addEventListener('click', () => {
    testimonialsList[testimonialIndex].classList.add('hide');
    sliderItems[testimonialIndex].classList.add('hide');
    if (testimonialIndex === 0) {
      testimonialIndex = testimonialsList.length - 1;
    } else {
      testimonialIndex = testimonialIndex - 1;
    }

    testimonialsList[testimonialIndex].classList.remove('hide');
    sliderItems[testimonialIndex].classList.remove('hide');
  });

  arrowNext.addEventListener('click', () => {
    testimonialsList[testimonialIndex].classList.add('hide');
    sliderItems[testimonialIndex].classList.add('hide');
    if (testimonialIndex === testimonialsList.length - 1) {
      testimonialIndex = 0;
    } else {
      testimonialIndex = testimonialIndex += 1;
    }

    testimonialsList[testimonialIndex].classList.remove('hide');
    sliderItems[testimonialIndex].classList.remove('hide');
  });
});