// Inicializa o EmailJS com sua Public Key
(function() {
    emailjs.init("u2zI7BD5dUc2lll9i");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do envio

    const formMessage = document.getElementById('form-message');

    emailjs.sendForm('service_j9jb34n', 'template_x082xd7', this)
        .then(function() {
            formMessage.style.display = 'block';
            formMessage.style.color = 'rgb(249, 208, 0)';
            formMessage.textContent = 'Mensagem enviada com sucesso!';
        }, function(error) {
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
            formMessage.textContent = 'Falha ao enviar a mensagem: ' + JSON.stringify(error);
        });

    // Limpa o formulário após o envio
    this.reset();
});