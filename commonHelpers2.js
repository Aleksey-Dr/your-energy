import{A as L,a as B}from"./assets/footer-2795bf51.js";import{P as j,a as R}from"./assets/vendor-01a1680f.js";const s={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh"),searchIcon:document.querySelector(".menu-search-icon"),closeIcon:document.querySelector(".menu-close-icon"),searchBtn:document.querySelector(".menu-search-btn"),searchInput:document.querySelector(".menu-search-input")};s.exerciseRefresh.addEventListener("click",Q);function Q(e){location.reload()}const o="/your-energy/assets/sprite-c1fb1bf2.svg",k=(e,t)=>{const r=e.reduce((c,{filter:f,imgURL:l,name:n})=>(c+=`<li class="categories__card-item js-exercise"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${l}), lightgray -56.383px -2px / 129.575% 103.719% no-repeat"
      data-exercise=${n}>
        <img
          src="${l}"
          alt="${n}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${n}</h2>
        <p class="categories__card-text">${f}</p>
      </li>`,c),"");t.innerHTML=r},q=(e,t)=>{const r=e.reduce((c,{rating:f,target:l,bodyPart:n,burnedCalories:d,name:u,_id:w})=>(c+=`<li class="card-item" id=${w}>
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(f)}.0</p>
          <svg
            id="card-menu-rating-icon"
            class="card-menu-rating-icon"
            width="18"
            height="18"
          >
            <use href="${o}#icon-star"></use>
          </svg>
        </div>
      </div>
      <div class="card-menu-start">
        <p class="card-menu-start-text">Start</p>
        <svg
          id="card-menu-start-icon"
          class="card-menu-start-icon"
          width="16"
          height="16"
        >
          <use href="${o}#icon-arrow-right"></use>
        </svg>
      </div>
    </div>
    <div class="card-title">
      <div class="card-title-icon-box">
        <svg
          id="card-title-icon"
          class="card-title-icon"
          width="24"
          height="24"
        >
          <use href="${o}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${u}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value">${d} / ...</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value">${n}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value">${l}</div>
      </div>
    </div>
  </li>`,c),"");t.innerHTML=r};class H{constructor(){this.pagination}init(t,r,c){let f=3;const l={totalItems:r*c,itemsPerPage:c,visiblePages:f,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new j(s.paginationBox,l),this.pagination.on("afterMove",async({page:n})=>{if(console.log("service",t),t.type===L.FILTERS){t.setPage(n);const d=await t.getCategories();k(d.results,s.categoriesContainer)}if(t.type===L.EXEECISES){t.setPage(n);const d=await t.getExercises();q(d.results,s.categoriesContainer)}})}}const T=new H,$=new B(L.FILTERS),h=new B(L.EXEECISES);s.categoriesList.addEventListener("click",N);s.search.addEventListener("submit",e=>F(e,S));s.searchInput.addEventListener("input",e=>O(e,S));s.searchInput.addEventListener("focus",U);s.searchInput.addEventListener("blur",M);const S={searchQuery:""};s.closeIcon&&s.closeIcon.addEventListener("click",_);document.addEventListener("click",function(e){e.target.closest("#menu-close-icon")&&_(e)});function O(e,t){const r=e.currentTarget.value.trim();t.searchQuery!==r&&(s.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-search"></use>
      </svg>
    `)}function U(e){e.target.value.trim()&&(e.target.placeholder="")}function M(e){e.target.value.trim()||(e.target.placeholder="Search")}async function _(e){s.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-search"></use>
      </svg>
    `,s.search.reset();const t=new FormData(s.search);S.searchQuery=t.get("search").trim();const r=h.getExercise();h.setSearch(S.searchQuery),S.searchQuery===void 0&&M(e),await C(r),s.categoryError.classList.add("visually-hidden")}async function F(e,t){e.preventDefault();const r=new FormData(e.currentTarget);t.searchQuery=r.get("search").trim(),t.searchQuery!==""&&(s.searchBtn.innerHTML=`
      <svg id="menu-close-icon" class="menu-close-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    `),s.categoryError.classList.add("visually-hidden");const c=h.getExercise();return h.setSearch(t.searchQuery),await C(c),t.searchQuery}async function N(e){if(e.target.nodeName!=="LI")return;s.exercise.textContent="",s.exerciseDecor.classList.add("visually-hidden"),s.categoryError.classList.add("visually-hidden"),s.search.classList.add("visually-hidden");const t=e.currentTarget.querySelector(".current");t&&t.classList.remove("current"),e.target.classList.add("current");const r=e.target.textContent;$.setCategory(r),h.setCategory(r),await A()}async function A(){const e=await $.getCategories();if(s.categorySceletonLoader.classList.add("visually-hidden"),k(e.results,s.categoriesContainer),e!=null&&e.totalPages||s.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){s.paginationBox.classList.add("visually-hidden");return}s.paginationBox.classList.remove("visually-hidden"),T.init($,e.totalPages,e.perPage)}A();s.categoriesContainer.addEventListener("click",G);async function G(e){if(e.target.closest(".js-exercise")){const t=e.target.closest(".js-exercise").dataset.exercise;s.exercise.textContent=t,s.exerciseDecor.classList.remove("visually-hidden"),s.search.classList.remove("visually-hidden"),await C(t);return}}async function C(e){h.setExercise(e);const t=await h.getExercises();if(q(t.results,s.categoriesContainer),t!=null&&t.totalPages||s.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){s.paginationBox.classList.add("visually-hidden");return}s.paginationBox.classList.remove("visually-hidden"),T.init(h,t.totalPages,t.perPage)}function J(){const e=document.getElementsByClassName("categories__cards-list"),t=document.getElementById("modal");let r=!1;function c(){document.body.style.overflow="hidden"}function f(){document.body.style.overflow=""}function l(){t.style.display="flex",c(),r=!0}function n(){t.style.display="none",f(),r=!1}document.querySelector(".modal-main");const d=document.getElementsByClassName("modal-close-btn")[0];let u=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];d&&(d.onclick=function(){n(),localStorage.removeItem("currentExercise")}),window.onclick=function(a){a.target==t&&(n(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(a){a.key==="Escape"&&r&&(n(),localStorage.removeItem("currentExercise"))});for(let a=0;a<e.length;a+=1)e[a].addEventListener("click",function(g){const m=g.target.closest(".card-menu-start"),y=g.target.closest(".card-item");if(m){const x=y.id;l();const p=`https://your-energy.b.goit.study/api/exercises/${x}`;R.get(p).then(i=>{if(i)return localStorage.setItem("currentExercise",JSON.stringify(i.data)),i.data}).then(i=>{console.log(i),w(i);const v=document.getElementById("fav-btn");if(v){const P=u.some(b=>b._id===i._id);v.querySelector(".modal-heart-icon use").setAttribute("href",P?`${o}#icon-trash`:`${o}#icon-heart`),v.querySelector(".modal-btn-text").textContent=P?"Remove from favorites":"Add to favorites",v.addEventListener("click",function(){const b=u.some(I=>I._id===i._id);b?u=u.filter(I=>I._id!==i._id):u.push(i),localStorage.setItem("savedExercises",JSON.stringify(u)),v.querySelector(".modal-btn-text").textContent=b?"Add to favorites":"Remove from favorites",v.querySelector(".modal-heart-icon use").setAttribute("href",b?`${o}#icon-heart`:`${o}#icon-trash`)})}}).catch(i=>{console.error("There was a problem with the Axios request:",i)})}});function w(a){const E=document.getElementById("cardDetails");console.log("exerciseDetailsContainer",E);let g=null;a.gifUrl?g=`<div class="modal-gif-wrapper">
        <img class="gif" src="${a.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:g=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const m=`<p class='modal-card-title'>${a.name.charAt(0).toUpperCase()+a.name.slice(1)}</p>`,y=D(Math.round(a.rating*10)/10),x=`<div class='modal-rating-container'>
      <span class="modal-rating">${a.rating.toString().includes(".")?Math.round(a.rating*10)/10:a.rating+".0"}</span>
      ${y}
      </div>`,p=`<div class="modal-details-container">
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Target</p>
      <p class="modal-details-info">${a.target.charAt(0).toUpperCase()+a.target.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title body-part">Body Part</p>
      <p class="modal-details-info">${a.bodyPart.charAt(0).toUpperCase()+a.bodyPart.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Equipment</p>
      <p class="modal-details-info">${a.equipment.charAt(0).toUpperCase()+a.equipment.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Popular</p>
      <p class="modal-details-info">${a.popularity}</p>
      </div>
      </div>
      <div class="modal-details-wrapper modal-calories">
      <p class="modal-details-title">Burned Calories</p>
      <p class="modal-details-info">${a.burnedCalories}</p>
      </div>`,i=`<div class="modal-description">${a.description}</div>`,v=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="${o}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;E.innerHTML=`${g+`<div class="modal-content-wrapper">${m+x+p+i+v}</div>`}`}function D(a){const E=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${o}#icon-star"></use>
      </svg></div>`,g=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${o}#icon-star"></use>
      </svg></div>`;let m="",y=Math.floor(a),x=a-y;for(let p=0;p<5;p++)if(p<y)m+=E;else if(p===y&&x>0){const i=Math.round(x*100);m+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${i}%, rgba(244, 244, 244, 0.2) ${i}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${i}%, rgba(244, 244, 244, 0.2) ${i}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${o}#icon-star"></use>
          </svg></div>`}else m+=g;return`${m}`}}window.onload=function(){document.querySelector(".home__container")&&J()};
//# sourceMappingURL=commonHelpers2.js.map
