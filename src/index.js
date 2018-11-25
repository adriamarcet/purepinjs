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

// VARS
const element = document.querySelector('.pin');
const pinClass = 'pinned';

// FUNCTIONS
function pin() {
  console.log(element);
  element.classList.add(pinClass);
}

// TRIGGERS
pin();
