<script>
  document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      var formData = new FormData(form);
      var object = {};
      formData.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);

      fetch('https://api.github.com/repos/vasilecebotaru/ninacebotaru.github.ioo/issues', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/vnd.github.v3+json"
        },
        body: JSON.stringify({
          "title": "New form submission",
          "body": json
        })
      }).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong with the GitHub API request.');
        }
      }).then(data => {
        console.log(data);
        alert('Thank you for your submission!');
      }).catch((error) => {
        console.error('Error:', error);
        alert('There was an error with the submission.');
      });
    });
  });
</script>
