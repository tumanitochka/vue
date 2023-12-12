<template>
    <header>
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/product-list">Товары</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>

    <footer>
      <h2>© 2023</h2>
    </footer>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style>

</style>