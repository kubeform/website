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
const nav = document.querySelector('.fixed-menu, .documentation-menu');
let topOfNav = nav.offsetTop;
function fixNav() {
  if (window.scrollY > topOfNav) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}
window.addEventListener('scroll', fixNav);

// mega menu active class
var navbarItems = document.querySelectorAll(".navbar-item");
navbarItems.forEach(navbarItem => {
  navbarItem.addEventListener("click", function() {
    var megamenues = document.querySelectorAll(".navbar-item > .ac-megamenu , .navbar-item > .ac-dropdown");
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
      document.documentElement.scrollTop || document.body.scrollTop + 100;
    for (let s in allHeaders) {
      if (
        allHeaders.hasOwnProperty(s) &&
        allHeaders[s].offsetTop <= scrollPos
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