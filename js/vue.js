const app = Vue.createApp({
  data() {
    return {
      // embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/c5wAfnzlA8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      article: `<h1>my blog subtitile</h1>`,
      webProjects: 0,
      API: 'https://script.google.com/macros/s/AKfycbyFAHd5q3pEE8MZeDLIk44z1DVrwJ868Hgih10vN-Pw6dgkshQr9h-eCxN6UaduPC29dg/exec',
      years: 0,
      views: 0,
      pic: 'https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa',
      animateCounters: true,
      tagline: '',
      lang: 'en',
      tags: ['Full Stack Web Developer', 'Vuegle Stack Developer', 'Freelance Web Developer'],
      counterYears: 200,
      comments: [
        {
          email: 'user@domain.com',
          show: true,
          id: 'comment-1',
          username: 'user1',
          date: 'x-x-2023',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis!'
        },
        {
          email: 'user@domain.com',
          show: false,
          id: 'comment-2',
          username: 'user2',
          date: 'x-x-2023',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis!'
        },
        {
          email: 'user@domain.com',
          show: false,
          id: 'comment-3',
          username: 'user3',
          date: 'x-x-2023',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis!'
        },
        {
          email: 'user@domain.com',
          show: false,
          id: 'comment-4',
          username: 'user4',
          date: 'x-x-2023',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis!'
        },
        {
          email: 'user@domain.com',
          show: false,
          id: 'comment-5',
          username: 'user5',
          date: 'x-x-2023',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sit ut repellendus hic sed molestias eum ea architecto blanditiis deserunt facilis assumenda asperiores libero sunt quo, distinctio esse in vitae.'
        },
      ],
      imgs: [
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1081',
        'https://picsum.photos/1920/1082',
        'https://picsum.photos/1920/1083',
        'https://picsum.photos/1920/1084',
        'https://picsum.photos/1920/1085',
        'https://picsum.photos/1920/1086',
        'https://picsum.photos/1920/1087',
        'https://picsum.photos/1920/1088',
      ],
    }
  },
  computed: {
    dir() {
      if (document.querySelector('html').getAttribute('lang') == 'ar') return 'rtl'
      return 'ltr'
    }
  },

  methods: {



    font(fontname) {
      if (document.querySelector('html').getAttribute('lang') == 'ar') return 'arb'
      return fontname
    },

    shareBlog(title, url) {
      if (navigator.share) {
        navigator.share({
          title: title,
          url: url
        })
          .then(() => console.log('Shared successfully'))
          .catch((error) => console.error('Error sharing:', error));
      } else {
        console.log('Web Share API not supported');
      }
    },

    show(x) {
      // showing the first commnent as default
      if (x) return ' show '
      else return ''
    },
    timo(date) {


      dayjs.extend(window.dayjs_plugin_relativeTime);
      dayjs();
      const futureDate = dayjs(date);
      console.log(futureDate.fromNow());
      return futureDate.fromNow()
    },

    env(path) {
      if (location.href.includes('http://127.0.0.1:5502/')) {
        // this is in dev mode
        return path;
      } else {
        if (location.href.includes('mashoun.github.io/')) {
          // in production mode
          // add /app/ directory to all links
          return '/app/' + path
        }
      }
    },
    animateTags() {
      var i = 0;
      var j = 0;
      var speed = 12;
      var interval = setInterval(() => {

        if (j == this.tags[i].length + 1) {
          //next tag
          j = 0;
          i++;
          this.tagline = ''

        }
        if (i == this.tags.length) {
          //all tags are finished , looping again
          i = 0;
          j = 0;
          this.tagline = ''
        }

        this.tagline += this.tags[i].charAt(j)
        j++;

      }, (this.tags[i].length * speed));
    },

    animateWebProjects(max, speed) {
      this.webProjects = 0;
      if (this.animateCounters) {

        var t = setInterval(() => {
          if (this.webProjects >= max - 1) {
            clearInterval(t)
            this.webProjects = max - 1;
          }
          this.webProjects++
        }, speed)
      }
    },

    animateYears(max, speed) {
      this.years = 0;
      if (this.animateCounters) {

        var t = setInterval(() => {
          if (this.years >= max - 1) {
            clearInterval(t)
            this.years = max - 1;
          }
          this.years++

        }, speed)
      }

    },

    animateViews(max, speed) {
      this.views = 0;
      if (this.animateCounters) {

        var t = setInterval(() => {
          if (this.views >= max - 1) {
            clearInterval(t)
            this.views = max - 1;
          }
          this.views++

        }, speed)
      }
    },

  },
  mounted() {
    var d = new Date()
    this.animateTags()
    this.animateWebProjects(50, 400)
    this.animateYears(((parseInt(d.getUTCFullYear())) - 2020), 1000)
    this.animateViews(27, 300)


    // this.time = futureDate.fromNow()
  },


})


import navbar from '../components/navbar-section.js'
import hero from '../components/hero-section.js'
import experience from '../components/experience-section.js'
import blogs from '../components/blogs-section.js'
// ********** NAVIGATION BAR COMPONENT **********
app.component('navbar-section',navbar)
// ********** NAVIGATION BAR COMPONENT **********



// ********** HERO SECTION COMPONENT **********
app.component('hero-section', hero)
// ********** HERO SECTION COMPONENT **********




// ********** EXPERIENCE SECTION COMPONENT **********
app.component('experience-section', experience)



// ********** BLOGS SECTION COMPONENT **********
app.component('blogs-section', blogs)



// ********** CONTACT SECTION COMPONENT **********
app.component('footer-section', {
  template:
    /*html */
    `
    <footer class="py-3 px-2 bg-dark">
      <section id="contact" class="container">
        <div class="row justify-content-between">
          <div class="col-12 col-lg-4 pt-5">
            <div class="d-flex flex-column gap-2">
              <div>
                <h3 class="bebas fs-2 text-abyad"># Lorem ipsum dolor sit amet<strong
                    class="pop blink text-gradient">_</strong></h3>
                <p class="text-secondary pop fs-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem incidunt qui quos ipsum
                  blanditiis accusantium tempora! Earum, quisquam excepturi.
                </p>
              </div>
              <div class="gradient-hover d-flex align-items-center gap-2">
                <span class="material-symbols-outlined fs-3 text-secondary">
                  mail
                </span>
                <a href="" class="m-0 fs-6 pop text-abyad">info@lebancode.com</a>
              </div>
              <div class="gradient-hover d-flex align-items-center gap-2">
                <span class="material-symbols-outlined fs-3 text-secondary">
                  phone_forwarded
                </span>
                <a href="" class="m-0 fs-6 pop text-abyad">Whatsapp Call</a>
              </div>
              <div class="gradient-hover d-flex align-items-center gap-2">
                <span class="material-symbols-outlined fs-3 text-secondary">
                  forum
                </span>
                <a href="" class="m-0 fs-6 pop text-abyad">Whatsapp Chat</a>
              </div>
              <div class="gradient-hover d-flex align-items-center gap-2">
                <span class="material-symbols-outlined fs-3 text-secondary">
                  video_call
                </span>
                <a href="" class="m-0 fs-6 pop text-abyad">Schedule a meeting</a>
              </div>
  
            </div>
          </div>
          <div class="col-12 col-lg-2 pt-5">
            <div class="d-flex flex-column gap-3">
              <h3 class="bebas fs-3 text-abyad">Useful Links</h3>
              <!-- link list -->
              <div class="d-flex flex-column gap-2">
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    link
                  </span>
                  <span class="text-abyad fs-6 pop">Home Page</span>
                </a>
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    link
                  </span>
                  <span class="text-abyad fs-6 pop">Work Experience</span>
                </a>
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    link
                  </span>
                  <span class="text-abyad fs-6 pop">Collaborations</span>
                </a>
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    link
                  </span>
                  <span class="text-abyad fs-6 pop">Blogs & FAQs</span>
                </a>
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    link
                  </span>
                  <span class="text-abyad fs-6 pop">Terms & Conditions</span>
                </a>
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    link
                  </span>
                  <span class="text-abyad fs-6 pop">Privacy Policy</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-2 pt-5">
            <div class="d-flex flex-column gap-3">
              <h3 class="bebas fs-3 text-abyad">Solutions</h3>
  
              <div class="d-flex flex-column gap-2">
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    install_desktop
                  </span>
                  <span class="text-abyad fs-6 pop">PWA</span>
                </a>
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    web
                  </span>
                  <span class="text-abyad fs-6 pop">CSR - Websites</span>
                </a>
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    extension
                  </span>
                  <span class="text-abyad fs-6 pop">Chrome Extensions</span>
                </a>
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    terminal
                  </span>
                  <span class="text-abyad fs-6 pop">CRM Softwares</span>
                </a>
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    insights
                  </span>
                  <span class="text-abyad fs-6 pop">Automations</span>
                </a>
                <a href="" class="gradient-hover d-flex gap-2 align-items-center">
                  <span class="material-symbols-outlined text-secondary fs-4">
                    travel_explore
                  </span>
                  <span class="text-abyad fs-6 pop">SSR - SEO</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 pt-5 pb-3">
            <div class="d-flex flex-column gap-3">
              <div>
                <h3 class="bebas fs-3 text-abyad">Join our Newsletter</h3>
                <p class="text-secondary pop fs-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                  soluta!
                </p>
              </div>
  
              <div class="input-group">
                <input type="email" class="form-control pop" placeholder="Enter your email" aria-label="Enter your email"
                  aria-describedby="button-addon2">
                <button class="btn btn-danger" type="button"><span class="bebas">Subscribe</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class="container text-light my-4">
      <section class="container mb-3">
        <div class="row justify-content-between gap-3">
          <h6 class="col-12 col-lg-7 col-xl-8 fs-4 pop text-abyad text-center text-lg-start m-0 ls-1"> <strong>Mahmoud Mashoun</strong> </h6>
          <div class="col-12 col-lg-2 d-flex align-items-center justify-content-center justify-content-lg-between gap-3">
            <a href=""><i class="social-media-icon fs-4 bi bi-linkedin text-secondary"></i></a>
            <a href=""><i class="social-media-icon fs-4 bi bi-whatsapp text-secondary"></i></a>
            <a href=""><i class="social-media-icon fs-4 bi bi-github text-secondary"></i></a>
            <a href=""><i class="social-media-icon fs-4 bi bi-youtube text-secondary"></i></a>
            <a href=""><i class="social-media-icon fs-4 bi bi-stack-overflow text-secondary"></i></a>
          </div>
        </div>
      </section>
    </footer>
    `
})

// ********* BLOG ARTICLE SECTION ***********
app.component('blog', {
  template:
    /*html */
    `
    <article class="col-12 col-lg-6 px-2 py-3">
        <div class="rounded shadow p-3 bg-light">
            <!-- blog header -->
            <div class="bg-light d-flex align-items-center justify-content-between px-2 py-3 shadow-sm rounded">
                <a :href="env('/')" class="d-flex justify-content-start align-items-center gap-2">
                    <img src="https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa"
                        alt="profile pic" class="img-fluid rounded-pill shadow skeleton" width="40" height="40">
                    <div class="d-flex flex-column">
                        <h1 class="fs-5 text-secondary m-0 pop"> <strong>Mahmoud Mashoun</strong> </h1>
                        <h6 class="fs-xsmall pop text-secondary">Full Stack Web Dev.</h6>
                    </div>
                </a>
                <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-three-dots-vertical fs-5 text-secondary" data-bs-toggle="dropdown"></i>

                    <ul class="dropdown-menu shadow-sm p-2 pop bg-abyad">
                        <div class="scale-in-center">
                            <li><a class="dropdown-item" :href="env('/')">Home Page</a></li>
                            <li><a class="dropdown-item" href="#experience">Work Experience</a></li>
                            <li><a class="dropdown-item" href="/blogs">Blogs & FAQs</a></li>
                            <li><a class="dropdown-item" href="/terms_and_conditions">Terms & Conditions</a>
                            </li>
                            <li><a class="dropdown-item" href="/privacy_policy">Privacy Policy</a></li>
                            <li><a class="dropdown-item" href="#contact">Contact</a></li>
                            <li>
                                <a href="" class="mt-1 rounded border p-2 text d-flex align-items-center gap-2">
                                    <i class="material-symbols-outlined">
                                        video_call
                                    </i>
                                    <span>Schedule a meeting</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

            <!-- blog image slider -->
            <figure v-if="media" class="swiper mt-3">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="i in imgs">
                        <div class="swiper-zoom-container skeleton rounded">
                            <img :src="i" alt="pic" class="img-fluid rounded skeleton" width="1920"
                                height="1080">
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination position-static mt-2"></div>
            </figure>
            <figure v-else class="mt-3">
                <slot name="embed"><slot>
            </figure>

            <!-- blog body [ title + paragraph ] -->
            <div class="mt-3 d-flex flex-column gap-3">
                <slot name="title"></slot>
                <slot name="article"></slot>
            </div>
            <hr>

            <!-- blog footer [ date + share btn ] -->
            <div class="d-flex gap-2 align-items-center justify-content-between">
                <div class="text d-flex gap-2 align-items-center text-secondary">
                    <i class="bi bi-clock"></i>
                    <small class="m-0">Fri 12 March 2023</small>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <i class="bi bi-chat-square-dots fs-5 text-secondary"></i>
                    <i class="bi bi-share-fill fs-6 text-secondary"></i>
                </div>
            </div>

        </div>
    </article>
    `,
  mounted() {
    // this.parseHTML('embed-box',this.embed)
  },
  props: ['media', 'imgs'],
  methods: {
    parseHTML(id, content) {
      document.getElementById(id).innerHTML = content
    },

    env(path) {
      if (location.href.includes('http://127.0.0.1:5501/')) {
        // this is in dev mode
        return path;
      } else {
        if (location.href.includes('mashoun.github.io/')) {
          // in production mode
          // add /app/ directory to all links
          return '/app/' + path
        }
      }
    },
  }

})


// ********* COMMENTS SECTION ****************
app.component('comments', {
  template:
    /*html */
    `
  
  <section class="col-12 col-lg-6 px-2 py-3">
      <div class="bg-light p-3 shadow-sm rounded d-flex flex-column gap-3">
          <div class="d-flex flex-column">
              <h3 class="fs-2 bebas text-secondary text-start">Community chat</h3>
              <p class="pop text-secondary fs-small cap">Please note that I will review and respond to your comment before it is posted.</p>
          </div>

          <!-- comment box -->
          
          <div v-if="spinner" class="d-flex flex-column gap-2">
            <div class="d-flex gap-1 align-items-center">
                <div class="w-75 line rounded-pill skeleton"></div>
                <div class="w-25 line rounded-pill skeleton"></div>
            </div>
            <div class="w-100 line rounded-pill skeleton"></div>
            <div class="d-flex gap-1 align-items-center">
                <div class="w-25 line rounded-pill skeleton"></div>
                <div class="w-75 line rounded-pill skeleton"></div>
            </div>
            <div class="w-100 line rounded-pill skeleton"></div>
            <div class="w-75 line rounded-pill skeleton"></div>
            <div class="w-25 line rounded-pill skeleton mt-3"></div>
          </div>
          <section v-else class="d-flex flex-column gap-2">
            <div v-if="!nocomments" class="d-flex flex-column p-2 shadow-sm rounded" v-for="c in comments">
                <time class="fs-xsmall text-secondary pop">{{timo(c.date)}}</time>
                <div class="d-flex align-items-center">
                    <i class="bi bi-at text-primary fs-5"></i>
                    <strong class="text-primary pop opacity-75">{{c.name}}</strong>
                </div>
                <p :class="'text-secondary fs-small '+font('pop')">
                    <small class="cap">{{c.theComment}}</small>
                    
                    <br>
                    <span class="pt-2 text-success opacity-75 d-flex align-items-start gap-2"
                        title="@Mahmoud Mashoun">
                        <i class="bi bi-arrow-return-right"></i>
                        <small> <strong>Mahmoud Mashoun<i class="bi bi-dot"></i></strong>{{c.reply}}</small>
                    </span>
                </p>
            </div>
            <div v-else class="d-flex flex-column p-2 shadow-sm rounded">
                <div class="d-flex align-items-center">
                    <i class="bi bi-at text-secondary fs-5"></i>
                    <strong class="text-primary pop opacity-75">Mahmoud Mashoun</strong>
                </div>
                <p class="text-secondary pop fs-small">
                    <small class="cap">Don't be shy - leave a comment and join the discussion </small>
                </p>
            </div>

          </section>
          <div>
              <!-- Add a comment -->
              <small class="fs-xsmall float-end mb-1 text-secondary pop">{{max - theComment.length}}</small>
              <grammarly-editor-plugin>
                <textarea v-model="theComment" @keyup="validateComment" id="theComment" class="form-control bg-light text-secondary pop" rows="4" placeholder="Add comment"></textarea>
                <small class="invalid-feedback fs-xsmall pop mt-1">Max {{max}} char !</small>
              <grammarly-editor-plugin>
              <!-- submit ur comment -->
              <div class="input-group mt-2">
                  <input @keyup="validateEmail" type="email" id="email" v-model="useremail" class="form-control py-2 bg-light pop" placeholder="Enter your email"
                      aria-label="Recipient's username" aria-describedby="button-addon2">
                  <button @click="newComment" class="btn btn-primary px-3" type="button"><span class="pop">Submit</span></button>
              </div>
              
          </div>
      </div>
  </section>
  `,
  data() {
    return {
      max: 250,
      comments: '',
      theComment: '',
      useremail: '',
      spinner: false,
      nocomments: false
    }
  },
  props: ['api', 'index'],
  mounted() {
    this.spinner = true;
    var api = this.api
    api += `?getComment=1&blogIndex=${this.index}`
    fetch(api).then(res => res.json()).then(res => {
      console.log(res)
      if (res != '203') {
        this.comments = res
        this.spinner = false
      } else {
        this.spinner = false
        this.nocomments = true
      }
    })
  },
  methods: {

    font(fontname) {
      if (document.querySelector('html').getAttribute('lang') == 'ar') return 'arb'
      return fontname
    },

    validateComment() {

      const textarea = document.getElementById('theComment');

      // Checking if there is an arabic char
      var arabicRegex = /[\u0600-\u06FF]/; // Unicode range for Arabic characters
      if (arabicRegex.test(this.theComment)) {
        textarea.classList.add('arb')
        textarea.setAttribute('dir', 'rtl')
      } else {
        textarea.classList.remove('arb')
        textarea.setAttribute('dir', 'ltr')

      }
      // console.log(this.max < this.theComment.length)
      if (this.max < this.theComment.length) textarea.classList.add('is-invalid')
      else textarea.classList.remove('is-invalid')
    },
    validateEmail() {

      const email = document.getElementById('email');
      const length = this.useremail;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      if (50 < this.useremail.length || (!regex.test(this.useremail))) email.classList.add('is-invalid')
      else email.classList.remove('is-invalid')
    },

    newComment() {

      this.spinner = true;
      var api = this.api
      api += `?newComment=1`
      var data = {
        "email": this.useremail,
        "theComment": this.theComment,
        "blogTitle":this.index
      }
      fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(data),
      }).then(res => res.json()).then(res => {
        alert(res)
        this.spinner = false
      })
    },
    show(x) {
      // showing the first commnent as default
      if (x) return ' show '
      else return ''
    },
    shareOnLinkedIn() {
      const encodedUrl = encodeURIComponent('https://mashoun.github.io/app/blogs/blog1/');
      const encodedTitle = encodeURIComponent('Testing First Blog with Linkedin API');
      const encodedSummary = encodeURIComponent('Nevermind about this testing post');

      const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`;
      window.open(shareUrl, '_blank');
    },

    timo(date) {
      dayjs.extend(window.dayjs_plugin_relativeTime);
      dayjs();
      const futureDate = dayjs(date);
      console.log(futureDate.fromNow());
      return futureDate.fromNow()
    }


  }
})

// *********** SWIPER COMPONENT ***********
app.component('swiper', {
  template:
    /*html */
    `
  <figure class="swiper mt-3">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in imgs">
            <div class="swiper-zoom-container skeleton rounded">
                <img :src="i.src" :alt="i.alt" class="img-fluid rounded skeleton object-fit-cover" width="1920" height="1080">
            </div>
        </div>
    </div>
    <div class="swiper-pagination position-static mt-2"></div>
  </figure>
  
  `,
  props: ['imgs'],
})

app.mount('#app')