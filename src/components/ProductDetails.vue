<template>
    <div class="product">
        <h2>Product Detail</h2>
        <form>
        <div>
            <label for="title">Title</label>
            <span>{{product.title}}</span>
        </div>
        <div>
            <label for="price">Price</label>
            <span>${{product.price}}</span>
        </div>
        <div>
            <label for="qt">Quantity</label>
            <span>{{product.qt}}</span>
        </div>
        </form>
        {{counter}}
    </div>
</template>

<script>
    import ProductService from '../ProductService.js';

    export default {  
        // props: {
        //     product: {
        //         type: Object,
        //         required: true
        //     }
        // },
        data(){
            return {
                counter: 1,
                product: {}
            }
        },
        beforeCreate() { //хук сробатывающий перед инициализацией объекта
            console.log('before create');
                
        },
        created() { //хук сробатывающий после инициализации объекта исп для получения данных с других сайтов(fetch) и т.д
            console.log('created');
            setInterval(() => {this.counter++}, 1000)
            ProductService.$on("viewDetails", (selectedProduct) => {
                this.product = selectedProduct
            });
        },

        // самая первая вставка в DOM
        beforeMount() { //подготовка перед вставкой в DOM
            console.log('beforeMount');
        },
        mounted() { //Вставка в DOM компонента
            console.log('mounted');
        },
        beforeUpdate() { //перерендеринг компонента(часть компонента)
            console.log(this.counter);
        },
        updated() {
            console.log("updated");
        },
        beforeDestroy() {//перед уничтожением компонента
            this.leakyReference = null;
            console.log("beforeDestroy");
        },
        destroyed() {//после уничтожения компонента
            console.log("destroyed"); 
        },

        //Хуки срабатывающыие когда компонент обернут в тег <keep-alive>
        activated() {//срабатывает при активации компонента
            console.log("activated"); 
        },
        deactivated() {//срабатывает при деактивации компонента
            console.log("deactivated"); 
        },
    }
</script>

<style scoped>
    .product {
        width: 500px;
        border: 1px solid red;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;  
    }
</style>