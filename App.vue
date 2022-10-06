<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>      
  this above code implements the Helloworld.vue file-->
  <div id="app">
    <main>
      <div>
        <nav>
          <ul>
            
          </ul>
        </nav>
      </div>
      <div class = "search-box">
        <input type="text" class="search-bar" placeholder="Search..."/>
      </div>
      
    </main>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//the above code imports the component Helloworld.vue

export default {
  name: 'App',
  components: {
    //HelloWorld
    //this is the import for the helloworld component
  }
}
</script>

<style>
  /*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: "montserrant", sans-serif;
}
#app{
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
main{
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,.25),rgba(0,0,0,.75));
}
.search-box{
  width: 100%;
  margin-bottom: 30px;
}
.search-box .search-box{
  display:black;
  width:100%;
  padding: 15px;
  color: #313131;
  font-size:20px;
  
  appearance: none;
  border:none;
  outline: none;
  background: none; 
  
  background-color: rgba(255,255,255,0);

}

</style>
