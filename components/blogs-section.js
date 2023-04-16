export default {
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
    },
    mounted() {
        this.allBlogsLink();
    }
}