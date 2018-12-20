const main = document.getElementById('main')
 
main.addEventListener('click', function(event) {
  alert('I was clicked!')
})

let input = document.querySelector('input')
input.addEventListener('keydown', e => console.log(e.which))

let input = document.querySelector('input')
input.addEventListener('keydown', e => console.log(e.which))

let divs = document.querySelectorAll('div')
 
function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!
 
  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
 
for (const aDiv of divs) {
  aDiv.addEventListener('click', bubble);
}

divs = document.querySelectorAll('div')
 
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured')
}
 
for (const aDiv of divs) {
  // set the third argument to `true`!
  aDiv.addEventListener('click', capture, true)
}

const divs = document.querySelectorAll('div')
 
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation()
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
 
for (const aDiv of divs) {
  aDiv.addEventListener('click', bubble)
}