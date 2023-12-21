<template>
  <header>
    <RouterLink to="/">Old school</RouterLink>
    <nav>
      <RouterLink to="/info">О школе</RouterLink>
      <RouterLink to="/product-list">Услуги</RouterLink>
      <RouterLink to="/contact">Контакты</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>

  <footer>
    <h2>© 2023</h2>
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/info">О школе</RouterLink>
      <RouterLink to="/product-list">Услуги</RouterLink>
      <RouterLink to="/contact">Контакты</RouterLink>
    </nav>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
header,
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
  height: 80px;
  padding: 0 20px;
  background-color: brown;
}

main {
  height: calc(100% - 180px);
  width: 1280px;
  margin: 10px auto;
  color: black;
}

nav {
  display: flex;
  gap: 10px;
}

a {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 15px;
    border-radius: 10px;
    color: white;
    &:hover {
      background-color: whitesmoke;
      color: brown;
    }
  }
</style>