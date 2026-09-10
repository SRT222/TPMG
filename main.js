document.addEventListener("DOMContentLoaded", function () {
  var ACCESS_CODE = "TPMG";
  var STORAGE_KEY = "tpmg-access";

  /* ---------------------------------------------------------
     Access gate (index.html only — other pages have no #gate)
     --------------------------------------------------------- */
  var gate = document.getElementById("gate");
  var content = document.getElementById("site-content");

  if (gate && content) {
    var alreadyGranted = false;
    try {
      alreadyGranted = sessionStorage.getItem(STORAGE_KEY) === "granted";
    } catch (err) {
      // sessionStorage unavailable (e.g. some privacy modes) — just show the gate
    }

    if (alreadyGranted) {
      gate.classList.add("is-hidden");
      content.classList.add("is-visible");
    } else {
      var form = document.getElementById("gate-form");
      var input = document.getElementById("gate-code");
      var errorEl = document.getElementById("gate-error");
      var turbAnim = document.getElementById("melt-turb-anim");
      var scaleAnim = document.getElementById("melt-scale-anim");
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var entered = (input.value || "").trim().toUpperCase();

        if (entered === ACCESS_CODE) {
          errorEl.textContent = "";
          try { sessionStorage.setItem(STORAGE_KEY, "granted"); } catch (err) {}

          if (reduceMotion) {
            gate.classList.add("is-hidden");
            content.classList.add("is-visible");
            var h = content.querySelector("h1");
            if (h) { h.setAttribute("tabindex", "-1"); h.focus(); }
            return;
          }

          // Kick off the melt: warp the gate with the SVG displacement filter
          // while it fades and droops away, then swap it out for the site.
          gate.classList.add("is-melting");
          if (turbAnim && turbAnim.beginElement) turbAnim.beginElement();
          if (scaleAnim && scaleAnim.beginElement) scaleAnim.beginElement();

          window.setTimeout(function () {
            gate.classList.add("melt-blurred");
          }, 550);

          window.setTimeout(function () {
            gate.classList.add("is-hidden");
            content.classList.add("is-visible");
            window.scrollTo(0, 0);
            var heading = content.querySelector("h1");
            if (heading) {
              heading.setAttribute("tabindex", "-1");
              heading.focus();
            }
          }, 1350);
        } else {
          errorEl.textContent = "That code isn't right — try again.";
          gate.classList.remove("is-shaking");
          // force reflow so the shake animation can replay on repeated wrong entries
          void gate.offsetWidth;
          gate.classList.add("is-shaking");
          input.select();
        }
      });
    }
  }

  /* ---------------------------------------------------------
     Mobile nav toggle
     --------------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------
     Contact form (contact.html only)
     --------------------------------------------------------- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      // TODO: replace with a real submission endpoint (Formspree, a Vercel
      // serverless function, etc.) before launch. For now this just gives
      // visible confirmation so the static site is demoable end to end.
      e.preventDefault();
      var status = document.getElementById("form-status");
      if (status) {
        status.textContent = "Thanks — this form isn't wired to a real inbox yet. Connect it to Formspree or an API route before launch.";
        status.hidden = false;
      }
    });
  }
});
