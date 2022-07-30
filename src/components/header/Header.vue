``
<template>
  <header>
    <div class="container">
      <div class="content">

        <div class="logo">
          <img :src="require('./assets/logo.png')" alt="logo">
          <h1>lorem 12</h1>
        </div>

        <div class="nav-links">
          <a href="#">Помощь</a>
        </div>

        <div class="nav-buttons">
          <a class="create" href="#">Создать обьявление</a>
          <a class="profile" href="#">Личный кабинет</a>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: skyblue;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content a {
  text-decoration: none;
  text-transform: uppercase;
}

/* only for develop purposes */
.content div {
  /*border: 5px solid #5e5373;*/
}

.nav-links {
  display: inline-flex;
  flex: 1 1 33.33%;
}

.nav-links a {
  display: inline-flex;
  flex-basis: 15%;
  justify-content: center;
  color: #424B5A;
}

.nav-buttons {
  display: inline-flex;
  flex-basis: 30.333%;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;
}

.nav-buttons .create {
  color: white;
  background-color: #424B5A;
  padding: 1em 1.5em;
  border-radius: 5px;
}

.nav-buttons .profile {
  color: #424B5A;
}

.logo {
  display: inline-flex;
  justify-content: space-evenly;
  flex: 0 1 20%;
}

.logo img {
  width: min(50vw, 75px);
}
</style>