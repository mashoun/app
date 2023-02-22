console.log('animation is running...')
document.addEventListener('scroll', () => {
    if(window.scrollY >= 0.1){
        document.getElementById('home').style.position = 'fixed'
        document.getElementById('home').style.top = '0'
        document.getElementById('home').style.left = '0'
    }else{
        
        document.getElementById('home').style.position = 'static'
    }
})