
const ToDoList = {
    data() {
        return {
            listaItems: [],
            itemNovo: {}
        }
    },
    methods: {
        adicionarItem: function() {
            if(this.itemNovo.descricao && this.listaItems) {
                this.listaItems.push(this.itemNovo)
                this.itemNovo = {}
            } else {
                alert('preencher o campo de descrição do item')
            }
            this.salvarListaItems()
        },
        limparItems: function () {
            this.listaItems = []
            this.salvarListaItems()
        },
        alterarFinalizou: function () {
            this.alterarFinalizou = !this.alterarFinalizou
        },
        salvarListaItems() {
            localStorage.setItem("tarefas", JSON.stringify(this.listaItems))
        }
    },
    created() {
        this.listaItems = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : []
    }
}

Vue.createApp(ToDoList).mount("#app")