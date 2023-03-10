const app = Vue.createApp({
  data() {
    return {
      webProjects: 0,
      years: 0,
      views: 0,
      pic:'https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa',
      animateCounters: true,
      tagline: '',
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
  methods: {

    show(x) {
      // showing the first commnent as default
      if (x) return ' show '
      else return ''
    },
    timo(next) {
      // Thu Mar 02 2023 14:24:38 GMT+0200 (Eastern European Standard Time)
      // year-month-day

      var result = '';
      const currentDate = new Date()
      const nextDate = new Date(next)
      // console.log(currentDate, nextDate)
      // console.log(currentDate.getDate(), nextDate.getDate())
      // console.log((currentDate.getDate()) - (nextDate.getDate()))

      // // Calculating Years
      var years = (currentDate.getFullYear()) - (nextDate.getFullYear())
      console.log('years = ' + years)
      if (years == 1) {
        return `${years} year ago`
      } else {
        if (years >= 2) {
          return `${years} years ago`
        }
      }

      // Calculating Month
      var months = (currentDate.getMonth() + 1) - (nextDate.getMonth() + 1)
      if (months == 1) {
        result += `${months} month ago`
        return result;
      } else {
        if (months >= 2) {
          result += `${months} months ago`
          return result;
        }
      }

      // Calculating Days
      var days = (currentDate.getDate()) - (nextDate.getDate());
      if (days == 0) {
        result += 'Today'
      } else {
        if (days == 1) {
          result += 'Yesterday'

        } else {
          if (days >= 2) {
            result += `${days} days ago`
          }
        }
      }


      return result;


    },

    env(path) {
      if (location.href.includes('http://127.0.0.1:5500/')) {
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


  },


})


// ********** NAVIGATION BAR COMPONENT **********
app.component('navbar-section', {
  template:
    /*html */
    `
    
    <header id="home" class="w-100 bg-extra-abyad shadow-sm p-3 px-lg-4 d-flex justify-content-between align-items-center pop">
        <a :href="env('/')" class="d-flex justify-content-start align-items-center gap-3">
            <img src="https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa" alt="profile pic" class="img-fluid rounded-pill shadow skeleton" width="40" height="40">
            <div class="d-flex flex-column">
                <h1 class="fs-5 text-secondary m-0 pop"> <strong>Mahmoud Mashoun</strong> </h1>
                <h6 class="fs-xsmall pop text-secondary">Full Stack Web Dev.</h6>
            </div>
            
        </a>
        <nav class="gap-3 align-items-center justify-content-center text-secondary">
            <a href="./">Home</a>
            <a href="" data-bs-toggle="dropdown">Experience</a>
              <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Progressive Web Applications</a></li>
              <li><a class="dropdown-item" href="#">CSR Websites</a></li>
              <li><a class="dropdown-item" href="#">Chrome Extensions</a></li>
              <li><a class="dropdown-item" href="#">CRM Softwares</a></li>
              <li><a class="dropdown-item" href="#">Automations</a></li>
              <li><a class="dropdown-item" href="#">SEO & SSR Web Apps</a></li>
              </ul>
            <a href="" data-bs-toggle="dropdown">Collaborations</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Google Developer Groups</a></li>
                <li><a class="dropdown-item" href="#">Mena Digital Days</a></li>
                <li><a class="dropdown-item" href="#">Devfest</a></li>
                <li><a class="dropdown-item" href="#">Jurdi Law</a></li>
              </ul>
            <a :href="env('/blogs/')">Blogs</a>
        </nav>
        <i class="bi bi-three-dots-vertical menu text-secondary fs-4" data-bs-toggle="dropdown"></i>
        
        <ul class="dropdown-menu shadow-sm p-2 pop bg-abyad">
            <div class="scale-in-center">
            <li><a class="dropdown-item" href="#">Home Page</a></li>
            <li><a class="dropdown-item" href="#experience">Work Experience</a></li>
            <li><a class="dropdown-item" href="/blogs">Blogs & FAQs</a></li>
            <li><a class="dropdown-item" href="/terms_and_conditions">Terms & Conditions</a></li>
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
        <div class="meeting-btnn">
            <a href="" class="btn btn-primary text-light d-flex align-items-center gap-2">
            <i class="material-symbols-outlined">
                video_call
            </i>
            <span>Schedule a meeting</span>
            </a>
        </div>
    </header>
    `,
  methods: {

    env(path) {
      if (location.href.includes('http://127.0.0.1:5500/')) {
        // this is in dev mode
        return path;
      } else {
        if (location.href.includes('mashoun.github.io/')) {
          // in production mode
          // add /app/ directory to all links
          return '/app' + path
        }
      }
    },
  }
})
// ********** NAVIGATION BAR COMPONENT **********



// ********** HERO SECTION COMPONENT **********
app.component('hero-section', {
  template:
    /*html */
    `
    <section>
      <div class="container">
        <div class="row justify-content-between gap-3 py-4">
          <section class="col-md-12 col-lg-6">
            <hr class="container line-md">
            <div class="d-flex justify-content-center flex-column gap-4">
              <div class="d-flex justify-content-center flex-column gap-2">
                <h1 class="display-5 bebas text-gradient "># {{tagline}}<strong class="pop blink text-gradient">_</strong>
                </h1>
  
                <h1 class="fs-5 pop text-primary">Building Innovative Web Solutions with Expertise in Google
                  Apps Script & VueJs</h1>
                <p class="text-secondary pop text-justify fs-medium">
                  Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt! Incidunt illo aliquid explicabo
                  reprehenderit quae quis ea repellendus sapiente laudantium expedita perspiciatis, aut quibusdam. Amet
                  accusamus sint sunt facere?
                </p>
                <p class="text-secondary pop text-justify fs-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt! Incidunt illo aliquid explicabo
                  reprehenderit quae quis ea repellendus sapiente laudantium expedita perspiciatis, aut quibusdam. Amet
                  accusamus sint sunt facere?
                </p>
                <p class="text-secondary pop text-justify fs-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt! Incidunt illo aliquid explicabo
                  reprehenderit quae quis ea repellendus sapiente laudantium expedita perspiciatis, aut quibusdam. Amet
                  accusamus sint sunt facere?
                </p>
              </div>
              <!-- Counters -->
              <div class="">
                <h2 class="pop text-justify fs-5 text-primary">Lorem ipsum dolor sit amet.</h2>
                <p class="text-secondary pop text-justify fs-small">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aliquid odio enim dicta illum quis!
                </p>
              </div>
              <div class="row justify-content-between">
                <div class="col-md-4 col-12  p-2 point" @click="animateWebProjects(50,200)">
                  <div class="bg-light shadow-sm rounded d-flex justify-content-start align-items-center flex-column p-3">
                    <span class="fs-1 text-gradient bebas">{{webProjects}}+</span>
                    <strong class="fs-6 text-secondary pop">Web Projects</strong>
                  </div>
                </div>
                <div class="col-md-4 col-12  p-2 point" @click="animateYears(3, 1000)">
                  <div class="bg-light shadow-sm rounded d-flex justify-content-start align-items-center flex-column p-3">
                    <span class="fs-1 text-gradient bebas">{{years}}+</span>
                    <strong class="fs-6 text-secondary pop">Years of Experience</strong>
                  </div>
                </div>
                <div class="col-md-4 col-12 p-2 point" @click="animateViews(27,300)">
                  <div class="bg-light shadow-sm rounded d-flex justify-content-start align-items-center flex-column p-3">
                    <span class="fs-1 text-gradient bebas">{{views}}K+</span>
                    <strong class="fs-6 text-secondary pop">Youtube views</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="order-first order-lg-last col-md-12 col-lg-5">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="i in imgs">
                  <div class="swiper-zoom-container skeleton rounded">
                    <img :src="i" alt="pic" class="img-fluid rounded skeleton" width="1920" height="1080">
                  </div>
                </div>
              </div>
              <div class="swiper-pagination position-static mt-2"></div>
            </div>
  
            <div class="mt-3 d-flex flex-column justify-content-center gap-3">
              <div class="d-flex flex-column">
                <h2 class="fs-1 bebas text-gradient">Collaborations and Events</h2>
                <p class="pop text-justify text-secondary fs-small">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Odit mollitia nisi possimus, ipsam sequi, fuga
                  praesentium eos necessitatibus quod optio dolorem molestiae provident dignissimos recusandae dolores
                  consequatur? Iusto, enim nam?
                </p>
              </div>
  
              <div class="d-flex flex-wrap justify-content-start align-items-center gap-2">
                <a href="https://www.youtube.com/live/HNtGQNbOfeE?feature=share"
                  class="bg-dark rounded-pill py-1 px-3 d-flex justify-content-between align-items-center gap-1">
                  <span class="fs-6 material-symbols-outlined text-warning">
                    link
                  </span>
                  <span class="fs-small text-light pop text-center">Build your 1st Chrome Extension</span>
                </a>
  
                <a href="https://www.youtube.com/live/HNtGQNbOfeE?feature=share"
                  class="bg-dark rounded-pill py-1 px-3 d-flex justify-content-between align-items-center gap-1">
                  <span class="fs-6 material-symbols-outlined text-warning">
                    link
                  </span>
                  <span class="fs-small text-light pop text-center">Dynamic vs Static Websites</span>
                </a>
  
                <a href="https://www.youtube.com/live/HNtGQNbOfeE?feature=share"
                  class="bg-dark rounded-pill py-1 px-3 d-flex justify-content-between align-items-center gap-1">
                  <span class="fs-6 material-symbols-outlined text-warning">
                    link
                  </span>
                  <span class="fs-small text-light pop text-center">Google Apps Script Crash Course 2022</span>
                </a>
                <a href="https://www.youtube.com/live/HNtGQNbOfeE?feature=share"
                  class="bg-dark rounded-pill py-1 px-3 d-flex justify-content-between align-items-center gap-1">
                  <span class="fs-6 material-symbols-outlined text-warning">
                    link
                  </span>
                  <span class="fs-small text-light pop text-center">Freelancing in Lebanon</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section> 
    `,
  data() {
    return {
      webProjects: 0,
      years: 0,
      views: 0,
      animateCounters: true,
      tagline: '',
      tags: ['Full Stack Web Developer', 'Vuegle Stack Developer', 'Freelance Web Developer'],
      counterYears: 200,
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
      blogs: [
        'https://picsum.photos/1080',
        'https://picsum.photos/1081',
        'https://picsum.photos/1082',
        'https://picsum.photos/1083',
        'https://picsum.photos/1084',
        'https://picsum.photos/1085',
      ]
    }
  },
  methods: {
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



  }
})
// ********** HERO SECTION COMPONENT **********




// ********** EXPERIENCE SECTION COMPONENT **********
app.component('experience-section', {
  template:
    /*html */
    `
    <section class="container my-5">
      <h1 class="bebas display-5 text">Experience Tag Line</h1>
      <h2 class="pop fs-6 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur!
      </h2>
      <div class="row justify-content-evenly my-5 g-3">
        <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <a :href="env('/exp/pwa')" class="bg-light shadow-sm rounded p-3 d-flex justify-content-start gap-3 flex-column">
            <div class="d-flex align-items-center gap-3">
              <span class="material-symbols-outlined fs-1 text-gradient">
                install_desktop
              </span>
              <h1 class="bebas m-0 fs-3 text">PWA</h1>
            </div>
            <p class="text-secondary fs-6 pop">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
              itaque laborum saepe magnam, nemo ad?</p>
          </a>
        </div>
        <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <div class="bg-light shadow-sm rounded p-3 d-flex justify-content-start gap-3 flex-column">
            <div class="d-flex align-items-center gap-3">
              <span class="material-symbols-outlined fs-1 text-gradient">
                web
              </span>
              <h1 class="bebas m-0 fs-3 text">CSR - Websites</h1>
            </div>
            <p class="text-secondary fs-6 pop">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
              itaque laborum saepe magnam, nemo ad?</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <div class="bg-light shadow-sm rounded p-3 d-flex justify-content-start gap-3 flex-column">
            <div class="d-flex align-items-center gap-3">
              <span class="material-symbols-outlined fs-1 text-gradient">
                extension
              </span>
              <h1 class="bebas m-0 fs-3 text">Chrome Extensions</h1>
            </div>
            <p class="text-secondary fs-6 pop">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
              itaque laborum saepe magnam, nemo ad?</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <div class="bg-light shadow-sm rounded p-3 d-flex justify-content-start gap-3 flex-column">
            <div class="d-flex align-items-center gap-3">
              <span class="material-symbols-outlined fs-1 text-gradient">
                terminal
              </span>
              <h1 class="bebas m-0 fs-3 text">CRM Softwares</h1>
            </div>
            <p class="text-secondary fs-6 pop">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
              itaque laborum saepe magnam, nemo ad?</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <div class="bg-light shadow-sm rounded p-3 d-flex justify-content-start gap-3 flex-column">
            <div class="d-flex align-items-center gap-3">
              <span class="material-symbols-outlined fs-1 text-gradient">
                insights
              </span>
              <h1 class="bebas m-0 fs-3 text">Automations</h1>
            </div>
            <p class="text-secondary fs-6 pop">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
              itaque laborum saepe magnam, nemo ad?</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <div class="bg-light shadow-sm rounded p-3 d-flex justify-content-start gap-3 flex-column">
            <div class="d-flex align-items-center gap-3">
              <span class="material-symbols-outlined fs-1 text-gradient">
                travel_explore
              </span>
              <h1 class="bebas m-0 fs-3 text">SSR - SEO</h1>
            </div>
            <p class="text-secondary fs-6 pop">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
              itaque laborum saepe magnam, nemo ad?</p>
          </div>
        </div>
      </div>
    </section>
    `,
  methods: {

    env(path) {
      if (location.href.includes('http://127.0.0.1:5500/')) {
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
// ********** EXPERIENCE SECTION COMPONENT **********



// ********** BLOGS SECTION COMPONENT **********
app.component('blogs-section', {
  template:
    /*html */
    `
    
    <section id="blogs" class="container my-5">

      <h1 class="bebas display-5 text">Blogs Tag Line</h1>
      <h2 class="pop fs-6 text-secondary">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur!</span>
        <i class="bi bi-dot"></i>
        <a :href="env('blogs/')" v-if="allBlogs" class="text-secondary" title="Check all of my blogs"> <u>all blogs </u><i class="bi bi-caret-right-fill fs-small"></i> </a>
      </h2>

      <!-- Blogs Collection -->
      <div class="row my-5 justify-content-start align-items-center g-3">

        <div class="col-12 col-md-6 col-xl-4" v-for="i in blogs">
          <a :href="env('/blogs/blog1')" class="bg-extra-abyad shadow-sm p-3 d-flex flex-column rounded">
            <div class="d-flex gap-3">
            
            <img :src="i" alt="blog" class="img-fluid rounded skeleton" width="120">
              <div class="d-flex gap-1 flex-column justify-content-between">
                <h3 class="text-primary bebas fs-4 m-0"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                  dicta? ...</h3>
                <div class="fs-small text-secondary d-flex gap-1 align-items-center">
                  <span class="material-symbols-outlined fs-6">
                    schedule
                  </span>
                  <span class="m-0 pop">Fri 12 March 2023</span>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>

    </section>
    `,
  data() {
    return {
      allBlogs: true,
      blogs: [
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
      ]
    }
  },
  methods: {
    allBlogsLink() {
      if (location.href.includes('blogs')) this.allBlogs = false;
      else {
        this.allBlogs = true;
      }
    },

    env(path) {
      if (location.href.includes('http://127.0.0.1:5500/')) {
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
  },
  mounted() {
    this.allBlogsLink();
  }
})
// ********** BLOGS SECTION COMPONENT **********



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
          <div class="col-12 col-lg-3 d-flex align-items-center justify-content-center gap-3">
            <a href=""><i class="social-media-icon fs-4 bi bi-linkedin text-secondary"></i></a>
            <a href=""><i class="social-media-icon fs-4 bi bi-whatsapp text-secondary"></i></a>
            <a href=""><i class="social-media-icon fs-4 bi bi-github text-secondary"></i></a>
            <a href=""><i class="social-media-icon fs-4 bi bi-youtube text-secondary"></i></a>
            <a href=""><i class="social-media-icon fs-4 bi bi-stack-overflow text-secondary"></i></a>
            <a href=""><i class="social-media-icon fs-4 bi bi-chat-square-dots text-secondary"></i></a>
          </div>
        </div>
      </section>
    </footer>
    `
})
// ********** CONTACT SECTION COMPONENT **********

app.mount('#app')