<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-2" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Título do Projeto" v-model="titulo" />
            </div>
            <div class="column is-7" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Descrição do Projeto" v-model="descricao" />
            </div>
            <div class="column is-2" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Link para GitHub" v-model="github" />
            </div>
            <div class="column">
                <ButtonSave @aoFinalizar="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonSave from "./ButtonSave.vue";
import Swal from 'sweetalert2';

export default defineComponent({
    name: "Formulario",
    emits: ['aoSalvarPostagem'],
    components: {
        ButtonSave
    },
    data() {
        return {
            titulo: '',
            descricao: '',
            github: ''
        }
    },
    methods: {
        finalizarTarefa(): void {
            if (this.titulo === '' || this.descricao === '' || this.github === '') {
                Swal.fire({
                    title: "Preencha todos os campos!!!",
                    icon: 'error',
                    iconColor: 'white',
                    toast: true,
                    position: "bottom-right",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    customClass: {
                        popup: 'colored-toast'
                    },
                })
            } else {
                this.$emit('aoSalvarPostagem', {
                    titulo: this.titulo,
                    descricao: this.descricao,
                    github: this.github
                })
                this.titulo = ''
                this.descricao = ''
                this.github = ''
                Swal.fire({
                    title: "Projeto Cadastrado!!!",
                    icon: 'success',
                    iconColor: 'white',
                    toast: true,
                    position: "bottom-right",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    customClass: {
                        popup: 'colored-toast'
                    }
                });
            }
        }
    }
});
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}

.box {
    width: 95%;
    margin: auto;
}
</style>