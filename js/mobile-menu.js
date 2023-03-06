(() => {
  const refs = document.querySelector("[data-menu-button]");
  const ref = document.querySelector("[data-menu]");

  refs.addEventListener ("click", () => {
    const expanded = refs.getAttribute("aria-expanded") === "true" || false;

    refs.classList.toggle("is-open");
    refs.setAttribute("aria-expanded", !expanded);

    ref.classList.toggle("is-open");
  });
  })();