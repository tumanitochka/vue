<template>
    <h1>Контакты</h1>
    <div class="content">
        <p>Номер телефона: <a href="tel:+79933079829">+7 (993) 307-98-29</a> (с <span>понедельника</span> по <span>пятницу</span> с <span>08<sup>30</sup></span> до <span>19<sup>30</sup></span>)</p>
        <p>Почта для связи: <a href="mailto:oleg@nastyle.pro">oleg@nastyle.pro</a></p>
        <form>
            <label for="feedback"><h3>Форма обратной связи:</h3></label>
            <input type="text" name="feedback" id="feedback" placeholder="Имя">
            <input type="email" name="feedback" id="feedback" placeholder="E-mail">
            <textarea name="feedback" id="feedback" cols="30" rows="10" placeholder="Ваше сообщение"></textarea>
            <input type="submit" value="Отправить письмо">
        </form>
    </div>
    <span></span>
</template>
  
<script>
export default {
    data() {
        return {
            text: '',
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
.content {margin-top: 40px;}

span {color:cadetblue;}

a {text-decoration: none;color: brown;}
a:hover {text-decoration: underline;}

form{display: flex;flex-direction: column;gap: 10px;margin-top: 20px;}
input,textarea{padding: 10px;border: solid 1px brown;}
input[type="submit"]{background-color: brown;color:white;cursor: pointer;filter: brightness(.8);&:hover{filter: brightness(1);}}
</style>