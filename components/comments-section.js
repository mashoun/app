export default {
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
                "blogTitle": this.index
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
}