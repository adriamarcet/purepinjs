/** @description
 * Purepinjs:
 * pin element with plain JS
 * - decide the element via a class selector
 *
 * wishlisht:
 * - choose when to stop pinning the element
 * - choose when to start pinning the element
 * - pin multiple elements
 */

const element = document.querySelector('.pin');
const pinClass = 'pinned';
const elementContainer = document.querySelector('.pin-container');

function handlePinContainer(container) {
  if (container) {
    // force static position (necessary?)
    container.style.position = 'static';
    console.log(container.getBoundingClientRect());
  } else {
    return;
  }
}

function pin() {
  handlePinContainer(elementContainer);
  element.classList.add(pinClass);
}

pin();
