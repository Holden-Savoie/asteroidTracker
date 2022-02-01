const dateMin = document.getElementById('date-min');
const dateMax = document.getElementById('date-max');
const form = document.querySelector('form');
const textCard = document.querySelector('.display-data');
const rev = document.querySelector('#rev');

const postData = async (minDate, maxDate) => {
    const response = await fetch('http://localhost:3000/datePost', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ minDate, maxDate }),
    });
    const data = await response.json();
    return data;
};

const getName = (asteroid) => {
    let rockName = [];
    asteroid.data.forEach(element => {
        rockName.push(element[11] + " |/\\| " + element[0] + " |/\\| " + element[3])
    });
    console.log(rockName);
    return rockName;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const minDate = dateMin.value.trim();
    const maxDate = dateMax.value.trim();
    textCard.innerHTML = "";
    rev.style.display = "block";
    postData(minDate, maxDate)
        .then(
            (data) => {
                console.log(data)
                let spot = `<h2>Asteroid</h2>`;
                getName(data).forEach(element => {
                    spot += `<h3>${element}</h3>`;
                });
                rev.style.display = "none";
                textCard.innerHTML = spot;
            })
        .catch((err) => console.log(err));
})