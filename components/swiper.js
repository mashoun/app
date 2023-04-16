import 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js'
export default {
    template:
        /*html */
        `
    <figure class="swiper mt-3">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="i in imgs">
              <div class="swiper-zoom-container skeleton rounded">
                  <img :src="i.src" :alt="i.alt" class="img-fluid rounded skeleton object-fit-cover" width="1920" height="1080">
              </div>
          </div>
      </div>
      <div class="swiper-pagination position-static mt-2"></div>
    </figure>
    
    `,
    props: ['imgs'],
    mounted(){
        
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
    }
}