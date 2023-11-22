const scriptURL = 'https://script.google.com/macros/s/AKfycbyl5Z9_lCtSFUpxZ7qQ83dGm43q6zP8XyTSLrQNYBcKG0fmV45_jAr9cwtj3LPn0IQ/exec'
const form = document.forms ['submit-to-google-sheet'];
const msg=document.querySelector("#msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{ msg.innerHTML="Our stock is saved!"
    setTimeout(function(){msg.innerHTML=""},5000)
    form.reset()}
    )
    .catch(error => console.error('Error!', error.message))
})