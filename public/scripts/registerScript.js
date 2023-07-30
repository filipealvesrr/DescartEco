// const modalOverlay = document.querySelector('.modal-overlay');
// const buttonLink = document.getElementById('submitBtn');

// buttonLink.addEventListener('click', function(event) {
//     event.preventDefault(); // Evitar o envio padrão do formulário
//     modalOverlay.classList.add('active');

//     Swal.fire({
//         title: 'Cadastro realizado!',
//         text: 'Pesquise seu ponto de coleta em Home',
//         icon: 'success',
//         confirmButtonText: 'Ok',
//         customClass: {
//             popup: 'sweet-style',
//         }
//     }).then((result) => {
//         if (result.isConfirmed) {
//             // Confirmação recebida, enviar o formulário
//             document.getElementById("myForm").submit();
//         } else {
//             document.getElementById("myForm").submit();
//         }
//     });
// });

// Configuração do Whatsapp

const telefoneInput = document.getElementById('whats');

telefoneInput.addEventListener('input', function(event) {
    const input = event.target;
    const inputValue = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const formattedValue = formatarTelefone(inputValue);
    input.value = formattedValue;
});

function formatarTelefone(telefone) {
    if (telefone.length > 11) {
        telefone = telefone.slice(0, 11);
      }
    const padraoTelefone = /^(\d{2})(\d{5})(\d{4})$/;
    return telefone.replace(padraoTelefone, '($1) $2-$3');
}