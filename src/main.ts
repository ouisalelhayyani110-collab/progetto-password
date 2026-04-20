import './style.css'

const psw = 16598;
const divApp = document.getElementById("app");


const message = document.createElement("p");
message.id = "message";
divApp?.appendChild(message);

createUserInputPassword();

function createUserInputPassword() {
  const button = document.createElement("button");
  button.textContent = "LOGIN";

  const title = document.createElement("h1");
  title.textContent = "PASSWORD";

  const inputPassword = document.createElement("input");
  inputPassword.type = "password";
  inputPassword.id = "password";
  inputPassword.placeholder = "Inserisci la password";

  divApp?.appendChild(title);
  divApp?.appendChild(inputPassword);
  divApp?.appendChild(button);

  
  button.addEventListener("click", () => {
    const value = inputPassword.value;

    // controllo numeri
    if (isNaN(Number(value))) {
      message.textContent = "Inserisci solo numeri!";
      message.style.color = "red";
      return;
    }

    if (value.length !== 5) {
      message.textContent = "Inserisci esattamente 5 numeri";
      message.style.color = "red";
      return;
    }

    verifyPswCorrect(value);
  });
}

function verifyPswCorrect(value: string) {
  const pswString = psw.toString();
  let count = 0;

  for (let i = 0; i < 5; i++) {
    if (value[i] === pswString[i]) {
      count++;
    }
  }

  if (value === pswString) {
    message.textContent = "Password corretta ";
    message.style.color = "green";
  } else {
    message.textContent = `Password errata - Numeri corretti: ${count}`;
    message.style.color = "red";
  }
}