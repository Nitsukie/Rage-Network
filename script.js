document.getElementById("year").textContent = new Date().getFullYear();

const title = document.querySelector("h1");
if (title) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * 8;
    title.style.transform = `translate(${x}px, ${y}px)`;
  });
}
