<template>
  <div id="header">
    <div class="header">
      <h2 class="pointer">to do it</h2>
      <div class="header-right">
        <p @click="$router.push('/')" class="pointer">Logout</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header{
  height:70px;
  background-color: white;
  margin-bottom: 50px;
}
.header{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 70px;
  margin: 0 60px;
  font-weight: 500;
}
.header-right{
  display: flex;
}

@media screen and (max-width:768px){
.header{
  margin: 0 30px;
}
}
</style>