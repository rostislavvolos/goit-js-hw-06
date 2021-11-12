const inputForm = document.querySelector('.login-form');


inputForm.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;

if (email.value === "" || password.value === "") {
    return alert("все поля должны быть заполнены");
}

console.log(`Email: ${email.value}, Password: ${password.value}`);
event.currentTarget.reset();

}