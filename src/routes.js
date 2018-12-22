import ProductsList from "./components/ProductsList.vue";
import Dynamic from "./components/Dynamic.vue";
import ProductDetails from "./components/ProductDetails.vue";

export const routes = [
    {
        path: "/", // по какому пути 
        component: ProductsList, // будет загружаться компонент,
        name: 'home' //можно именовать компонент и использовать его в аттрибуте to="{name:'home'}"
    },
    {
        path: "/add",
        component: Dynamic
    },
    {
        path: "/detail/:id",
        component: ProductDetails,
        name: 'product-detailes',
        props: {staticText: "some static text"}
    },
    {
        path: "*"
    }
];
