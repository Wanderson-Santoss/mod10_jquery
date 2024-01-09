$(document).ready(function() {
    // Adiciona tarefa ao formulário
    $('#formTarefas').submit(function(e) {
        e.preventDefault();
        const taskName = $('#tarefaAfazer').val();
        $('ul').append('<li>' + taskName + '</li>');
        $('#tarefaAfazer').val('');
    });
    
    // Adiciona efeito ao clicar na tarefa
    $('ul').on('click', 'li', function() {
    $(this).toggleClass('colunasLinhas linhaCorte');
    });
});
    