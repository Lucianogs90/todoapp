class Tarefa{
    private descricao: string;
    private data: Date;
    private concluida: boolean;

    constructor(descricao: string, data: Date){
        this.descricao = descricao;
        this.data = data;
        this.concluida = false;
    }
}
