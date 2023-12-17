import{a as I,i as C,P as re,g as H}from"./vendor-5014e6d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const F={trashFavoritesBtn:document.querySelector(".js-exercises-trash-btn"),StartFavoritesBtn:document.querySelector(".js-exercises-start-btn"),exerciseFavorites:document.querySelector(".js-exercise-favorites"),categoryErrorFavorites:document.querySelector(".js-favorites-error")},D=F.exerciseFavorites,oe=F.categoryErrorFavorites;console.log(F.exerciseFavorites);const L="savedExercises";_();function _(){const t=JSON.parse(localStorage.getItem(L))??[];if(t.length===0){console.log("savedExercis"),oe.classList.remove("visually-hidden");return}console.log(t),D.innerHTML=j(t);const e=document.getElementsByClassName("favorite-card-item");for(let o=0;o<e.length;o+=1)console.log(e[o]),e[o].addEventListener("click",r),e[o].addEventListener("click",i);function r(o){const s=o.target.closest(".js-exercises-trash-btn"),n=o.target.closest(".card-item");if(s){const u=n.id;let l=t.findIndex(g=>g._id===`${u}`);if(console.log(l),console.log(t[l]),l>=0){for(let g=0;g<e.length;g+=1)e[g].removeEventListener("click",r),e[g].removeEventListener("click",i);t.splice(l,1),localStorage.removeItem(L),localStorage.setItem(L,JSON.stringify(t))}D.innerHTML=j(t),_()}}function i(o){const s=o.target.closest(".js-exercises-start-btn"),n=o.target.closest(".card-item");if(console.log(window.location.href),s){const u=n.id;let l=t.findIndex(g=>g._id===`${u}`);console.log(l),console.log(t[l]),l>=0&&(console.log(l),localStorage.removeItem(L),localStorage.setItem(L,JSON.stringify(t))),D.innerHTML=j(t),_()}}}function j(t){return t.map(({_id:e,target:r,bodyPart:i,burnedCalories:o,time:s,name:n})=>`
            <li class="card-item favorite-card-item" id=${e}>
                <div class="card-menu">
                <div class="exercises-box">
                    <div class="card-menu-workout">WORKOUT</div>
                    <button class="exercises-trash-btn js-exercises-trash-btn" type="button">
                        <svg
                            class="card-menu-trash-icon"
                            width="16"
                            height="16"
                        >
                            <use href="./img/sprite.svg#icon-trash"></use>
                        </svg>
                    </button>
                </div>

                <div class="card-menu-start">
                    <button class="exercises-start-btn js-exercises-start-btn" type="button">
                        <p class="card-menu-start-text">Start</p>
                        <svg
                            class="card-menu-start-icon"
                            width="16"
                            height="16"
                        >
                            <use href="./img/sprite.svg#icon-arrow-right"></use>
                        </svg>
                    </button>
                </div>
                </div>

                <div class="card-title">
                <div class="card-title-icon-box">
                    <svg
                    class="card-title-icon"
                    width="24"
                    height="24"
                    >
                     <use href="./img/sprite.svg#icon-run"></use>
                    </svg>
                </div>
                <p class="card-title-text">${n}</p>
                </div>

                <div class="card-info">
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Burned calories:
                    <span class="card-info-about-value">${o} / ${s} min</span>
                    </p>
                </div>
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Body part: <span class="card-info-about-value">${i}</span>
                    </p>
                </div>
                <div class="card-info-about">
                    <p class="card-info-about-name">
                    Target: <span class="card-info-about-value">${r}</span>
                    </p>
                </div>
                </div>
            </li>
        `).join("")}(()=>{const t=document.querySelector(".js-mobile-menu"),e=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".mobile-social-box"),o=document.querySelector("body"),s=()=>{const u=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!u),t.classList.toggle("is-open"),o.classList.toggle("disable-scroll")},n=u=>u.forEach(l=>{l.addEventListener("click",s)});e.addEventListener("click",s),r.addEventListener("click",s),n(i)})();const ae=document.querySelector("#upbutton");ae.addEventListener("click",ie);function ie(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>{(window.pageYOffset||document.documentElement.scrollTop)>700?document.getElementById("upbutton").style.display="block":document.getElementById("upbutton").style.display="none"};const q="https://your-energy.b.goit.study/api",T={FILTERS:"filters",EXEECISES:"exercises"},ne={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class P{constructor(e){this.type=e,this.category="Muscles",this.exercise="",this.page=1,this.search=""}setCategory(e){this.category=e}setPage(e){this.page=e}setExercise(e){this.exercise=e}getExercise(){return this.exercise}setSearch(e){this.search=e}async getCategories(){try{return(await I.get(`${q}/filters?filter=${this.category}&page=${this.page}&perPage=12`)).data}catch(e){return console.log(e),e}}async getExercises(){try{const e=await I.get(`${q}/exercises?${ne[this.category]}=${this.exercise}&keyword=${this.search}&page=${this.page}&perPage=12`);return console.log(e.data),e.data}catch(e){return console.log(e),e}}async getQuoteOfTheDay(){try{return(await I.get(`${q}/quote`)).data}catch(e){return console.log(e),e}}async subscription(e){try{return(await I.post(`${q}/subscription`,e)).data}catch(r){return r}}}class ce{constructor(){}getData(e){try{const r=localStorage.getItem(e);return JSON.parse(r)}catch{console.error("Get error: ",err)}}setData(e,r){try{const i=JSON.stringify(r);localStorage.setItem(e,i)}catch{console.error("Set error: ",err)}}removeData(e){try{localStorage.removeItem(e)}catch{console.error("Remove error: ",err)}}}const le=new P,U=new ce,de=document.querySelector(".quote-text-js"),ue=document.querySelector(".quote-author-js");async function ge(){const t=new Date,e=t.getDate(),r=t.getMonth()+1,i=t.getFullYear(),o=`${e}.${r}.${i}`,s=U.getData("quote");if(s&&s.date===o)J(s.data);else try{const n=await le.getQuoteOfTheDay(),u={date:o,data:n};U.setData("quote",u),J(n)}catch(n){console.error("Error fetching the quote:",n)}}function J(t){de.textContent=t.quote,ue.textContent=t.author}ge();const me=new P,X=document.querySelector(".js-footer-form"),m=document.querySelector(".footer-form-btn"),k=document.querySelector('input[type="email"]');function O(t){return/^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(t)}m&&(m.disabled=!0,k.addEventListener("input",()=>{const t=k.value;O(t)?(m.style.backgroundColor="#c6cdd1",m.disabled=!1):(m.style.backgroundColor="#f4f4f4",m.disabled=!0)}),m.addEventListener("mouseover",()=>{const t=k.value;O(t)?m.style.cursor="pointer":m.style.cursor="not-allowed"}),m.addEventListener("mouseout",()=>{m.style.cursor="default"}),X.addEventListener("submit",async t=>{var i,o;t.preventDefault();const e=k.value;if(!O(e)){C.warning({message:"Invalid email address was entered.",position:"topRight"});return}const r={email:e};try{const s=await me.subscription(r);if(console.log("resp",s),((i=s==null?void 0:s.response)==null?void 0:i.status)===409){C.warning({message:"Subscription already exists",position:"topRight"});return}if(((o=s==null?void 0:s.response)==null?void 0:o.status)===400){C.warning({message:"Bad request (invalid request body)",position:"topRight"});return}s!=null&&s.message&&C.success({message:s.message,position:"topRight"})}catch(s){console.log("error",s)}finally{X.reset()}}));const a={paginationBox:document.getElementById("tui-pagination"),categoriesContainer:document.querySelector(".js-categories-container"),categoriesList:document.querySelector(".js-categories-list"),exercise:document.querySelector(".js-exercise"),exerciseDecor:document.querySelector(".js-exercise-decor"),categoryError:document.querySelector(".js-categories-error"),categorySceletonLoader:document.querySelector(".js-sceleton-loader"),search:document.querySelector(".js-search"),exerciseRefresh:document.querySelector(".js-refresh"),searchIcon:document.querySelector(".menu-search-icon"),closeIcon:document.querySelector(".menu-close-icon"),searchBtn:document.querySelector(".menu-search-btn"),searchInput:document.querySelector(".menu-search-input")};a.exerciseRefresh.addEventListener("click",pe);function pe(t){location.reload()}const p="/your-energy/assets/sprite-c1fb1bf2.svg",K=(t,e)=>{const r=t.reduce((i,{filter:o,imgURL:s,name:n})=>(i+=`<li class="categories__card-item js-exercise"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${s}), lightgray -56.383px -2px / 129.575% 103.719% no-repeat"
      data-exercise=${n}>
        <img
          src="${s}"
          alt="${n}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${n}</h2>
        <p class="categories__card-text">${o}</p>
      </li>`,i),"");e.innerHTML=r},W=(t,e)=>{const r=t.reduce((i,{rating:o,target:s,bodyPart:n,burnedCalories:u,name:l,_id:g})=>(i+=`<li class="card-item" id=${g}>
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(o)}.0</p>
          <svg
            id="card-menu-rating-icon"
            class="card-menu-rating-icon"
            width="18"
            height="18"
          >
            <use href="${p}#icon-star"></use>
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
          <use href="${p}#icon-arrow-right"></use>
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
          <use href="${p}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${l}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value">${u} / ...</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value">${n}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value">${s}</div>
      </div>
    </div>
  </li>`,i),"");e.innerHTML=r};class ve{constructor(){this.pagination}init(e,r,i){let o=3;const s={totalItems:r*i,itemsPerPage:i,visiblePages:o,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<span class="tui-page-btn tui-is-selected">{{page}}</span>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};this.pagination=new re(a.paginationBox,s),this.pagination.on("afterMove",async({page:n})=>{if(console.log("service",e),e.type===T.FILTERS){e.setPage(n);const u=await e.getCategories();K(u.results,a.categoriesContainer)}if(e.type===T.EXEECISES){e.setPage(n);const u=await e.getExercises();W(u.results,a.categoriesContainer)}})}}const z=new ve,A=new P(T.FILTERS),x=new P(T.EXEECISES);a.categoriesList.addEventListener("click",xe);a.search.addEventListener("submit",t=>ye(t,$));a.searchInput.addEventListener("input",t=>fe(t,$));a.searchInput.addEventListener("focus",he);a.searchInput.addEventListener("blur",V);const $={searchQuery:""};a.closeIcon&&a.closeIcon.addEventListener("click",Z);document.addEventListener("click",function(t){t.target.closest("#menu-close-icon")&&Z(t)});function fe(t,e){const r=t.currentTarget.value.trim();e.searchQuery!==r&&(a.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-search"></use>
      </svg>
    `)}function he(t){t.target.value.trim()&&(t.target.placeholder="")}function V(t){t.target.value.trim()||(t.target.placeholder="Search")}async function Z(t){a.searchBtn.innerHTML=`
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-search"></use>
      </svg>
    `,a.search.reset();const e=new FormData(a.search);$.searchQuery=e.get("search").trim();const r=x.getExercise();x.setSearch($.searchQuery),$.searchQuery===void 0&&V(t),await N(r),a.categoryError.classList.add("visually-hidden")}async function ye(t,e){t.preventDefault();const r=new FormData(t.currentTarget);e.searchQuery=r.get("search").trim(),e.searchQuery!==""&&(a.searchBtn.innerHTML=`
      <svg id="menu-close-icon" class="menu-close-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    `),a.categoryError.classList.add("visually-hidden");const i=x.getExercise();return x.setSearch(e.searchQuery),await N(i),e.searchQuery}async function xe(t){if(t.target.nodeName!=="LI")return;a.exercise.textContent="",a.exerciseDecor.classList.add("visually-hidden"),a.categoryError.classList.add("visually-hidden"),a.search.classList.add("visually-hidden");const e=t.currentTarget.querySelector(".current");e&&e.classList.remove("current"),t.target.classList.add("current");const r=t.target.textContent;A.setCategory(r),x.setCategory(r),await ee()}async function ee(){const t=await A.getCategories();if(a.categorySceletonLoader.classList.add("visually-hidden"),K(t.results,a.categoriesContainer),t!=null&&t.totalPages||a.categoryError.classList.remove("visually-hidden"),t.totalPages<=1){a.paginationBox.classList.add("visually-hidden");return}a.paginationBox.classList.remove("visually-hidden"),z.init(A,t.totalPages,t.perPage)}ee();a.categoriesContainer.addEventListener("click",be);async function be(t){if(t.target.closest(".js-exercise")){const e=t.target.closest(".js-exercise").dataset.exercise;a.exercise.textContent=e,a.exerciseDecor.classList.remove("visually-hidden"),a.search.classList.remove("visually-hidden"),await N(e);return}}async function N(t){x.setExercise(t);const e=await x.getExercises();if(W(e.results,a.categoriesContainer),e!=null&&e.totalPages||a.categoryError.classList.remove("visually-hidden"),e.totalPages<=1){a.paginationBox.classList.add("visually-hidden");return}a.paginationBox.classList.remove("visually-hidden"),z.init(x,e.totalPages,e.perPage)}const Y=["#Sport","#Healthy","#Workout","#Diet"],G=100,Ee=document.querySelectorAll(".hero-item-text");let B=0;function te(){if(B<Y.length){const t=Y[B],e=Ee[B];let r=0;const i=setInterval(function(){r<t.length?(e.textContent+=t[r],r++):(clearInterval(i),B++,setTimeout(te,G))},G)}}te();const Se={root:null,rootMargin:"0px",threshold:0},R=document.querySelector(".footer-title-span"),we=new IntersectionObserver(Le,Se);we.observe(R);function Le(t,e){t.forEach(r=>{r.isIntersecting&&(H.set(R,{clearProps:"all"}),H.to(R,{duration:2,opacity:1,x:0,rotationX:360,delay:0}))})}function Ie(){const t=document.getElementsByClassName("categories__cards-list"),e=document.getElementById("modal");let r=!1;function i(){document.body.style.overflow="hidden"}function o(){document.body.style.overflow=""}function s(){e.style.display="flex",i(),r=!0}function n(){e.style.display="none",o(),r=!1}document.querySelector(".modal-main");const u=document.getElementsByClassName("modal-close-btn")[0];let l=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];u&&(u.onclick=function(){n(),localStorage.removeItem("currentExercise")}),window.onclick=function(c){c.target==e&&(n(),localStorage.removeItem("currentExercise"))},document.addEventListener("keydown",function(c){c.key==="Escape"&&r&&(n(),localStorage.removeItem("currentExercise"))});for(let c=0;c<t.length;c+=1)t[c].addEventListener("click",function(v){const f=v.target.closest(".card-menu-start"),b=v.target.closest(".card-item");if(f){const E=b.id;s();const h=`https://your-energy.b.goit.study/api/exercises/${E}`;I.get(h).then(d=>{if(d)return localStorage.setItem("currentExercise",JSON.stringify(d.data)),d.data}).then(d=>{console.log(d),g(d);const y=document.getElementById("fav-btn");if(y){const Q=l.some(w=>w._id===d._id);y.querySelector(".modal-heart-icon use").setAttribute("href",Q?`${p}#icon-trash`:`${p}#icon-heart`),y.querySelector(".modal-btn-text").textContent=Q?"Remove from favorites":"Add to favorites",y.addEventListener("click",function(){const w=l.some(M=>M._id===d._id);w?l=l.filter(M=>M._id!==d._id):l.push(d),localStorage.setItem("savedExercises",JSON.stringify(l)),y.querySelector(".modal-btn-text").textContent=w?"Add to favorites":"Remove from favorites",y.querySelector(".modal-heart-icon use").setAttribute("href",w?`${p}#icon-heart`:`${p}#icon-trash`)})}}).catch(d=>{console.error("There was a problem with the Axios request:",d)})}});function g(c){const S=document.getElementById("cardDetails");console.log("exerciseDetailsContainer",S);let v=null;c.gifUrl?v=`<div class="modal-gif-wrapper">
        <img class="gif" src="${c.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:v=`<div class="modal-gif-wrapper">
        <img class="modal-gif" src="" alt="Exercise IMG">
        <div class="modal-gif-overlay"></div>
        </div>`;const f=`<p class='modal-card-title'>${c.name.charAt(0).toUpperCase()+c.name.slice(1)}</p>`,b=se(Math.round(c.rating*10)/10),E=`<div class='modal-rating-container'>
      <span class="modal-rating">${c.rating.toString().includes(".")?Math.round(c.rating*10)/10:c.rating+".0"}</span>
      ${b}
      </div>`,h=`<div class="modal-details-container">
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Target</p>
      <p class="modal-details-info">${c.target.charAt(0).toUpperCase()+c.target.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title body-part">Body Part</p>
      <p class="modal-details-info">${c.bodyPart.charAt(0).toUpperCase()+c.bodyPart.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Equipment</p>
      <p class="modal-details-info">${c.equipment.charAt(0).toUpperCase()+c.equipment.slice(1)}</p>
      </div>
      <div class="modal-details-wrapper">
      <p class="modal-details-title">Popular</p>
      <p class="modal-details-info">${c.popularity}</p>
      </div>
      </div>
      <div class="modal-details-wrapper modal-calories">
      <p class="modal-details-title">Burned Calories</p>
      <p class="modal-details-info">${c.burnedCalories}</p>
      </div>`,d=`<div class="modal-description">${c.description}</div>`,y=`<div class="modal-btns-wrapper">
      <button class="modal-btn modal-fav-btn" id="fav-btn">
      <span class="modal-btn-text modal-fav-btn-text">Add to favorites</span>
      <svg class="modal-heart-icon" aria-label="logo icon">
      <use href="${p}#icon-heart"></use>
      </svg>
      </button>
      <button class="modal-btn modal-rating-btn">
      <span class="modal-btn-text">Give a rating</span>
      </button>
      </div>`;S.innerHTML=`${v+`<div class="modal-content-wrapper">${f+E+h+d+y}</div>`}`}function se(c){const S=`<div class="modal-star-wrapper"><svg class="modal-star-icon modal-colored-star">
      <use href="${p}#icon-star"></use>
      </svg></div>`,v=`<div class="modal-star-wrapper"><svg class="modal-star-icon">
      <use href="${p}#icon-star"></use>
      </svg></div>`;let f="",b=Math.floor(c),E=c-b;for(let h=0;h<5;h++)if(h<b)f+=S;else if(h===b&&E>0){const d=Math.round(E*100);f+=`<div class="modal-star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${d}%, rgba(244, 244, 244, 0.2) ${d}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${d}%, rgba(244, 244, 244, 0.2) ${d}%);"><svg class="modal-star-icon modal-colored-star" >
          <use href="${p}#icon-star"></use>
          </svg></div>`}else f+=v;return`${f}`}}window.onload=function(){document.querySelector(".home__container")&&Ie()};
//# sourceMappingURL=modal-5fbab92a.js.map
