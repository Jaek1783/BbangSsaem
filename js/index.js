function slider(){
  var sliderWrapper = document.getElementsByClassName('container'),
      sliderContainer = document.getElementsByClassName('slider-container'),
      slides = document.getElementsByClassName('slide'),
      slideCount = slides.length,
      currentIndex = 0,
      topHeight = 0,
      timer = undefined,
      pagerHTML ='',
      pager = document.querySelector('.pager'),
      // pagerBtn = document.querySelectorAll('.pager span'),
      navPrev = document.getElementById('prev'),
      navNext = document.getElementById('next');
      var slide = document.querySelector('.slides'),
      slideAll = document.querySelectorAll('.slides li'),
      currentIndex = 0,
      slideAllCount = slideAll.length,
      slideWidth = 100 + '%',
      slideMargin = 0;

      console.log(slideCount);
      // console.log(slideCount);
  //슬라이드 가로로 배열하기
        for(var i = 0;i < slideCount;i++){
          slides[i].style.left = i*100 + '%';
          pagerHTML += '<span data-idx="'+ i +'">'+(i+1)+'</span>';
          pager.innerHTML = pagerHTML;
        }
      var pagerBtn = document.querySelectorAll('.pager span');
          // <span data-idx="0">1</span>
  //슬라이드 이동 함수
    function goToSlide(idx){
    sliderContainer[0].classList.add('animated');
    sliderContainer[0].style.left = idx * -100 + '%';
    currentIndex = idx;
    console.log(currentIndex);
  // 클릭된 그 요소에만 .active 추가
    for(var y=0; y < pagerBtn.length; y++){
      pagerBtn[y].classList.remove('active');
    }
      pagerBtn[idx].classList.add('active');
  }
      goToSlide(0);

  // 자동 슬라이드
      function slideAuto(){
        timer = setInterval(function(){
            var nextIdx = (currentIndex + 1) % slideCount;

            goToSlide(nextIdx);

          },6000);
      }
      slideAuto();
  // pager로 슬라이드 이동하기
  for(var x = 0; x < pagerBtn.length;x++){
    pagerBtn[x].addEventListener('click',function(event){
      console.log(event.target.innerText);
// innerText 요소의내용 반환 A.innerText / A.innerText='B';
// innertHTML 요소의 태그 반환 A.innerHTMl / A.innerHTML='B';
// var pagerNum = event.target.getAttribute('data-idx');
      var pagerNum = event.target.innerText-1;
      goToSlide(pagerNum);
    });
  }
}
function gnb(){
  var sGnb = document.querySelector('.sGnb');

  var gnb = document.querySelector('.gnb');
    // sGnb.style.display="none";
  sGnb.classList.add('animated');
  sGnb.style.left = 100 + '%';
  console.log(sGnb);
  gnb.addEventListener('click',function(){
  sGnb.style.display="block";
  sGnb.style.left = 50 +'%' ;
  });
  var close = document.querySelector('.close');
  close.addEventListener('click',function(){
    sGnb.style.left = 100 + '%';
  });
}
