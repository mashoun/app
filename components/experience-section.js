export default {
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