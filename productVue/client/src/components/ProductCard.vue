<template>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
    <div class="product-card">
        <img src="https://software-expert.ru/wp-content/uploads/2022/10/0bb39554756548aeb19c1837204456e955.jpg">
        <h3>Курс</h3>
        <p>Описание</p>
        <p>100 рублей</p>
        <button>Купить</button>
    </div>
</template>

<script>
    export default {
        props: {
            product: {},
        },
        setup () {
            return {}
        }
    }
</script>

<style scoped>
    .product-card {
        width: max-content;
        height: max-content;
        padding: 10px;
        background-color: #f1f1f1;
        color: black;
        cursor: pointer;
        &:hover {
            -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
            -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
            box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
            transition: all .2s linear;
        }
        & img {
            width: 150px;
        }
        & button {
            width: 100%;
            padding: 5px;
            background-color: brown;
            color: #f1f1f1;
            border: none;
            cursor: pointer;
            &:hover {
                filter: brightness(1.2);
                transition: filter .3s linear;
            }
            &:active {
                filter: brightness(.8);
            }
        }
    }
</style>