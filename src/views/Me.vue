<template>
  <div class="me">
    <div class="top">
      <img class="top-cloud" src="../assets/me/imgs/cloud.png" alt="" />
      <h1>Yongteng Lei</h1>
      <h2>A <span>pro</span>grammer</h2>
      <img class="bottom-cloud" src="../assets/me/imgs/cloud.png" alt="" />
      <img src="../assets/me/imgs/mountain.png" alt="" />
    </div>

    <div class="middle-container">
      <div class="profile">
        <img src="../assets/me/imgs/200.webp" alt="" />
        <h2>Hello.</h2>
        <p class="intro">
          Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna.
          Non auctor, montes nulla distinctio.
        </p>
      </div>
      <hr />
      <div class="skills">
        <h2>My Skills.</h2>
        <div class="skill-row">
          <img class="code-img" src="../assets/me/imgs/200w.webp" alt="" />
          <h3>Lorem & Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
            Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit
            nam, lectus ante, ut lorem eros.
          </p>
        </div>
        <div class="skill-row">
          <img class="code-img2" src="../assets/me/imgs/200w.webp" alt="" />
          <h3>Lorem Ipsum Dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu,
            bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel
            eu, rutrum nam.
          </p>
        </div>
      </div>
      <hr />
      <div class="contact-me">
        <h2>Get In Touch</h2>
        <h3>Lorem ipsum dolor sit amet, non elit.</h3>
        <p class="contact-message">
          Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales,
          tellus donec dui, ornare erat.
        </p>
        <a class="btn" href="mailto:3065588496@qq.com">CONTACT ME</a>
      </div>
    </div>
    <!--
    <div class="bottom-container">
      <a class="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
      <a class="footer-link" href="https://twitter.com/">Twitter</a>
      <a class="footer-link" href="https://www.appbrewery.co/">Website</a>
      <p class="copyright">© Yongteng Lei</p>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'Me',
}
</script>

<style scoped>
.me {
  color: #40514e;
  margin: 0;
  text-align: center;
  font-family: 'Merriweather', sans-serif;
}

.top {
  background-color: #b1afff;
  position: relative;
  padding-top: 100px;
}

.middle-container {
  margin: 100px 0;
}

h1 {
  margin: 50px auto 0 auto;
  font-family: 'Sacramento', sans-serif;
  /*16px = 100% = 1em by default 90 / 16 = 562.5% = 5.625em*/
  font-size: 5.625rem;
  color: #3f3b6c;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  color: #3f3b6c;
  font-weight: normal;
  margin-bottom: 10px;
}

h3 {
  color: #98a8f8;
}

a {
  color: #98a8f8;
}

p {
  line-height: 2;
}

span {
  text-decoration: underline;
}

hr {
  border: 6px dotted #eaf6f6;
  border-bottom: none;
  width: 4%;
  margin: 100px auto;
}

.intro {
  width: 30%;
  margin: auto;
}

.skill-row {
  width: 50%;
  margin: 100px auto;
}

.skill-row p {
  text-align: left;
}

.code-img {
  width: 20%;
  border-radius: 50%;
  float: left;
  margin-right: 30px;
}

.code-img2 {
  width: 20%;
  border-radius: 50%;
  float: right;
  margin-left: 30px;
}

.contact-message {
  width: 40%;
  margin: 40px auto 40px auto;
}

.btn {
  background: #3f3b6c;
  background-image: -webkit-linear-gradient(top, #3f3b6c, #b1afff);
  background-image: -moz-linear-gradient(top, #3f3b6c, #b1afff);
  background-image: -ms-linear-gradient(top, #3f3b6c, #b1afff);
  background-image: -o-linear-gradient(top, #3f3b6c, #b1afff);
  background-image: linear-gradient(to bottom, #3f3b6c, #b1afff);
  -webkit-border-radius: 8;
  -moz-border-radius: 8;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn:hover {
  background: #b1afff;
  background-image: -webkit-linear-gradient(top, #b1afff, #3f3b6c);
  background-image: -moz-linear-gradient(top, #b1afff, #3f3b6c);
  background-image: -ms-linear-gradient(top, #b1afff, #3f3b6c);
  background-image: -o-linear-gradient(top, #b1afff, #3f3b6c);
  background-image: linear-gradient(to bottom, #b1afff, #3f3b6c);
  text-decoration: none;
}

.top-cloud {
  position: absolute;
  left: 520px;
  top: 20px;
}

.bottom-cloud {
  position: absolute;
  left: 150px;
  bottom: 400px;
}

.bottom-container {
  margin: 30px auto 0px auto;
  padding: 30px 0 20px 0;
  background-color: #b1afff;
}

.bottom-container a {
  color: #3f3b6c;
  font-family: 'Montserrat', sans-serif;
  margin: 10px 20px;
  text-decoration: none;
}

.bottom-container a:hover {
  color: #eaf6f6;
}

.copyright {
  color: #eaf6f6;
  font-size: 0.85rem;
}
</style>
