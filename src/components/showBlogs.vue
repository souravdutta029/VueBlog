<template>
  <div v-theme.column="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search Blogs">
    <div v-for="blog in filterdBlogs" v-bind:key="blog" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h4 v-rainbow>{{ blog.title | to-upercase }}</h4></router-link>
      <article>{{ blog.content | snippet }}</article>     
    </div>    
  </div>
</template>

<script>
import searchMixin from '../mixin/searchMixin'

export default {
  components: {
    
  },
  data(){
    return{
      blogs : [],
      search:'',
    }
  },
  methods:{

  },
  created(){
    this.$http.get('https://vueblog-8091d.firebaseio.com/posts.json').then(function(data){
      return (data.json());
    }).then(function(data){
      var blogArray = [];
      for(let key in data){
        data[key].id = key
        blogArray.push(data[key]);
      }
      this.blogs = blogArray;
    });
  },
  computed:{
    
  },
  filters : {
    toUpercase(value){
      return value.toUpperCase();
    }
  },
  directives:{
    'rainbow' : {
      bind(el){
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin],
}
</script>
<style>
  #show-blogs{
    max-width: 960px;
    margin: 0 auto;
  }  
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>
