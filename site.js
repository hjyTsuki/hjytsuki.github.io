(() => {
  "use strict";

  const filters = document.querySelector(".publication-filters");
  const works = Array.from(document.querySelectorAll("[data-area]"));
  const notes = document.querySelector(".research-notes");
  const count = document.querySelector("#result-count");

  if (filters && works.length) {
    filters.hidden = false;
    filters.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-filter]");
      if (!button) return;
      const filter = button.dataset.filter;
      filters.querySelectorAll("button").forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
      let visible = 0;
      works.forEach((work) => {
        work.hidden = filter !== "all" && work.dataset.area !== filter;
        if (!work.hidden) visible += 1;
      });
      if (notes) {
        notes.hidden = !Array.from(notes.querySelectorAll("[data-area]")).some((work) => !work.hidden);
      }
      if (count) count.textContent = `${visible} research works shown.`;
    });
  }

  const dialog = document.querySelector("#figure-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;

  const image = dialog.querySelector("#figure-image");
  const caption = dialog.querySelector("#figure-caption");
  const source = dialog.querySelector("#figure-source");
  let trigger = null;

  document.querySelectorAll(".paper-figure").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      image.src = link.href;
      image.alt = link.querySelector("img").alt;
      caption.textContent = link.dataset.caption;
      source.href = link.dataset.source;
      dialog.showModal();
      document.body.classList.add("figure-open");
    });
  });

  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("figure-open");
    image.removeAttribute("src");
    if (trigger) trigger.focus({ preventScroll: true });
  });
})();
