<template>
  <h1>Главная страница</h1>
  <div class="content">
    <h3>Здесь пока пусто</h3>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: false,
        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  color: brown;
}
.content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
}
</style>