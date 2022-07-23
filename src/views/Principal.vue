<template>
  <title>CS | Principal</title>
  <Cabecalho />
  <main class="columns is-gapless is-multiline">
    <div class="column is-three-quarter conteudo">
      <div class="lista">
        <div class="columns box has-text-weight-bold">
          <p>Compartilha Sptechers foi desenvolvida para que os estudantes da SPTECH compartilhem seus projetos/ideias
            com a comunidade SPTECH, por isso o nome "Compartilha Sptechers", sacou!? Compartilhe, mostre e inspire
            outros alunos na busca pelo conhecimento nesse imenso mundo que é a tecnologia, Compartilha Sptecher!!!</p>
        </div>
        <div class="columns box has-text-weight-bold">
          <h1 class="title">Caso ainda seja Sptecher Students, selecione o seu semestre:</h1>
        </div>
        <div class="columns box has-text-weight-bold">
          <div class="div__mensagem semestres" v-for="(semestre, index) in semestres" :key="index" :semestre="semestre"
            @click.prevent="entrarSemestre(semestres[index])">
            <span class="text__semestres">{{ semestre }}</span>
          </div>
        </div>
        <div class="columns box has-text-weight-bold div__ou">
          <h1 class="title"><span class="span__sigla-maior">&lt;</span> Ou <span class="span__sigla-menor">/&gt;</span>
          </h1>
        </div>
        <div class="columns box has-text-weight-bold">
          <h1 class="title">Caso seja um Ex Sptecher, selecione o seu curso:</h1>
        </div>
        <div class="columns box has-text-weight-bold">
          <div class="div__mensagem cursos" v-for="(curso, index) in cursos" :key="index" :curso="curso"
            @click.prevent="entrarCurso(cursos[index])">
            <span class="text__semestres">{{ curso }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cabecalho from '../components/Cabecalho.vue';

export default defineComponent({
  name: "Principal",
  components: {
    Cabecalho
  },
  data() {
    return {
      semestres: ['1º Semestre', '2º Semestre', '3º Semestre', '4º Semestre'],
      cursos: ['ADS', 'CCO', 'SIS']
    }
  },
  methods: {
    entrarSemestre(semestre: string) {
      console.log(semestre);
      this.$router.push({ name: 'MuralSemestre' })
    },
    entrarCurso(curso: string) {
      console.log(curso)
      this.$router.push({ name: 'MuralCurso' })
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

.conteudo {
  background-color: #F2F2F2;
}

.title {
  margin: auto;
  font-weight: bolder;
}

.columns {
  justify-content: space-around;
}

.div__mensagem {
  text-align: center;
  width: 20vw;
  margin: 20px;
  border-radius: 15px;
  padding: 2%;
  cursor: pointer;
}

.semestres {
  background-color: #ED145B;
}

.cursos {
  background-color: #63B1BC;
}

.text__semestres {
  color: #D0D3D4;
  font-size: 30px;
}

.div__ou {
  width: 15%;
  padding: 2%;
}

.span__sigla-maior {
  color: #63B1BC;
}

.span__sigla-menor {
  color: #ED145B;
}
</style>