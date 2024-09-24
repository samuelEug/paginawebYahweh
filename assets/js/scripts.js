function submitForm(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os valores dos campos do formulário
    var nome = document.querySelector('input[name=nome]').value;
    var email = document.querySelector('input[name=email]').value;
    var dataNascimento = document.querySelector('input[name=data]').value;
    var mensagem = document.querySelector('textarea[name=mensagem]').value;

    // Captura a opção selecionada de seguro
    var radiosSeguro = document.getElementsByName("seguro");
    var seguroSelecionado = "";
    for (var i = 0; i < radiosSeguro.length; i++) {
        if (radiosSeguro[i].checked) {
            seguroSelecionado = radiosSeguro[i].value;
            break;
        }
    }

    // Prepara os dados para envio
    var data = {
        to: '',
        subject: 'Novo Formulário Submetido',
        text: `
            Nome: ${nome}
            E-mail: ${email}
            Data de Nascimento: ${dataNascimento}
            Tipo de Seguro: ${seguroSelecionado}
            Mensagem: ${mensagem}
        `
    };

    console.log('Dados a serem enviados para a API:', data);

    // Envia os dados para a API
    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            alert('E-mail enviado com sucesso');
        } else {
            alert('Erro ao enviar o e-mail');
        }
    })
    .catch(error => {
        alert('Erro ao enviar o e-mail:', error);
    });
}