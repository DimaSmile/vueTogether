<template>
    <div>
        <!-- <ProductItem v-for="(product, i) in products" :key="product.id" 
        :product="product" :index="(i+1)" @viewDetails="viewDetails"></ProductItem> -->
        <!-- <ProductItem v-for="(product, i) in products" :key="product.id" 
        :product="product" :index="(i+1)" :viewDetails="viewDetails"></ProductItem> -->
        <ProductItem v-for="(product, i) in products" :key="product.id" 
        :product="product" :index="(i+1)" ></ProductItem>
    </div>
</template>
<script>
    import ProductItem from './ProductItem.vue';
    import ProductService from '../ProductService.js';
    // import _ from 'lodash';

    export default {
        data(){
            return{
                products: []
            }
        },
        components: {
            ProductItem
        },
        // methods:{

        // }
        created() {
            this.products = ProductService.products
        },
    }
</script>