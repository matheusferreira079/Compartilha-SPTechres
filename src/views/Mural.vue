<template>
  <title>CS | Mural</title>
  <Cabecalho />
  <main class="columns is-gapless is-multiline">
    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarPostagem="salvarPostagem" />
      <div class="lista">
        <Card v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <Box v-if="listaEstaVazia">
          <div class="div__sem-mensagem">
            <span class="text-negado">Nenhuma Postagem Realizada</span>
          </div>
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue';
import Card from '../components/Card.vue';
import IPostagens from '../interfaces/IPostagens'
import Box from '../components/Box.vue';
import Cabecalho from '../components/Cabecalho.vue';

export default defineComponent({
  name: "Mural",
  components: {
    Formulario,
    Card,
    Box,
    Cabecalho
  },
  data() {
    return {
      tarefas: [] as IPostagens[]
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarPostagem(tarefa: IPostagens) {
      this.tarefas.push(tarefa)
    }
  }
});
</script>

<style>
.topo__color {
  background-color: #F2F2F2;
}

.img__logo {
  margin: auto;
  width: 150px;
}

.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

.conteudo {
  background-color: #F2F2F2;
}

.div__sem-mensagem {
  width: 100%;
  text-align: center;
}

.text-negado {
  color: #D0D3D4;
  font-size: 20px;
}
</style>