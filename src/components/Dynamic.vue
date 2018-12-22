<template>
        <div class="flex col-sm-5">
            <form action="">
                <div class="form-group">
                <label for="">get params - {{$route.query.text}}</label><!-- $route.query - берет из url get параметры -->
                <input type="text" name="" id="title" class="form-control" placeholder="" aria-describedby="helpId" v-model="product.title">
                </div>
                <div class="form-group">
                <label for="">Price</label>
                <input type="text" name="" id="price" class="form-control" placeholder="" aria-describedby="helpId" v-model="product.price">
                </div>
                <div class="form-group">
                <label for="">Quantity</label>
                <input type="text" name="" id="qt" class="form-control" placeholder="" aria-describedby="helpId" v-model="product.qt">
                </div>
                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" @click.prevent="addProduct">Add Product</button>
            </form>
        </div>
</template>

<script>
    import ProductService from '../ProductService.js';

    export default {
        data(){
            return{
                product: {},
            }
        },
        methods: {
            addProduct(){
                ProductService.addProduct(this.product.title, this.product.price, this.product.qt);
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

    .flex{
        border: 1px solid green;
        border-radius: 5px;
        padding: 5px;
        /* display: flex;
        flex-direction: column;
        align-items: center; */
        /* margin-bottom: 15px; */
        /* display: flex;
        flex-direction: column;
        justify-content: space-around; */
        /* margin-bottom: 15px; */

    }

    /* .form-group{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    } */
    /* .flex form{
        padding: 20px;
        min-width: 500px;
    } */
/* 
    .flex .form-group{
        margin: 10px;
    }

    .flex label{
        min-width: 1я
        px;
    } */

</style>