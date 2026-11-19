function deletarDados() {
    var cpf = document.getElementById('identificadorCPF').value

    fetch('/usuarios')
        .then(response => response.json())
        .then(data => {
            
            const pessoa = data.find(pessoa => pessoa.cpf === cpf)

            if (pessoa) {
                
                fetch(`/usuarios/${pessoa.id}`, {
                    method: 'DELETE'
                })
                .then(() => alert('Pessoa deletada com sucesso!'))
            } else {
                alert('CPF não encontrado.')
            }
        })
}
