<template>
  <title>CS | Mural</title>
  <header>
    <nav class="navbar has-shadow topo__color">
      <img class="img__logo" src="../assets/logo.png" alt="">
    </nav>
  </header>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
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

export default defineComponent({
  name: "Mural",
  components: {
    Formulario,
    Card,
    Box
  },
  data() {
    return {
      tarefas: [] as IPostagens[],
      modoEscuroAtivo: false
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
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
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

main.modo-escuro {
  --bg-primario: #1F2A44;
  --texto-primario: #fff;
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