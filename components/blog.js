export default {
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
    }

}