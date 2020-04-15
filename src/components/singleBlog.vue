<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p><strong>Author: {{ blog.author }}</strong></p>
        <ul>
            <li v-for="category in blog.categories" v-bind:key="category">Category : {{ category }}</li>
        </ul>
    </div>
</template>

<script>
// Imports
// import searchMixin from '../mixins/searchMixin';
export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('https://vueblog-8091d.firebaseio.com/posts/' + this.id +'.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>