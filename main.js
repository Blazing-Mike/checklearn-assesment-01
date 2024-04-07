import './style.css'


const form = document.getElementById('businessForm');
const applicantEmail =  'adebambomich683@gmail.com'
const formEndpoint = 'https://eodh6njvzgfl22j.m.pipedream.net'



function handleSubmit(event){
  event.preventDefault();

  const formData = new FormData(form);
  const payload = {};

  formData.forEach((value, key) => {
      payload[key] = value;
      payload.applicantName = applicantEmail;
  });

  fetch(formEndpoint, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
  })
  .then(response => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error('Network response was not ok.');
      }
  })
}



form.addEventListener('submit', handleSubmit);