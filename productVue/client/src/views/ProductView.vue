<template>
  <h1>Товары</h1>
  <div class="catalog">
    <ProductCard />
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
            text: '',
        }
    },
    data () {
        return {
            product: [],
        }
    },  
    methods: {

    },
    async beforeMount(){
        const data = await fetch('http://localhost:1337/api/products?populate=*')
        const json = await data.json()
        this.products = json.date;
        console.log(this.products?.data)
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
</style>