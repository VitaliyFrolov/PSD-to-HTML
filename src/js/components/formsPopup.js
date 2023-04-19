window.addEventListener('DOMContentLoaded', () => {

  const forms = document.querySelector('.popup__form input');

  function postData() {
    forms.addEventListener('submite', (e) => {
      e.preventDefault();

      const request = new XMLHttpRequest();
      request.open('POST', 'mail.php');

      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(forms);

      console.log('я работаю')

      const object = {};
      formData.forEach(function(value, key) {
        object[key] = value;
      });

      const json = JSON.stringify(object);

      request.send(json);

      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
        }
      });
    });
  };

  postData();
});
