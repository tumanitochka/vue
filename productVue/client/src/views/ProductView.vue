<template>
  <h1>Товары</h1>
  <div class="catalog">
    <ProductCard v-for="item in products" :product="item" :key="item.id" />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
    components:{
        ProductCard: ProductCard,
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
        const json = await data.json()
        this.products = json.date
    }
}
</script>

<style scoped>
    .catalog {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin: 40px auto;
    }
    main{
        color: #000;
    }
</style>