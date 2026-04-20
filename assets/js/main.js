!function (e) {
    "use strict";

    /* ================= PRELOADER ================= */
    e(window).on("load", function () {
        e(".preloader").fadeOut();
    });

    /* ================= NICE SELECT ================= */
    if (e(".nice-select").length) {
        e(".nice-select").niceSelect();
    }

    /* ================= MOBILE MENU ================= */
    e.fn.thmobilemenu = function (t) {
        var a = e.extend({
            menuToggleBtn: ".th-menu-toggle",
            bodyToggleClass: "th-body-visible",
            subMenuClass: "th-submenu",
            subMenuParent: "th-item-has-children",
            subMenuParentToggle: "th-active",
            meanExpandClass: "th-mean-expand",
            appendElement: '<span class="th-mean-expand"></span>',
            subMenuToggleClass: "th-open",
            toggleSpeed: 400
        }, t);

        return this.each(function () {
            var t = e(this);

            function toggleMenu() {
                t.toggleClass(a.bodyToggleClass);
            }

            e(a.menuToggleBtn).on("click", toggleMenu);
        });
    };

    e(".th-menu-wrapper").thmobilemenu();

    /* ================= STICKY HEADER ================= */
    e(window).scroll(function () {
        if (e(this).scrollTop() > 500) {
            e(".sticky-wrapper").addClass("sticky");
        } else {
            e(".sticky-wrapper").removeClass("sticky");
        }
    });

    /* ================= SWIPER ================= */
    if (typeof Swiper !== "undefined") {
        new Swiper("#serviceSlider1", {
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 }
            }
        });
    }

}(jQuery);


/* =========================================
   🔐 LOGIN SYSTEM (MAIN FEATURE)
========================================= */

// LOGIN STATE
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const userIcon = document.getElementById("userIcon");
    const closeBtn = document.querySelector(".close");

    const loginTab = document.getElementById("loginTab");
    const signupTab = document.getElementById("signupTab");

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const goSignup = document.getElementById("goSignup");
    const goLogin = document.getElementById("goLogin");

    /* ================= USER ICON CLICK ================= */
    if (userIcon) {
        userIcon.addEventListener("click", function (e) {
            e.preventDefault();

            if (!isLoggedIn) {
                modal.style.display = "flex";
                showLogin();
            } else {
                window.location.href = "dashboard.html";
            }
        });
    }

    /* ================= CLOSE MODAL ================= */
    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = "none";
    }

    window.onclick = function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };

    /* ================= TAB SWITCH ================= */
    function showLogin() {
        loginForm.classList.add("active");
        signupForm.classList.remove("active");

        loginTab.classList.add("active");
        signupTab.classList.remove("active");
    }

    function showSignup() {
        signupForm.classList.add("active");
        loginForm.classList.remove("active");

        signupTab.classList.add("active");
        loginTab.classList.remove("active");
    }

    if (loginTab) loginTab.onclick = showLogin;
    if (signupTab) signupTab.onclick = showSignup;
    if (goSignup) goSignup.onclick = showSignup;
    if (goLogin) goLogin.onclick = showLogin;

    /* ================= LOGIN ================= */
    const loginBtn = document.querySelector("#loginForm button");

    if (loginBtn) {
        loginBtn.addEventListener("click", function (e) {
            e.preventDefault();

            localStorage.setItem("isLoggedIn", "true");
            location.reload();
        });
    }

    /* ================= SIGNUP ================= */
    const signupBtn = document.querySelector("#signupForm button");

    if (signupBtn) {
        signupBtn.addEventListener("click", function (e) {
            e.preventDefault();

            alert("Signup successful! Please login.");
            showLogin();
        });
    }

});


/* ================= LOGOUT ================= */
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}


/* =========================================
   🎯 EXTRA ANIMATIONS (SAFE VERSION)
========================================= */

// HERO ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hero.classList.add("active");
            }
        });
    });

    observer.observe(hero);
});

// ABOUT SECTION
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".about-section");
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            section.classList.toggle("about-active", entry.isIntersecting);
        });
    });

    observer.observe(section);
});



// ===================modal popup==========
// OPEN MODAL
function openBookingModal() {
    document.getElementById("bookingModal").style.display = "block";
}

// CLOSE MODAL
function closeBookingModal() {
    document.getElementById("bookingModal").style.display = "none";
}

// CLOSE WHEN CLICK OUTSIDE
window.addEventListener("click", function (e) {
    const modal = document.getElementById("bookingModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});