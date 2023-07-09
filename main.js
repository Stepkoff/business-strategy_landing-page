// navbar
const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('#navbar')
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('navbar--active')
  menuIcon.classList.toggle('menu--active')
  document.body.classList.toggle('blockScroll')
})
// end of navbar

// about us video

const video = document.querySelector('.aboutUs__video-elem')
const videoPlayBtn = document.querySelector('.aboutUs__video-play-btn')
const videoBar = document.querySelector('.aboutUs__video-controls-bar')

const playPause = () => {
  if(video.paused) {
    video.play()
    videoPlayBtn.children[0].className = 'fas fa-pause-circle'
    video.style.opacity = ".7"
  } else {
    video.pause()
    videoPlayBtn.children[0].className = 'fas fa-play-circle'
    video.style.opacity = ".3"
  }
}
videoPlayBtn.addEventListener('click', () => {
  playPause()
})
video.addEventListener('timeupdate', () => {
  const barWidth = Math.ceil(video.currentTime / video.duration * 100)
  videoBar.style.width = `${barWidth}%`
  if(video.ended) {
    videoPlayBtn.children[0].className = 'fas fa-play-circle'
    video.style.opacity = ".3"
  }
})
// end of about us video

// pricing swiper
const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }
});

// end of pricing swiper