class TarefaView{
    private tabela: HTMLTableElement;

    constructor(){
        this.tabela = document.querySelector("#tabela-de-tarefas")!;
    }

    montar(lista: TarefasLista){
        lista.tarefas.map(tarefa =>{
            const linha = document.createElement('tr');
            const colunaDescricao = document.createElement('td');
            
            const colunaData = document.createElement('td');
            const colunaConcluida = document.createElement('td');
        })
    }
}