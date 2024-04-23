<template>
  <nav class="navbar navbar-expand-sm navbar-light" id="appNav">
    <a class="navbar-brand" href="#">
      <img :src="LogoImage" width="30" height="30" alt="">
    </a>
    <button class="btn btn-outline-primary navbar-toggler" type="button" style="color: #fff;" data-toggle="collapse"
      data-target="#appMainNav" @click="navtoggler" aria-controls="appMainNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggle"
        viewBox="0 0 16 16">
        <path :d="icontoggle" />
      </svg>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="appMainNav">
      <ul class="navbar-nav">
        <li class="nav-item dropdown active">
          <router-link class="nav-link" attrId="index" to="/">主页</router-link>
          <hr class="nav_hr d-none" style="border: 2px solid #65aad5;margin: 0;" />
        </li>
        <li class="nav-item">
          <router-link class="nav-link" attrId="about" to="About">关于</router-link>
          <hr class="nav_hr d-none" style="border: 2px solid #65aad5;margin: 0;" />
        </li>
      </ul>
    </div>
  </nav>

  <hr id="rightNavHr" />
  


  <button disabled @click="backTop()" id="backbtn">
    <svg xmlns="http://www.w3.org/2000/svg" style="width: 34px;height: 34px;" fill="currentColor"
      class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
      <path
        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
    </svg>
    <span style="margin-left: 10px;" id="backTopName"></span>
  </button>
  <router-view />
</template>

<script>
import $ from 'jquery'


$(() => {


  $(window).scroll((e) => {
    var scrollTop = $(window).scrollTop()
    if (scrollTop < 8) {
      $("#backbtn").attr("disabled", "true")
      $("#backbtn").css("opacity", "-=0.1")
    } else {
      $("#backbtn").removeAttr("disabled", "true")
      $("#backbtn").css("opacity", "+=0.1")
    }
    $("#rightNavHr").css("width", (scrollTop / ($("body").height() - $(window).height())) * 100 + "vh")
  })


})
export default {
  data(){
    return {
      icontoggle: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
      LogoImage: require("/src/assets/logo.jpg"),
    }
  },
  methods: {
    backTop() {
      $('html, body').animate({
        scrollTop: $("#app").offset().top
      }, 200);
    },
    navtoggler(){
      if($(".appMainNavBackGround").length == 0){
          $("#appMainNav").addClass("appMainNavBackGround")
      }else{
          $("#appMainNav").removeClass("appMainNavBackGround")
      }
    }
  }
}



</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

#rightNavHr {
  position: fixed;
  background: red;
  border-radius: 5px;
  right: 0;
  top: 40px;
  width: 0vh;
  height: 8px;
  transform: rotate(-90deg);
  transform-origin: right;
  z-index: 1000;
}

#backbtn {
  opacity: 1;
  padding: 16px;
  position: fixed;
  right: 39px;
  bottom: -37px;
  font-weight: 700;
  background-color: #65aad5;
  transform: rotate(90deg);
  transform-origin: right;
  z-index: 999;
}

#appNav{
  padding: 0.5rem 1rem;
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: rgba(0, 0, 0, 0.8) !important;
  animation: none;
}


</style>
