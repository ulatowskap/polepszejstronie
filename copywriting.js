let mainCopy = document.getElementById("text-copy");
let articles = document.getElementById("articles");
let www = document.getElementById("www");
let ads = document.getElementById("ads");
let products = document.getElementById("products");
let contact = document.getElementById("contact");
let list = document.getElementById("list");
let closeEv = document.getElementById("close");
let title = document.getElementById("titlecopy");

function showArticles() {
  mainCopy.innerHTML = `<div>
  <span>Zoptymalizowane pod SEO</span>
  <br>
  <span>Unikalne</span>
  <br>
  <span>Poprawne ortograficznie i gramatycznie</span>
  <br>
  <span>Merytoryczne</span>
  <br>
  <br>
  <br>
  <a href="#">Zobacz przykładowe artykuły.</a>
  </div>`;
  mainCopy.style.display = "block";
  list.style.display = "none";
  closeEv.style.display = "block";
  title.innerHTML = "Artykuły";

  if (window.innerWidth > 960) {
    mainCopy.innerHTML = "artykuły";
    list.style.display = "block";
    closeEv.style.display = "none";
    title.innerHTML = "Copywriting.";
  }
}

articles.addEventListener("click", showArticles);

function closeMain() {
  closeEv.style.display = "none";
  list.style.display = "block";
  mainCopy.style.display = "none";
  title.innerHTML = "Copywriting";
}

articles.addEventListener("click", showArticles);
closeEv.addEventListener("click", closeMain);

function showWww() {
  mainCopy.innerHTML = `<div>
  <span>Zoptymalizowane pod SEO</span>
  <br>
  <span>Unikalne</span>
  <br>
  <span>Poprawne ortograficznie i gramatycznie</span>
  <br>
  <span>Merytoryczne</span>
  <br>
  <br>
  <br>
  <a href="#">Zobacz przykładowe opisy na stronach.</a>
  </div>`;
  mainCopy.style.display = "block";
  list.style.display = "none";
  closeEv.style.display = "block";
  title.innerHTML = "Treści na stronach";
  if (window.innerWidth > 960) {
    list.style.display = "block";
    closeEv.style.display = "none";
    title.innerHTML = "Copywriting.";
    mainCopy.innerHTML = "strony www";
  }
}

www.addEventListener("click", showWww);

function showProducts() {
  mainCopy.innerHTML = `<div>

  <span>Zoptymalizowane pod SEO</span>
  <br>
  <span>Unikalne</span>
  <br>
  <span>Poprawne ortograficznie i gramatycznie</span>
  <br>
  <span>Merytoryczne</span>
  <br>
  <br>
  <br>
  <a href="produkty.html">Zobacz przykładowe opisy produktów.</a>
  </div>

  `;
  mainCopy.style.display = "block";
  list.style.display = "none";
  closeEv.style.display = "block";
  title.innerHTML = "Opisy produktów";
  if (window.innerWidth > 960) {
    list.style.display = "block";
    closeEv.style.display = "none";
    title.innerHTML = "Copywriting.";
    mainCopy.innerHTML = "produkty";
  }
}

products.addEventListener("click", showProducts);

function showAds() {
  mainCopy.innerHTML = `<div>
  <span>Przyciągające uwagę</span>
  <br>
  <span>Unikalne</span>
  <br>
  <span>Poprawne ortograficznie i gramatycznie</span>
  <br>
  <span>Merytoryczne</span>
  <br>
  <br>
  <br>
  <a href="#">Zobacz przykładowe ogłoszenia.</a>
  </div>`;
  mainCopy.style.display = "block";
  list.style.display = "none";
  closeEv.style.display = "block";
  title.innerHTML = "Ogłoszenia";
  if (window.innerWidth > 960) {
    list.style.display = "block";
    closeEv.style.display = "none";
    title.innerHTML = "Copywriting.";
    mainCopy.innerHTML = "ogłoszenia";
  }
}

ads.addEventListener("click", showAds);

function showContact() {
  mainCopy.innerHTML = `<div class="contact">
  <span>Patrycja Ulatowska</span>
  <br>
  <span>692877781</span>
  <br>
  <span>ulatowska.p@gmail.com</span>
  </div>`;
  mainCopy.style.display = "block";
  list.style.display = "none";
  closeEv.style.display = "block";
  title.innerHTML = "Kontakt";
  if (window.innerWidth > 960) {
    list.style.display = "block";
    closeEv.style.display = "none";
    title.innerHTML = "Copywriting.";
    mainCopy.innerHTML = "kontakt";
  }
}

contact.addEventListener("click", showContact);
