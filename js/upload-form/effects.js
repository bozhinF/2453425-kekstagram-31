import { changeSlider, destroySlider } from './slider.js';

const effectsListElement = document.querySelector('.effects__list');
const activeEffectName = effectsListElement.querySelector('input[type=radio]:checked').value;

const EffectsFilters = {
  none: {
    property: 'none'
  },
  chrome: {
    property: 'grayscale',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    units: '',
  },
  sepia: {
    property: 'sepia',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    units: '',
  },
  marvin: {
    property: 'invert',
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    units: '%',
  },
  phobos: {
    property: 'blur',
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    units: 'px',
  },
  heat: {
    property: 'brightness',
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    units: '',
  }
};

const onEffectChange = (event) => {
  const target = event.target;
  const effectName = target.value;

  changeSlider(EffectsFilters[effectName]);
};

const initEffects = () => {
  changeSlider(EffectsFilters[activeEffectName]);
  effectsListElement.addEventListener('input', onEffectChange);
};

const destroyEffects = () => {
  destroySlider();
  effectsListElement.removeEventListener('input', onEffectChange);
};

export { initEffects, destroyEffects };
