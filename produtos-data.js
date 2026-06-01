document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {

    const answer = btn.nextElementSibling;

    // toggle da seta
    btn.classList.toggle("active");

    // abrir/fechar resposta
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

  });
});
const searchInput = document.getElementById("faqSearch");
const faqItems = document.querySelectorAll(".faq-item");

searchInput.addEventListener("input", () => {
  const valor = searchInput.value.toLowerCase();

  faqItems.forEach(item => {
    const texto = item.innerText.toLowerCase();

    if (texto.includes(valor)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});