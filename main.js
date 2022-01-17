window.addEventListener("load", async function main() {
  const $ = (str, dom=document) => [...dom.querySelectorAll(str)];
  const wait = t => new Promise(r => setTimeout(r, t));

  const header = $("header")[0];
  const rootStyle = document.documentElement.style;
  function resize() {
    const headerHeight = header.offsetHeight;
    rootStyle.setProperty('--header-height', headerHeight+"px");
  }
  resize();
  window.addEventListener("resize", resize);

  const brokenElements = $(".broken");
  brokenElements.forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      alert("This link is down for maintenance");
    });
  });
});
