//////////   Nav Bar start /////////

const navBtn = document.querySelector("#nav-btn");
const ulList = document.querySelector("#ul-list");
let display = true;
navBtn.addEventListener("click", () => {
  if (display === true) {
    display = false;
    ulList.style.height = "300px";
  } else {
    display = true;
    ulList.style.height = "0";
  }
});

//////////   Nav Bar end //////////
//////////   section 1  start//////////
const all = document.querySelector("#all");
const btn_1 = document.querySelector("#img-1");
const btn_2 = document.querySelector("#img-2");
const btn_3 = document.querySelector("#img-3");
const para = document.querySelector("#update");
const highlight = document.querySelector(".highlight");

btn_1.addEventListener("click", () => {
  highlight.style.color = `#FF5B2B`;
  btn_1.src="./images/stars-asket-orange.png"
  btn_2.src="./images/stars-padel-plan.png"
  btn_3.src="./images/stars-futbol-plan.png"

  para.innerHTML = '<p class="text-center text-[16px] text-white sm:px-10 sm:text-[18px] md:text-[20px] md:px-20 lg:w-[793px]">It consists of a <span class = "text-[#FF5B2B] highlight">Basketball Tournament</span> with teams made up of content creators from the local scene, who will compete in scheduled matches.</p>'
});

btn_2.addEventListener("click", () => {
  highlight.style.color = `#E4003F`;
  btn_1.src="./images/stars-asket-plan.png"
  btn_2.src="./images/stars-padel-red.png"
  btn_3.src="./images/stars-futbol-plan.png"

  para.innerHTML = '<p class="text-center text-[16px] text-white sm:px-10 sm:text-[18px] md:text-[20px] md:px-20 lg:w-[793px]">Our main event consists of a <span class="text-custom-red highlight">Paddle</span> tournament featuring prominent figures from the local content creators scene.STARS PADEL&reg; also had a presence at large-scale events such as the Argentina Game Show in its last two editions,with sponsorship from major brands.</p>'
});




btn_3.addEventListener("click", () => {
  highlight.style.color = `#11BF36`;
  btn_1.src="./images/stars-asket-plan.png"
  btn_2.src="./images/stars-padel-plan.png"
  btn_3.src="./images/stars-futbol-green.png"

  para.innerHTML = '<p class="text-center text-[16px] text-white sm:px-10 sm:text-[18px] md:text-[20px] md:px-20 lg:w-[793px]">It consists of a <span class="text-[#11BF36] highlight">Football Tournament</span> with teams made up of content creators from the local scene, who will compete in scheduled matches. Our experience in "La Liga de Streamers" ensures we have a team ready to bring this tournament to life.</p>'
});

//////////   section 1 end//////////
