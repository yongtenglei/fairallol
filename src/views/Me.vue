<template>
  <div class="me">
    <div>
      <div class="top">
        <img class="top-cloud" src="../assets/me/imgs/cloud.png" alt="" />
        <h1>Yongteng Lei</h1>
        <h2>A <span>pro</span>grammer</h2>
        <img class="bottom-cloud" src="../assets/me/imgs/cloud.png" alt="" />
        <img src="../assets/me/imgs/mountain.png" alt="" />
      </div>

      <div class="container-fluid">
        <div>
          <img
            class="profile-img"
            src="../assets/gopher/gif/gopher-computer.gif"
            alt=""
          />
          <h2>Hello.</h2>

          <div class="row g-0 d-flex align-items-center justify-content-center">
            <div class="col-md-6 col-sm-6 justify-content-end">
              <p>
                Hi, I'm yongteng. Lu Xun once said, "Yongteng is a good boy",
                and Yu Wei said, "It's hard to say". Ha! Who knows, I'd say,
                "Although he doesn't seem easy to approach, he's still a decent
                and decent person". "虽然他看上去不是很好接近,
                但其实他的为人还是很正直讲义气~"
              </p>
            </div>
          </div>
        </div>
        <hr />

        <h2>My Skills.</h2>
        <div class="skills">
          <div
            class="skill-section row g-0 d-flex align-items-center justify-content-center"
          >
            <div class="col-md-2 justify-content-end">
              <img
                class="img-fluid rounded"
                src="../assets/gopher/gif/dance.gif"
                alt=""
              />
            </div>

            <div class="col-md-6">
              <h3>Golang</h3>
              <p>
                Three years of Golang development experience, and as you can
                see, I love this guy.
              </p>
            </div>
          </div>

          <!-- Rust -->
          <div
            class="skill-section row g-0 d-flex align-items-center justify-content-center"
          >
            <div class="col-md-6">
              <h3>Rust</h3>
              <p>
                New to Rust, looking forward to becoming a big guy. Just like...
              </p>
            </div>

            <div class="col-md-2 justify-content-start">
              <img
                class="img-fluid rounded-circle"
                src="../assets/gopher/gif/rustdance.gif"
                alt=""
              />
            </div>

            <div
              class="row g-0 d-flex align-items-center justify-content-center"
            >
              <div class="col-md-1">
                <img
                  class="img-fluid rounded-circle"
                  src="../assets/gopher/gif/rust-gopher.gif"
                  alt=""
                />
              </div>
              <div class="col-md-1">Hi</div>
            </div>
          </div>

          <!-- Linux -->
          <div
            class="skill-section row g-0 d-flex align-items-center justify-content-center"
          >
            <div class="col-sm-2 col-md-2 justify-content-end">
              <img
                class="img-fluid rounded"
                src="../assets/gopher/gif/swan_hack-dab.gif"
                alt=""
              />
            </div>

            <div class="col-md-6 col-sm-6">
              <h3>Linux</h3>
              <p>
                Oh, sorry Linux, so late to introduce you. Yes, using Linux has
                made me special, and made me a lot of good friends. We all love
                LEC! LEC! Hooray!!!
              </p>
            </div>
          </div>

          <!-- Vim -->
          <div
            class="skill-section row g-0 d-flex align-items-center justify-content-center"
          >
            <div class="col-sm-2 col-md-2 justify-content-end">
              <img
                class="img-fluid rounded"
                src="../assets/gopher/gif/linux-ethandud.gif"
                alt=""
              />
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="d-flex align-items-center justify-content-center">
                <h3>
                  Vim
                  <img
                    class=""
                    src="../assets/gopher/gif/vim-linux.gif"
                    alt=""
                  />
                </h3>
              </div>
              <p>
                There is no reason for FYP if it is not for the
                "acknowledgements". If not for Vim, I would probably have given
                up on Linux. Vim! Hooray!!!
              </p>
            </div>

            <div class="col-sm-2 col-md-2 justify-content-end">
              <img
                class="img-fluid rounded"
                src="../assets/gopher/gif/linux-ethandud.gif"
                alt=""
              />
            </div>

            <div
              class="row g-0 d-flex align-items-center justify-content-center"
            >
              <div class="col-sm-2 col-md-2 justify-content-end">
                <img
                  class="img-fluid rounded"
                  src="../assets/gopher/gif/vim-go.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <section class="dream">
          <div class="row g-0 d-flex align-items-center justify-content-center">
            <div class="col-sm-2 col-md-2 justify-content-end">
              <img
                class="img-fluid rounded"
                src="../assets/gopher/gif/dance.gif"
                alt=""
              />
            </div>
            <div class="col-sm-2 col-md-2 justify-content-end">
              <img
                class="img-fluid rounded"
                src="../assets/gopher/gif/party-gopher.gif"
                alt=""
              />
            </div>
            <div class="col-sm-2 col-md-2 justify-content-end">
              <img
                class="img-fluid rounded"
                src="../assets/gopher/gif/gopher-dance-long-3x-sign.gif"
                alt=""
              />
            </div>
          </div>
          <p class="stop">Time is limited, so let's stop here.</p>
        </section>
      </div>
    </div>
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

.profile-img {
  width: 20%;
  border-radius: 50%;
}

.top {
  background-color: #b1afff;
  position: relative;
  padding-top: 100px;
}

.container-fluid {
  padding: 3% 15%;
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
  font-size: 3.5rem;
  color: #3f3b6c;
  font-weight: normal;
  margin-bottom: 10px;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
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

.skill-section {
  margin-top: 64px;
}

.skill-row {
  width: 50%;
  margin: 100px auto;
}

.skill-row p {
  text-align: left;
}

.rust-gopher-img {
  width: 30%;
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
.stop {
  margin-top: 5%;
}

.copyright {
  color: #eaf6f6;
  font-size: 0.85rem;
}
</style>
