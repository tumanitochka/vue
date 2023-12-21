<template>
    <div class="product-card">
        <h3>{{ product.attributes.title }}</h3>
        <img v-if="product.attributes.img.data[0].attributes.url"
            :src="baseURL + product.attributes.img.data[0].attributes.url">
        
        <p>{{ product.attributes.description }}</p>
        <p>{{ product.attributes.price }} рублей <input type="submit" value="../"></p>
        <p><input type="number" value="0"><input type="submit" value="Сохранить"></p>
        <button>В корзину</button>
    </div>
</template>

<script>
export default {
    props: {
        product: {},
    },
    data() {
        return {
            baseURL: 'http://localhost:1337',

        }
    }
}
</script>

<style scoped>
.product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 260px;
    height: 320px;
    padding: 10px;
    background-color: whitesmoke;
    color: black;
    cursor: pointer;

    &:hover {
        -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        transition: all .1s linear;
    }

    & img {height: 40%;width: 100%;object-fit: cover;}

    & button {
        width: 100%;
        padding: 10px 0;
        background-color: brown;
        color: #f1f1f1;
        border: none;
        cursor: pointer;
        padding: 10px 25px;
        &:hover {
            filter: brightness(1.2);
            transition: filter .3s linear;
        }

        &:active {
            filter: brightness(.8);
        }
    }
}

input{padding: 5px;border: none;}
input[type="submit"]{
    background-color: aliceblue;
    color: brown;
    border: none;
    padding: 5px;
    cursor: pointer;
    transition:all .1s linear;
    &:hover{background-color: brown;color: white;}
    &:active{filter: brightness(.8);}
}
</style>