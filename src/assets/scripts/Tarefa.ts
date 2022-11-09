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

const t1 = new Tarefa("Comprar pão", new Date(2022-11-9));

console.log(t1);