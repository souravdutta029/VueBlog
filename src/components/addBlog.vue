<template>
  <div id="add-blog">
    <div v-if="!submitted">
    <h2>Add New Blog Post</h2>
    <form>
      <label>Blog Title : </label>
      <input type="text" required v-model.lazy="blog.title">
      <label>Blog Content : </label>
      <textarea v-model="blog.content"></textarea>
      
      <div id="checkboxes">
        <label>Entertainment</label>
        <input type="checkbox" value="entertainment" v-model="blog.categories">
        <label>Sports</label>
        <input type="checkbox" value="sports" v-model="blog.categories">
        <label>Health</label>
        <input type="checkbox" value="health" v-model="blog.categories">
        <label>World</label>
        <input type="checkbox" value="world" v-model="blog.categories">
        <label>National</label>
        <input type="checkbox" value="national" v-model="blog.categories">
      </div>

      <label>Author</label>
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author">{{ author }}</option>
      </select>
      <br>
      <button v-on:click.prevent="postSubmit">Add Blog</button>

    </form>
    </div>
    <br> 
    <div v-if="submitted">
      <h4 class="alert-success">Thank you for adding blog post. </h4>
    </div>

    <div id="preview">
      <h3>Preview Blog : </h3>
      <p>Blog Title : {{ blog.title }}</p>
      <p>Blog Content : </p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories : </p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
      </ul>
      <p>Blog Author: {{ blog.author }}</p>
    </div>   
  </div>
</template>

<script>

export default {
  components: {
     
  },
  data(){
    return{
      blog : {
        title   : '', 
        content : '',
        categories : [],
        author : '',
      },
      authors : ['Sourav', 'Priyanka', 'Sagorika', 'Rashmi', 'Gourav', 'Udakar', 'Hirabati'],
      submitted : false,
    }
  },
  methods:{
    postSubmit : function(){
      this.$http.post('https://vueblog-8091d.firebaseio.com/posts.json', this.blog).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  },
}
</script>

<style>
  body{
    margin:0;
  }
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
      margin: 20px auto;
      max-width: 500px;
  }
  label{
      display: block;
      margin: 20px 0 10px;
  }
  input[type="text"], textarea{
      display: block;
      width: 100%;
      padding: 8px;
  }
  #preview{
      padding: 10px 20px;
      border: 1px dotted #ccc;
      margin: 30px 0;
  }
  h3{
      margin-top: 10px;
  }
  #checkboxes input{
    display: inline-block;
    margin-right : 10px;
  }
  #checkboxes label{
    display: inline-block;
    margin-right : 5px;
  }
  #author{
    width: 100%;
  }
</style>
