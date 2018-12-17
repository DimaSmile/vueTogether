<template>
    <div>
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="subtitle"></slot>
        </div>
        <div>
            <slot name="copyright">Dimas copyright - second group slot</slot><!-- default value in slot -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped >/* scoped - дает применять стили только к этому компоненту*/
    div {
        border: 1px solid red;
        text-align: center;
    }

    h2{
        color: green;
    }
</style>