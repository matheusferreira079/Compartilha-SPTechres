<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <button class="button" @click="salvar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-save"></i>
            </span>
            <span>Salvar</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ButtonSave",
    emits: ['aoFinalizar'],
    components: {
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        };
    },
    methods: {
        salvar() {
            this.$emit('aoFinalizar')
        },
    }
});
</script>

<style scoped>
button {
    background: #ED145B;
    color: #D0D3D4;
    font-weight: bolder;
}
</style>