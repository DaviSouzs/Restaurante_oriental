const formulario = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const checkbox = document.getElementById('termos');

/*function validarEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}*/

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value();

    if (!email) {
        alert('Por favor, preencha o campo de e-mail.');
        return;
    }
 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    if (!checkbox.checked) {
        checkbox.style.backgroundColor = 'red';
        alert('Você precisa aceitar os termos de uso.');
        return;
    }

    alert(`E-mail cadastrado: ${email}`);
});
