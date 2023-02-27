const app = Vue.createApp({
  data() {
    return {
      title: 'Blog1',
      comments:[
        {
          email:'user@domain.com',
          show:true,
          id:'comment-1',
          username:'user1',
          date:'x-x-2023',
          comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis!'
        },
        {
          email:'user@domain.com',
          show:false,
          id:'comment-2',
          username:'user2',
          date:'x-x-2023',
          comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis!'
        },
        {
          email:'user@domain.com',
          show:false,
          id:'comment-3',
          username:'user3',
          date:'x-x-2023',
          comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis!'
        },
        {
          email:'user@domain.com',
          show:false,
          id:'comment-4',
          username:'user4',
          date:'x-x-2023',
          comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis!'
        },
        {
          email:'user@domain.com',
          show:false,
          id:'comment-5',
          username:'user5',
          date:'x-x-2023',
          comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sit ut repellendus hic sed molestias eum ea architecto blanditiis deserunt facilis assumenda asperiores libero sunt quo, distinctio esse in vitae.'
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

    show(x){
      if(x) return ' show '
      else return ''
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
  }
})


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
            <h6 class="col-12 col-lg-7 col-xl-8 fs-4 pop text-abyad text-center text-lg-start m-0">Mahmoud Mashoun</h6>
            <div class="col-12 col-lg-3 d-flex align-items-center justify-content-center gap-3">
              <a href=""><i class="social-media-icon fs-4 bi bi-share-fill text-secondary"></i></a>
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
// ********** CONTACT SECTION COMPONENT **********

app.mount('#app')