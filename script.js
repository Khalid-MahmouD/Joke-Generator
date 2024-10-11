document.addEventListener('DOMContentLoaded', generateJoke);
document.getElementById('joke-btn').addEventListener('click', generateJoke);

function generateJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById('joke').innerHTML = JSON.parse(
        this.responseText
      ).value;
    } else {
      document.getElementById('joke').innerHTML = 'Failed to load joke.';
    }
  };
  xhr.send();
}
