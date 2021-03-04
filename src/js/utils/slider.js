import Glide from '@glidejs/glide'

// Slider
const sliders = document.querySelectorAll('.slider .slider__container');

if (sliders) {
  for (let i = 0; i < sliders.length; i++) {
    let slider = sliders[i];

    let sliderInit = new Glide(slider, {
      type: 'carousel',
      perView: 1,
      gap: 80,
      focusAt: 'center',
      breakpoints: {
        575: {
          gap: 20,
        }
      }
    });

    sliderInit.mount();
  }
}