<template>
    <div>
        {{abc}}
    </div>
</template>

<script>
    export default {
        props:{
            abc:{
                type:String,
                default:'abc'
            }
        }
    }
</script>

<style scoped>

</style>