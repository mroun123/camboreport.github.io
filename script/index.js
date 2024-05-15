//  function show video one
var boxPopup1 = document.getElementById("popup1");
var boxVideo1 = document.getElementById("video1");
function showVideoOne() {
  boxPopup1.style.display = "block";
  boxVideo1.style.display = "flex";
}
//---- function show video two
var boxPopup2 = document.getElementById("popup2");
var boxVideo2 = document.getElementById("video2");
function showVideoTwo() {
  boxPopup2.style.display = "block";
  boxVideo2.style.display = "flex";
}
//---- function show video three
var boxPopup3 = document.getElementById("popup3");
var boxVideo3 = document.getElementById("video3");
function showVideoThree() {
  boxPopup3.style.display = "block";
  boxVideo3.style.display = "flex";
}
// ------ btn close video one
var btnv1 = document.getElementById("btnV1");
btnv1.addEventListener("click", function () {
  boxPopup1.style.display = "none";
  boxVideo1.style.display = "none";
});
// ------ btn close video two
var btnv2 = document.getElementById("btnV2");
btnv2.addEventListener("click", function () {
  boxPopup2.style.display = "none";
  boxVideo2.style.display = "none";
});
// ------ btn close video three
var btnv3 = document.getElementById("btnV3");
btnv3.addEventListener("click", function () {
  boxPopup3.style.display = "none";
  boxVideo3.style.display = "none";
});
//  function stope video
function stopVideo(element) {
  // getting every iframe from the body
  var iframes = element.querySelectorAll("iframe");
  // reinitializing the values of the src attribute of every iframe to stop the YouTube video.
  for (let i = 0; i < iframes.length; i++) {
    if (iframes[i] !== null) {
      var temp = iframes[i].src;
      iframes[i].src = temp;
    }
  }
}
//  function set style to menu
var btnMenu = document.getElementById("menuCheck");
btnMenu.addEventListener("click", function () {
  if (btnMenu.checked == true) {
    document.getElementById("navUl").style.left = "40%";
    document.getElementById("menuIcon1").style.display = "none";
    document.getElementById("menuIcon2").style.display = "flex";
  } else {
    document.getElementById("navUl").style.left = "100%";
    document.getElementById("menuIcon1").style.display = "flex";
    document.getElementById("menuIcon2").style.display = "none";
  }
});
// jquery
$(document).ready(function () {
  // slider
  let SliderHead = [
    {
      Image: "image/Apple-with-AI.jpg",
      txtbtn: "ទូរស័ព្ទ",
      txt: "Apple ជួបពិភាក្សាជាមួយ OpenAI ម្ដងទៀត លើការប្រើប្រាស់ Generative AI សម្រាប់ iOS 18"
    },
    {
      Image: "image/company_energizer.jpg",
      txtbtn: "ទូរស័ព្ទ",
      txt: "Energizer ត្រៀមដាក់បង្ហាញស្មាតហ្វូន​ P28K មានទំហំថ្មធំដល់​ 28,000mAh ឯណោះ"
    },
    {
      Image: "image/HONOR Pad X9.jpg",
      txtbtn: "ថេប្លេត-កុំព្យូទ័រ",
      txt: "ថេប្លេតស៊េរីថ្មី HONOR Pad X9 អេក្រង់ 2K ល្បឿនអេក្រង់ 120Hz ចេញផ្លូវការក្នុងតម្លៃ 249$"
    },
    {
      Image: "image/Sony-Xperia 1vi.jpg",
      txtbtn: "ទូរស័ព្ទ",
      txt: "តម្លៃដាក់លក់របស់ Xperia 1 VI ត្រូវបានលាតត្រដាងក្រៅផ្លូវការកាលពីពេលថ្មីៗនេះ"
    },
    {
      Image: "image/moondrop 01.jpg",
      txtbtn: "ទូរស័ព្ទ",
      txt: "Moondrop MIAD 01 ប្រកាសចេញជាផ្លូវការហើយ ជាមួយរន្ធដោតកាស 4.4mm 4Vrms និង 3.5mm 2Vrms"
    }
  ];
  // get header slide fun
  let numSlideh =0;
  function getSlide() {
    let txtslide = "";
    SliderHead.forEach((item) => {
      txtslide += `
    <div class="card-news-head">
      <a href="#" target="">
        <div class="card-overlay"></div>
        <div class="card-txt">
          <a class="list-phone" href="#">${item["txtbtn"]}</a>
          <div class="txt-card-head">
            <p>
                ${item["txt"]}
            </p>
          </div>
        </div>
        <img src="${item["Image"]}" alt="">
      </a>
    </div>
        `;
      numSlideh++;
    });
    $(".cardHead").append(txtslide);
    // console.log(txtslide);
  }
   getSlide();
  // // end header slider
  // slide change
  let slideShow = $(".card-news-head");
  // console.log(slideShow);
  let indexSH = 0;
  slideShow.hide();
  slideShow.eq(0).show();
  function NextSlideH() {
    slideShow.eq(indexSH).hide();
    indexSH++;
    if (indexSH == numSlideh) {
      indexSH = 0;
    }
    slideShow.eq(indexSH).show();
  }
  //  auto change slide
  let mySlideH=setInterval(function(){
    NextSlideH();
  },5400)
  let mySlideBnH=setInterval(function(){
    NextSlideBnH();
  },6400)
  // mouse hover and stope slide
  $(".cardHead").mouseover(function(){
    clearInterval(mySlideH);
  })
  $(".cardHead").mouseleave(function(){
    mySlideH=setInterval(function(){
      NextSlideH();
    },5400)
  })
  // mouse over on slide Banner Home
  $(".card-banner").mouseover(function(){
    clearInterval(mySlideBnH);
  })
  $(".card-banner").mouseleave(function(){
    mySlideBnH=setInterval(function(){
      NextSlideBnH();
    },6400)
  })
  // end header slider
  // slide banner home
  let BannerHome = [
    {
      ImageBn: "image/Banner we Cambo-report 2.png"
    },
    {
      ImageBn: "image/banner-camboreport4.jpg"
    },
    {
      ImageBn: "image/banner cambo-report3.jpg"
    }
  ];
  function GetSlideBannerHome() {
    let txtslide = "";
    BannerHome.forEach((item) => {
      txtslide += `
          <div class="bannerHome">
            <a href="#">
              <img src="${item["ImageBn"]}" alt="">
            </a>
          </div>
          `;
    });
    $(".card-banner").append(txtslide);
    // console.log(txtslide);
  }
  GetSlideBannerHome();
  // // end header slider
  // slide change
  let sBanHomeSh = $(".bannerHome");
  let numSBnHome = sBanHomeSh.length;
  // console.log(numSBnHome);
  let indexBnH = 0;
  sBanHomeSh.hide();
  sBanHomeSh.eq(0).show();
  function NextSlideBnH() {
    sBanHomeSh.eq(indexBnH).hide();
    indexBnH++;
    if (indexBnH == numSBnHome) {
      indexBnH = 0;
    }
    sBanHomeSh.eq(indexBnH).show();
  }
  // end slide banner
});
