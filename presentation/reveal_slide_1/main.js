/* global Reveal */
const isNarrowScreen = window.matchMedia('(max-width: 980px)').matches;

const deck = new Reveal({
  hash: true,
  controls: true,
  progress: true,
  center: true,
  transition: 'fade',
  transitionSpeed: 'fast',
  backgroundTransition: 'fade',
  width: isNarrowScreen ? 420 : 1366,
  height: isNarrowScreen ? 900 : 768,
  margin: isNarrowScreen ? 0.05 : 0.02,
  minScale: 0.3,
  maxScale: 2.0,
});

deck.initialize();
