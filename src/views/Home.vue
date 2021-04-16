<template>
  <div class="home">
    <div class="home-header">
      <p class="title is-1">Elijah Lavoie</p>
      <p class="subtitle is-3">Software Developer - Tech Enthusiast - Coffee Aficionado  - Nerd Hobbyist</p>
    </div>
    <hr class="section-divider">
    <div class="simple-nav">
      <ul class="nav-links">
        <li class="link is-size-5">
          <a href="#about">About Me</a>
        </li> 
        <li class="link is-size-5">
          <a href="#education">My Education</a>
        </li> 
        <li class="link is-size-5">
          <a href="#home-projects">My Work </a>
        </li> 
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
};
</script>

<style>
.home-header{
  margin-top: 3.5em;
}
.section-divider{
  border-bottom: 2.8px solid red;
  margin-left: 15%;
  margin-right: 15%;
}

.nav-links{
  display: flex;
  justify-content: center;
}

.link {
  margin-left: 1em;
  margin-right: 1em;
}
</style>