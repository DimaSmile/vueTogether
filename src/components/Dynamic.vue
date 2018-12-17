<template>
        <div class="flex">
            <form action="">
                <div class="form-group">
                <label for="">Title</label>
                <input type="text" name="" id="title" class="form-control" placeholder="" aria-describedby="helpId" v-model="product.title">
                <small id="helpId" class="text-muted">Help text</small>
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
                ProductService.addProduct(this.product.title, this.product.price, this.product.qt)
            }
        }
    }
</script>

<style scoped>
    .flex{
        border: 1px solid green;
        border-radius: 5px;
        /* display: flex;
        flex-direction: column;
        justify-content: space-around; */

    }

</style>