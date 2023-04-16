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
    
    var swiper = new Swiper('.swiper', {
      spaceBetween: 20,
      loop: true,
      zoom: true,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },


})

import navbar from '../components/navbar-section.js'
import hero from '../components/hero-section.js'
import experience from '../components/experience-section.js'
import blogs from '../components/blogs-section.js'
import footer from '../components/footer-section.js'
import blog from '../components/blog.js'
import comments from '../components/comments-section.js'
import swiper from '../components/swiper.js'


app.component('navbar-section',navbar)
app.component('hero-section', hero)
app.component('experience-section', experience)
app.component('blogs-section', blogs)
app.component('footer-section', footer)
app.component('blog', blog)
app.component('comments', comments)
app.component('swiper', swiper)

app.mount('#app')