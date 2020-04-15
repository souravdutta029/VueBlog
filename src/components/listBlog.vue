<template>
  <div v-theme.column="'narrow'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="Search Blogs">
    <div v-for="blog in filterdBlogs" v-bind:key="blog" class="single-blog">
      <h4 v-rainbow>{{ blog.title | to-upercase }}</h4>     
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
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      // console.log(data);
      this.blogs = data.body.slice(0, 10);
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
    width:100%;
    display: inline-block;
  }  
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>
