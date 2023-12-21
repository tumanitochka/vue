<template>
  <h1>Услуги</h1>
  <div class="catalog">
    <ProductCard v-for="item in products" :product="item" :key="item.id" />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
export default {
    components:{
        ProductCard: ProductCard
    },
    data() {
        return {
            products: [],
        }
    },
    methods: {

    },
    async beforeMount(){
        const data = await fetch('http://localhost:1337/api/products?populate=*')
        const js = await data.json()
        this.products = js.data
    }
}
</script>

<style scoped>
    h1 {
    display: flex;
    justify-content: center;
    color: brown;
    }
    .catalog {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin: 40px auto;
    }
</style>