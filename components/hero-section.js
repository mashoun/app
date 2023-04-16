export default {
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
    
                <div class="d-flex flex-wrap justify-content-start justify-content-lg-between align-items-center gap-2">
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
}