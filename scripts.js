
const ToDoList = {
    data() {
        return {
            listaItems: [],
            itemNovo: {}
        }
    },
    methods: {
        adicionarItem: function() {
            if(this.itemNovo.descricao) {
                this.listaItems.push(this.itemNovo)
                this.itemNovo = {}
            } else {
                alert('preencher o campo de descrição do item')
            }
        },
        alterarFinalizou: function () {
            this.alterarFinalizou = !this.alterarFinalizou
        }
    }
}

Vue.createApp(ToDoList).mount("#app")