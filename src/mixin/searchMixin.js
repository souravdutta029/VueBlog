export default{
	computed : {
		filterdBlogs : function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
	}
},
}
