<template>
    <div class="product-card">
        <!-- <img src="${baseURL} + product.attributes.img.data.attributes.url"> -->
        <h3>{{ product.attributes.title }}</h3>
        <p>{{ product.attributes.description }}</p>
        <p>{{ product.attributes.price }}</p>
        <button>Купить</button>
    </div>
    <!-- <div class="product-card">
        <img src="${baseURL} + product.attributes.img.data.attributes.url">
        <h3>Заголовок</h3>
        <p>Описание</p>
        <p>2000$</p>
        <button>Купить</button>
    </div> -->
</template>

<script>
    export default {
        props: {
            product: {},
        },
        data () {
            return {
                baseURL: 'http://localhost:1337',
            }
        }
    }
</script>

<style>
    
</style>