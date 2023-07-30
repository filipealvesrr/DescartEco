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

function validateForm() {
    const checkboxes = document.querySelectorAll('input[name="itens"]:checked')
    if(checkboxes.length === 0) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
        return false;
    }

    return true;
}