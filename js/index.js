function slider(){
  var sliderWrapper = document.getElementsByClassName('container'),
      sliderContainer = document.querySelector('.slides'),
      slides = document.getElementsByClassName('slide'),
      slideCount = slides.length,
      currentIndex = 0,
      topHeight = 0,
      timer = undefined,
      pagerHTML ='',
      pager = document.querySelector('.pager');
  //페이져 만들기
        for(var i = 0;i < slideCount;i++){
          // slides[i].style.left = i*100 + '%';
          pagerHTML += '<span data-idx="'+ i +'">'+(i+1)+'</span>';
          pager.innerHTML = pagerHTML;
        }
        makeClone();
        function makeClone(){
          const cloneSlide = slides[0].cloneNode(true);
          sliderContainer.appendChild(cloneSlide);
          // for(var i=0; i<slideCount; i++){}
        }
      var pagerBtn = document.querySelectorAll('.pager span');
          // <span data-idx="0">1</span>
  //슬라이드 이동 함수
    function goToSlide(idx){
    sliderContainer.style.left = idx*-100 + '%';
    currentIndex = idx;
    sliderContainer.classList.add('animated');
    if(currentIndex == slideCount){
      setTimeout(function(){
        sliderContainer.classList.remove('animated');
        sliderContainer.style.left = 0 + '%';
        currentIndex = 0;
      },500);
    }
      // 클릭된 그 요소에만 .active 추가
      console.log(pagerBtn);
      for(var y=0; y < pagerBtn.length; y++){
      pagerBtn[y].classList.remove('active');
    }if(idx==0){
      pagerBtn[idx].classList.add('active');
    }if(idx==1){
      pagerBtn[idx].classList.add('active');
    }if(idx==2){
      pagerBtn[idx-2].classList.add('active');
    }
  }
      goToSlide(0);

  // 자동 슬라이드
      function slideAuto(){
        timer = setInterval(function(){
            var nextIdx = (currentIndex + 1);
            goToSlide(nextIdx);
            console.log(currentIndex, slideCount);
          },3000);
      }
      slideAuto();
  // pager로 슬라이드 이동하기
  for(var x = 0; x < pagerBtn.length;x++){
    pagerBtn[x].addEventListener('click',function(event){
// innerText 요소의내용 반환 A.innerText / A.innerText='B';
// innertHTML 요소의 태그 반환 A.innerHTMl / A.innerHTML='B';
// var pagerNum = event.target.getAttribute('data-idx');
      var pagerNum = event.target.innerText-1;
      goToSlide(pagerNum);
      console.log(pagerNum);
    });
  }
}
function gnb(){
  var sGnb = document.querySelector('.sGnb');

  var gnb = document.querySelector('.gnb');
    // sGnb.style.display="none";
  sGnb.classList.add('animated');
  sGnb.style.left = 100 + '%';
  gnb.addEventListener('click',function(){
  sGnb.style.display="block";
  sGnb.style.left = 50 +'%' ;
  });
  var close = document.querySelector('.close');
  close.addEventListener('click',function(){
    sGnb.style.left = 100 + '%';
  });
}
