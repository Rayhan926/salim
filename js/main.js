$(document).ready(function(){$(".js-work-section").waypoint(function(e){"down"==e?$("nav").addClass("sticky"):$("nav").removeClass("sticky")}),$(".switch-wraper").click(function(){$(".switch-1").toggleClass("move"),$(".price-card-1").toggleClass("price-1-opacity"),$(".price-card-2").toggleClass("price-2-opacity")}),$(".f-email").click(function(){$(".enter").toggleClass("show")}),$(".nav-icon").click(function(){$(".overly-nav").addClass("open-overly")}),$(".close-icon").click(function(){$(".overly-nav").removeClass("open-overly")}),$(".overly-nav .nav-overly-content a").click(function(){$(".overly-nav").removeClass("open-overly")}),$(".featured-work .button-group button").click(function(e){$(".featured-work .button-group button").removeClass("active"),e.target.classList.add("active");let t=$(e.target).attr("data-filter");return $(".featured-work .go-isotope").isotope({filter:t}),!1}),$(".carousel-box").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:5e3,dots:!0,responsive:{0:{items:1},420:{items:1}}}),$(".my-card-header").click(function(){$(this).next(".card-body").hasClass("active")?($(this).next(".card-body").removeClass("active").slideUp(),$(this).children("i").removeClass("revrotate").addClass("rotate")):($(".card .card-body").removeClass("active").slideUp(),$(".card .my-card-header i").removeClass("revrotate").addClass("rotate"),$(this).next(".card-body").addClass("active").slideDown(),$(this).children("i").removeClass("rotate").addClass("revrotate"))})});let url="https://rayhan926.github.io/popup/popup.json";fetch(url).then(e=>e.json()).then(function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e.styles)),document.querySelector("body").appendChild(t);let o=document.createElement("div");o.classList.add("s35_popup_parent"),document.querySelector("body").append(o),setTimeout(()=>{document.querySelector(".s35_popup_parent").innerHTML=e.salim},1500)}),document.addEventListener("click",function(e){"s35_close"==e.target.classList&&document.querySelector(".s35_popup_wrap").classList.add("s35_hide_popup")});