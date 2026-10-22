"use client";

import { useEffect } from "react";

// Photo lightbox (hero/about/web images + the 7-photo set) and the Copy buttons in Contact.
export default function Interactions() {
  useEffect(() => {
    const ac = new AbortController();
    const on = (el, type, fn) => el.addEventListener(type, fn, { signal: ac.signal });
    const $ = (id) => document.getElementById(id);
    const $$ = (sel) => Array.from(document.querySelectorAll(sel));

    const page = $$(".nr .tile img,.about .tile img,.v-web img");
    const setImgs = $$("#photoset img");
    const lb = $("lb"), im = $("lb-img"), cap = $("lb-cap");
    let imgs = page, cur = 0, last = null;

    function show(i) {
      cur = (i + imgs.length) % imgs.length;
      const s = imgs[cur];
      im.src = s.src;
      im.alt = s.alt || "";
      const fc = s.closest("figure")?.querySelector("figcaption");
      cap.textContent = s.dataset.cap
        ? `${s.dataset.cap} · ${cur + 1} / ${imgs.length}`
        : fc ? fc.textContent : s.alt || "";
    }
    function open(i, list) {
      imgs = list || page;
      last = document.activeElement;
      show(i);
      lb.hidden = false;
      document.body.style.overflow = "hidden";
      $("lb-close").focus();
    }
    function close() {
      lb.hidden = true;
      document.body.style.overflow = "";
      last?.focus();
    }
    function makeZoomable(list, openList) {
      list.forEach((el, i) => {
        el.classList.add("zoomable");
        el.tabIndex = 0;
        el.setAttribute("role", "button");
        on(el, "click", () => open(i, openList));
        on(el, "keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i, openList); }
        });
      });
    }

    makeZoomable($$(".v-film img"), setImgs);
    makeZoomable(page, page);
    on($("open-set"), "click", () => open(0, setImgs));
    on($("lb-close"), "click", close);
    on($("lb-prev"), "click", () => show(cur - 1));
    on($("lb-next"), "click", () => show(cur + 1));
    on(lb, "click", (e) => { if (e.target === lb) close(); });
    on(document, "keydown", (e) => {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(cur - 1);
      if (e.key === "ArrowRight") show(cur + 1);
    });

    const timers = [];
    $$(".copy").forEach((b) => {
      on(b, "click", () => {
        const el = $(b.dataset.target), t = el.textContent;
        const done = () => { b.textContent = "Copied"; timers.push(setTimeout(() => { b.textContent = "Copy"; }, 1600)); };
        const sel = () => {
          const r = document.createRange();
          r.selectNodeContents(el);
          const s = getSelection();
          s.removeAllRanges();
          s.addRange(r);
          b.textContent = "Selected";
        };
        try { navigator.clipboard.writeText(t).then(done, sel); } catch { sel(); }
      });
    });

    return () => {
      ac.abort();
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  return null;
}
