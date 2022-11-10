class TarefaView {
    private tabela: HTMLTableElement;

    constructor() {
        this.tabela = document.querySelector("#tabela-de-tarefas")!;
    }

    montar(lista: TarefasLista) {
        lista.tarefas.map(tarefa => {
            const linha = document.createElement('tr');
            
            const colunaDescricao = document.createElement('td');
            colunaDescricao.innerHTML = tarefa.descricao;
            linha.appendChild(colunaDescricao);

            // const colunaData = document.createElement('td');
            // colunaData.innerHTML = tarefa.data;
            // linha.appendChild(colunaData);

            // const colunaConcluida = document.createElement('td');

            this.tabela.appendChild(linha);

        })
    }
}