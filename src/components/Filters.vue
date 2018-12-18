<template>
     <h1>{{text | global | local-reverse('*')}}</h1><!-- можно исп. цепочки фильтров, они выполняються слева направо -->
</template>

<script>
    export default {
        data(){
            return {
                text: "I am ready to be filtered",
            }
        },
        //локальные фильтры
        filters: {
            localReverse: function(value, joinSymbol=""){ //local-reverse, фильтры могут принимать параметры т.к это обычные js футкции
                console.log('local filter reverse text');
                
                return value.split("").reverse().join(joinSymbol)
            }
        }
    }
</script>