document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// menu sticky
// Not a ton of code, but hard to
const nav = document.querySelector(".fixed-menu, .documentation-menu");
let topOfNav = nav.offsetTop;
function fixNav() {
  if (window.scrollY > topOfNav) {
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixNav);

// mega menu active class
var navbarItems = document.querySelectorAll(".navbar-item");
navbarItems.forEach(navbarItem => {
  navbarItem.addEventListener("click", function() {
    var megamenues = document.querySelectorAll(
      ".navbar-item > .ac-megamenu , .navbar-item > .ac-dropdown"
    );
    // remove is-active class from all the megamenus except the navbar item that was clicked
    megamenues.forEach(megamenu => {
      // toggle classes
      if (megamenu.parentElement === navbarItem)
        megamenu.classList.toggle("is-active");
      else megamenu.classList.remove("is-active");
    });
  });
});

//bulma carousel
bulmaCarousel.attach("#carousel-demo", {
  slidesToScroll: 1,
  slidesToShow: 1,
  infinite: true,
  autoplay: false
});

// For FAQ Collaps Page
const accordionItem = document.querySelectorAll(".accordion-item");
const onClickAccordionHeader = e => {
  if (e.currentTarget.parentNode.classList.contains("active")) {
    e.currentTarget.parentNode.classList.remove("active");
  } else {
    Array.prototype.forEach.call(accordionItem, e => {
      e.classList.remove("active");
    });
    e.currentTarget.parentNode.classList.add("active");
  }
};
const init = () => {
  Array.prototype.forEach.call(accordionItem, e => {
    e.querySelector(".accordion-header").addEventListener(
      "click",
      onClickAccordionHeader,
      false
    );
  });
};
document.addEventListener("DOMContentLoaded", init);

// Table Of Content
// go the the section smoothly when click on a table-of-content item
const goToASectionSmoothly = () => {
  const tocItems = document.querySelectorAll("#TableOfContents a");
  tocItems.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      // go to the target section smoothly
      const targetEl = document.querySelector(e.currentTarget.hash);
      const pos = targetEl.offsetTop;
      window.scrollTo({
        top: pos,
        behavior: "smooth"
      });
    });
  });
};

// add .active dynamically to TOC
const spyScrolling = () => {
  const allHeaders = document.querySelectorAll("h1, h2, h3, h4");

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;
    for (let s in allHeaders) {
      if (
        allHeaders.hasOwnProperty(s) &&
        allHeaders[s].offsetTop <= scrollPos + 100
      ) {
        const id = allHeaders[s].id;
        if (id) {
          document.querySelectorAll("#TableOfContents a").forEach(a => {
            if (`#${id}` === a.hash) {
              a.classList.add("active");
            } else {
              a.classList.remove("active");
            }
          });
        }
      }
    }
  };
};

goToASectionSmoothly();
spyScrolling();

// docs page left sidebar first item font-size
document.addEventListener("DOMContentLoaded", () => {
  // left sidebar menu fontSize
  const sidebarMenu = document.querySelector(".kd-sidebar-menu");
  if(sidebarMenu){
    sidebarMenu.children[0].children[1].children[0].style.fontSize = "22px";
  }
  // docs page header link create
  const allHeaders = document.querySelectorAll(
    ".full-info > h2,.full-info > h3,.full-info > h4"
  );
  Array.from(allHeaders).forEach(el => {
    const id = el.id;
    const anchorTag = document.createElement("a");
    anchorTag.setAttribute("href", "#" + id);
    anchorTag.innerHTML = `<svg width="25" height="13" viewBox="0 0 52.965 52.973">
    <g id="broken-link" transform="translate(-0.004)">
      <path id="Path_16124" data-name="Path 16124" d="M49.467,3.51a12.011,12.011,0,0,0-16.97,0L23.305,12.7a1,1,0,0,0,1.414,1.414l9.192-9.192A10,10,0,0,1,48.052,19.066L36.033,31.088a10.014,10.014,0,0,1-14.143,0A1,1,0,0,0,20.476,32.5a12.013,12.013,0,0,0,16.97,0L49.467,20.48a12.03,12.03,0,0,0,0-16.97Z" fill="#4a4a4a"/>
      <path id="Path_16125" data-name="Path 16125" d="M26.84,40.279l-7.778,7.778A10,10,0,1,1,4.92,33.915L16.234,22.6a10.015,10.015,0,0,1,14.142,0,1,1,0,0,0,1.414-1.414,12.011,12.011,0,0,0-16.97,0L3.505,32.5A11.987,11.987,0,0,0,11.99,52.973a11.911,11.911,0,0,0,8.485-3.5l7.778-7.778a1,1,0,1,0-1.413-1.414Z" fill="#4a4a4a"/>
      <path id="Path_16126" data-name="Path 16126" d="M33.969,44.009a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0v-6A1,1,0,0,0,33.969,44.009Z" fill="#4a4a4a"/>
      <path id="Path_16127" data-name="Path 16127" d="M38.433,42.3a1,1,0,0,0-1.414,1.414l4.243,4.242a1,1,0,0,0,1.414-1.414Z" fill="#4a4a4a"/>
      <path id="Path_16128" data-name="Path 16128" d="M44.969,38.009h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" fill="#4a4a4a"/>
      <path id="Path_16129" data-name="Path 16129" d="M15.969,11.009a1,1,0,0,0,1-1v-6a1,1,0,1,0-2,0v6A1,1,0,0,0,15.969,11.009Z" fill="#4a4a4a"/>
      <path id="Path_16130" data-name="Path 16130" d="M11.5,12.716A1,1,0,0,0,12.918,11.3L8.676,7.06A1,1,0,0,0,7.262,8.474Z" fill="#4a4a4a"/>
      <path id="Path_16131" data-name="Path 16131" d="M4.969,17.009h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Z" fill="#4a4a4a"/>
    </g>
   </svg>`;
    el.appendChild(anchorTag);
    
    //insert hash tag when click anchorTag
    anchorTag.addEventListener("click", e => {
      e.preventDefault()
      const targetEl = document.querySelector(e.currentTarget.hash);
      window.history.pushState(id, "title", "#" + id);
      const pos1 = targetEl.offsetTop - 35;
      window.scrollTo({
        top: pos1,
        behavior: "smooth"
      });
    });
  });

  //docs page heading content on reload
  setTimeout(function(){ 
    let getHash = location.hash;
    if (getHash) {
      const targetE2 = document.querySelector(getHash);
      const pos2 = targetE2.offsetTop - 35;
      scrollTo({
        top: pos2,
        behavior: "smooth"
      });
    }
   }, 0);
});

// tabs active class add script - setup | install page
const tabItems = document.querySelectorAll(".nav-item .nav-link");
tabItems.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    const el = e.currentTarget;

    // add .active class to the clicked item, remove .active from others
    document.querySelectorAll(".nav-item .nav-link").forEach(navLink => {
      navLink === el
        ? navLink.classList.add("active")
        : navLink.classList.remove("active");
    });

    // add .show class to the target tab-pane, remove from others
    const elHref = el.getAttribute("href");
    const tabPaneTarget = document.querySelector(elHref);

    document.querySelectorAll(".tab-pane").forEach(tabPane => {
      tabPane === tabPaneTarget
        ? tabPane.classList.add("show")
        : tabPane.classList.remove("show");
    });

    tabPane.classList.add("show");
  });
});

// code download and copy function //
var codeHeading = document.querySelectorAll(".code-block-heading");
Array.from(codeHeading).forEach(heading => {
  const pre = heading.nextElementSibling;
  const code = pre.querySelector("code");
  const codeContent = code.textContent;
  let fileType = code.getAttribute("class");
  if (fileType) {
    fileType = fileType.replace("language-", "");
  } else {
    fileType = "txt";
  }
  let fileName = heading.querySelector('.code-title > h4').textContent.replace(" ", "_");

  // download js //
  var downloadBtn = heading.querySelector(".download-here");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function() {
      return download(codeContent, `${fileName}.${fileType}`, "text/plain");
    });
  }

  //clipboard js
  var copyBtn = heading.querySelector(".copy-here");
  if (copyBtn) {
    new ClipboardJS(copyBtn);
    copyBtn.addEventListener("click", function() {
      copyBtn.setAttribute("title", "copied!");
      setTimeout(()=>{
      copyBtn.setAttribute("title", "copy");
      },5000)

    });
  }
});

// scroll to top
var basicScrollTop = function() {
  // The button
  var btnTop = document.querySelector("#goTop");
  if (btnTop) {
    // Reveal the button
    var btnReveal = function() {
      if (window.scrollY >= 300) {
        btnTop.classList.add("is-visible");
      } else {
        btnTop.classList.remove("is-visible");
      }
    };
    // Smooth scroll top
    var TopscrollTo = function() {
      if (window.scrollY != 0) {
        setTimeout(function() {
          window.scrollTo(0, window.scrollY - 30);
          TopscrollTo();
        }, 5);
      }
    };
    // Listeners
    window.addEventListener("scroll", btnReveal);
    btnTop.addEventListener("click", TopscrollTo);
  }
};
basicScrollTop();
