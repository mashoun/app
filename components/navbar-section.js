export default {
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
          <div class="meeting-btn">
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
            if (location.href.includes('http://127.0.0.1:5502/')) {
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
}