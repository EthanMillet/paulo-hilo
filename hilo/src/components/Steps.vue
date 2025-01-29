<template>
    <div class="steps">
        <div :class="`step ${getClass(index)}`" v-for="index in 6" :key="index">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        step: {
            type: Number,
            required: true
        }
    },

    methods: {
        getClass(index) {
            return ((index === this.step)
                ? 'active'
                : (index < this.step)
                    ? 'completed' : '');
        }
    }
}
</script>
<style scoped>
.steps {
    width: 100%;
    height: 3px;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(6, 1fr);
}
.step {
    height: 100%;
    border-radius: 5px;
    background: #F5F5F5;
}
.active {
    background-color: var(--vt-c-text-primary);
}
.completed {
    background-color: var(--vt-c-text-secondary);
}
</style>