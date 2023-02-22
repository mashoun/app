const app = Vue.createApp({
    data() {
        return {
            title: 'Mahmoud Mashoun',
            webProjects: 0,
            years: 0,
            views: 0,
            animateCounters: true,
            tagline: '',
            tags: ['Full Stack Web Developer', 'Vuegle Stack Developer', 'Freelance Web Developer'],
            counterYears: 200,
            imgs: [
                './img/placeholder-img.png',
                './img/placeholder-img.png',
                './img/placeholder-img.png',
                './img/placeholder-img.png',
                './img/placeholder-img.png',
                './img/placeholder-img.png',
                './img/placeholder-img.png',
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
        this.animateYears(((parseInt(d.getFullYear())) - 2020), 1000)
        this.animateViews(27, 300)



    }

})

app.mount('#app')