<template>
  <div class="home">
    <div class="home-header">
      <p class="title is-1">Elijah Lavoie</p>
      <p class="subtitle is-3">
        Software Developer - Tech Enthusiast - Coffee Aficionado - Nerd Hobbyist
      </p>
    </div>
    <hr class="section-divider" />
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
    <hr class="section-divider" />
    <div class="about-me" id="about">
      <p class="title is-4">About Me</p>
      <div class="content">
        <p class="is-size-5 about-txt">
          Hi there! I'm Eli, a Nashville based software developer and graduate
          of the Nashville Software School. I graduated from the NSS in
          September of 2020, and am currently seeking full time employment.
        </p>
        <p class="is-size-5 about-txt">
          I'm a musician, I love good coffee, and I spend my free time playing
          games with my friends. I enjoy surrounding myself with friendly people
          and always look to carry a positive attitude in my life. I also love
          to learn things that help me improve myself and my development skills!
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style>
.home-header {
  margin-top: 3.5em;
}
.section-divider {
  border-bottom: 2.8px solid red;
  margin-left: 15%;
  margin-right: 15%;
}

.nav-links {
  display: flex;
  justify-content: center;
}

.link {
  margin-left: 1em;
  margin-right: 1em;
}

.about-txt {
  width: 40%;
  text-align: justify;
  margin-left: 5em;
}
</style>