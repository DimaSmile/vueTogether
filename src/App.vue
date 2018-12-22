<template>
<div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <heeader>
        <!-- <div> -->
            <h1>Routing in Vue js!!!</h1>
                <!-- <span>{{ interpolationInSlot }}</span>
                <h2 slot="subtitle">Named slot - first group</h2>
                <h2 slot="subtitle">Named slot2 - first group</h2> -->
            
        <!-- </div> -->
    </heeader>
    <!--<div>
         <singlepagecomponent></singlepagecomponent>
        <singlepagecomponent></singlepagecomponent>
        <singlepagecomponent></singlepagecomponent>
        <ProductItem></ProductItem>
    </div> -->
    <div class="container">
        <router-view></router-view>
        <!-- <ProductsList @viewDetails="viewDetails"></ProductsList> -->
        <!-- <ProductDetails :product="selectedProduct"></ProductDetails> -->
        <!-- <ProductsList></ProductsList>
        <div>
            <span @click="mode = ( mode == 'view' ? 'add': 'view')">
                switch: {{mode}}
            </span> -->
            <keep-alive> <!-- тег keep-alive позволяет сохранять данные(в инпутах и т.д) при переключении между компонентами, т.е компонент не уничтожается(не завершает жизненный цикл)-->
                <!-- <component :is="componentName"></component> -->
            </keep-alive>
            <!-- а так не будут сохраняться-->
                <!-- <component :is="componentName"></component> -->
        <!-- </div> -->
        <!-- <div class="filters">
            <filters-component></filters-component>
        </div> -->
        <!--<ProductDetails></ProductDetails>
        <product-add></product-add> -->
    </div>
</div>
</template>

<script>
// import singlecomponent from './Singlepagecomponent.vue'
import Header from './Header.vue'
// import ProductDetails from './components/ProductDetails.vue'
// import ProductsList from './components/ProductsList.vue'
// import Dynamic from './components/Dynamic.vue'
import Filters from './components/Filters.vue'

export default {
    data(){
        return {
            interpolationInSlot: 'Default slot',
            selectedProduct: {},
            mode: 'view'
        }
    },
    computed:{
        componentName(){
            return this.mode == 'view' ? 'ProductDetails' : 'product-add' // имя компонента который надо загружать динамически
        }
    },
    components: {
        'heeader': Header,
        // 'singlepagecomponent': singlecomponent,
        // ProductDetails,
        // ProductsList,
        // 'product-add': Dynamic,
        'filters-component': Filters

    },
    // methods: {
    //             viewDetails(product){
    //             this.selectedProduct = product;
    //         }
    //     }
    }
</script>

<style>
  /* .container{
    display:flex;
    align-items:flex-start;
  } */

  h2{
      color: blue;
  }
</style>