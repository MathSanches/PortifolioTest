// Este arquivo pode ser usado para adicionar funcionalidades JavaScript personalizadas

// Exemplo de script jQuery para interações adicionais
$(document).ready(function(){
    // Adicione aqui suas interações JavaScript
});

const darkModeButton = document.getElementById('dark-mode-button');
        const body = document.body;

        darkModeButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                darkModeButton.textContent = 'Modo Claro';
            } else {
                darkModeButton.textContent = 'Modo Escuro';
            }
        });