const modalOverlay = document.querySelector('.modal-overlay');
const buttonLink = document.getElementById('submitBtn');

buttonLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário
    modalOverlay.classList.add('active');

    Swal.fire({
        title: 'Cadastro realizado!',
        text: 'Pesquise seu ponto de coleta em Home',
        icon: 'success',
        confirmButtonText: 'Ok',
    }).then((result) => {
        if (result.isConfirmed) {
            // Confirmação recebida, enviar o formulário
            document.getElementById("myForm").submit();
        }
    });
});
