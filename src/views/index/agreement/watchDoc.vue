<template>
    <div>
        <iframe :src='url' width='100%' height='1000px' frameborder='1'>
            </iframe>
    </div>
</template>

<script>
    export default {
        created(){
            console.log(this.$route.query.url)
           this.url=`https://view.officeapps.live.com/op/view.aspx?src=${this.$route.query.url}`
        },
        data() {
            return {
                url:'',
            }
        },
    }
</script>

<style scoped>

</style>