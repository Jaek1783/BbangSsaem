function slider(){
  let sliderWrapper = document.getElementsByClassName('container'),
      sliderContainer = document.querySelector('.slides'),
      slides = document.getElementsByClassName('slide'),
      slideCount = slides.length,
      currentIndex = 0,
      topHeight = 0,
      timer = undefined,
      pagerHTML ='',
      pager = document.querySelector('.pager');
  //페이져 만들기
        for(let i = 0;i < slideCount;i++){
          pagerHTML += '<span data-idx="'+ i +'">'+(i+1)+'</span>';
          pager.innerHTML = pagerHTML;
        }
        makeClone();
        function makeClone(){
          let cloneSlide = slides[0].cloneNode(true);
          sliderContainer.appendChild(cloneSlide);
          // for(let i=0; i<slideCount; i++){}
        }
      let pagerBtn = document.querySelectorAll('.pager span');
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
      for(let y=0; y < pagerBtn.length; y++){
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
            let nextIdx = (currentIndex + 1);
            goToSlide(nextIdx);
          },3000);
      }
      slideAuto();
  // pager로 슬라이드 이동하기
  for(let x = 0; x < pagerBtn.length;x++){
    pagerBtn[x].addEventListener('click',function(event){
// innerText 요소의내용 반환 A.innerText / A.innerText='B';
// innertHTML 요소의 태그 반환 A.innerHTMl / A.innerHTML='B';
// let pagerNum = event.target.getAttribute('data-idx');
      let pagerNum = event.target.innerText-1;
      goToSlide(pagerNum);
    });
  }
}
function gnb(){
  let sGnb = document.querySelector('.sGnb');

  let gnb = document.querySelector('.gnb');
    // sGnb.style.display="none";
  sGnb.classList.add('animated');
  sGnb.style.left = 100 + '%';
  gnb.addEventListener('click',function(){
  sGnb.style.display="block";
  sGnb.style.left = 50 +'%' ;
  });
  let close = document.querySelector('.close');
  close.addEventListener('click',function(){
    sGnb.style.left = 100 + '%';
  });
}
