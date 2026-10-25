/*(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var REVEAL_LAG = 220;
  var types = [
    "reveal-up",
    "reveal-left",
    "reveal-right",
    "reveal-down",
    "reveal-scale",
    "reveal-up",
    "reveal-right",
    "reveal-left",
  ];

  var selectors = [
    ".skill-header",
    ".skill-left",
    ".div-1",
    ".div-2",
    ".div-3",
    ".code-header",
    ".platform",
    ".experince-header",
    ".experince-left",
    ".experince-right",
    ".education-header",
    ".btech",
    ".inter",
    ".ten",
    ".tech-header",
    ".tech",
    ".contact-title",
    ".contact-form",
  ];

  var seen = new Set();
  var elements = [];

  selectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (!seen.has(el)) {
        seen.add(el);
        elements.push(el);
      }
    });
  });

  var typeIndex = 0;
  elements.forEach(function (el, i) {
    el.classList.add("reveal", types[typeIndex % types.length]);
    typeIndex += 1;
    el.style.setProperty("--reveal-delay", 0.18 + (i % 4) * 0.14 + "s");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var target = entry.target;
          observer.unobserve(target);
          setTimeout(function () {
            target.classList.add("reveal-visible");
          }, REVEAL_LAG);
        }
      });
    },
    { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });

})();*/


(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var REVEAL_LAG = 220;

  var types = [
    "reveal-up",
    "reveal-left",
    "reveal-right",
    "reveal-down",
    "reveal-scale",
    "reveal-up",
    "reveal-right",
    "reveal-left",
  ];

  var selectors = [
    ".skill-header",
    ".skill-left",
    ".div-1",
    ".div-2",
    ".div-3",
    ".code-header",
    ".platform",
    ".experince-header",
    ".experince-left",
    ".experince-right",
    ".education-header",
    ".btech",
    ".inter",
    ".ten",
    ".tech-header",
    ".tech",
    ".contact-title",
    ".contact-form",
  ];

  var seen = new Set();
  var elements = [];

  selectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (!seen.has(el)) {
        seen.add(el);
        elements.push(el);
      }
    });
  });

  elements.forEach(function (el, i) {
    el.classList.add("reveal", types[i % types.length]);

    el.style.setProperty(
      "--reveal-delay",
      0.18 + (i % 4) * 0.14 + "s"
    );
  });

  var timers = new WeakMap();

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var target = entry.target;

        // Cancel any pending animation timer.
        if (timers.has(target)) {
          clearTimeout(timers.get(target));
          timers.delete(target);
        }

        if (entry.isIntersecting) {
          // Play the animation whenever the element enters the viewport.
          var timer = setTimeout(function () {
            target.classList.add("reveal-visible");
            timers.delete(target);
          }, REVEAL_LAG);

          timers.set(target, timer);
        } else {
          // Reset the element so it can animate again when revisited.
          target.classList.remove("reveal-visible");
        }
      });
    },
    {
      threshold: 0.22,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();
