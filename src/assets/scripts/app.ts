const t1 = new Tarefa("Fazer compras", new Date(2022, 10, 12));
const t2 = new Tarefa("Estudar para a prova", new Date(2022, 10, 10));
const t3 = new Tarefa("Pagar conta de energia", new Date(2022, 10, 20));

const lista = new TarefasLista();
lista.adicionar(t1);
lista.adicionar(t2);
lista.adicionar(t3);
