console.log(`connected`);

let namePower = document.getElementById(`name-power`);
let nameInput = document.getElementById(`name-input`);
let powerInput = document.getElementById(`power-input`);
let getAll = document.getElementById(`get-all`);
let forChars = document.getElementById(`for-chars`);
let deleteForm = document.getElementById(`delete-form`);
let deleteButton = document.getElementById(`delete-button`);
let deleteDB = document.getElementById(`delete-db`);

const baseURL = `http://localhost:4000`;

function clearChars() {
  forChars.innerHTML = ``;
}

const getAllChars = () => {
  clearChars();
  axios.get(`${baseURL}/api/character`).then((res) => {
    for (i = 0; i < res.data.length; i++) {
      let charCard = document.createElement(`div`);
      charCard.textContent =
        `${res.data[i].name}` + ` ` + `${res.data[i].power}`;
      forChars.appendChild(charCard);
    }
  });
};

getAll.addEventListener(`click`, getAllChars);

const createNewChar = (event) => {
  event.preventDefault();

  let body = {
    name: nameInput.value,
    power: powerInput.value,
  };

  axios.post(`${baseURL}/api/character`, body).then((res) => {
    console.log(res.data);
  });
};

namePower.addEventListener(`submit`, createNewChar);

function deleteChar(event) {
    event.preventDefault()
    id = deleteDB.value
  axios.delete(`${baseURL}/api/character/${id}`).then((res) => {
    res.data;
  });
}

deleteForm.addEventListener(`submit`, deleteChar);
