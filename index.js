function slider(){
  var sliderWrapper = document.getElementsByClassName('container'),
      sliderContainer = document.getElementsByClassName('slider-container'),
      slides = document.getElementsByClassName('slide'),
      slideCount = slides.length,
      currentIndex = 0,
      topHeight = 0,
      timer = undefined,
      navPrev = document.getElementById('prev'),
      navNext = document.getElementById('next');

      console.log(slideCount);
      // console.log(slideCount);
      // 슬라이더의 높이구하기
      topHeight = slides[0].offsetHeight;
      console.log(topHeight);
      // sliderWrapper[0].style.height = topHeight + 'px';
      sliderContainer[0].style.height = topHeight + 'px';
      //슬라이드 가로로 배열하기
      makeClone();
      function makeClone(){
        for(var i = 0;i < slideCount;i++){
          slides[i].style.left = i*100 + '%';
          var cloneSlide = slides[i].cloneNode(true);
          cloneSlide.classList.add('clone');
          sliderContainer[0].appendChild(cloneSlide);
        }
      }
    function goToSlide(idx){
    sliderContainer[0].classList.add('animated');
    sliderContainer[0].style.left = idx * -100 + '%';
    currentIndex = idx;
  }
    // 버튼 클릭시
      navPrev.addEventListener('click',function(ev){
        navNext.classList.remove('click')
        this.classList.add('click');
        ev.preventDefault();
        goToSlide(currentIndex - 1);
      });
      navNext.addEventListener('click',function(ev){
        navPrev.classList.remove('click')
        this.classList.add('click');
        ev.preventDefault();
        goToSlide(currentIndex + 1);
      });
      goToSlide(0);

      // 자동 슬라이드
      function slideAuto(){
        timer = setInterval(function(){
            var nextIdx = (currentIndex + 1) % slideCount;

            goToSlide(nextIdx);

          },4000);
      }
      slideAuto();
// // 마우스 할 일
//       sliderWrapper[0].addEventListener('mouseenter',function(){
//         clearInterval(timer);
//       });
//       sliderWrapper[0].addEventListener('mouseleave',function(){
//         slideAuto();
//       });
}
