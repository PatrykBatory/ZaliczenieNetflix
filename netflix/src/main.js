import './styles/main.scss';

// prosta obsługa przewijania szyn (karuzeli)
document.querySelectorAll('[data-rail]').forEach(rail => {
  const track = rail.querySelector('.rail__track');
  const left = rail.querySelector('[data-left]');
  const right = rail.querySelector('[data-right]');

  const step = () => Math.min( Math.max(track.clientWidth * 0.9, 300), 800 );

  left.addEventListener('click', () => {
    track.scrollBy({ left: -step(), behavior: 'smooth' });
  });
  right.addEventListener('click', () => {
    track.scrollBy({ left:  step(), behavior: 'smooth' });
  });
});