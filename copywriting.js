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
  <span>Unikatowe teksty</span>
  <br>
  <span>Na każdy temat</span>
  <br>
  <span>Profesjonalne treści</span>
  <br>
  <br>
  <br>
  <a href="artykuły.html">Zobacz przykładowe artykuły.</a>
  </div>`;
  mainCopy.style.display = "block";
  list.style.display = "none";
  closeEv.style.display = "block";
  title.innerHTML = "Artykuły";

  if (window.innerWidth > 960) {
    mainCopy.innerHTML = `
    <h2>profesjonalne artykuły, na każdy zlecony temat. atrakcyjna oferta. merytoryczne treści. terminowość. kreatywność. zgodność z zasadami SEO</h2>
    <div class="gallery">
    <img src="images/articles/art1.png"/>
    <img src="images/articles/art2.png"/>
    <img src="images/articles/art3.png"/>
    <img src="images/articles/art4.png"/>
    <img src="images/articles/art5.png"/>
    <img src="images/articles/art6.png"/>
    </div>
    `;

    articles.style.textDecoration = "underline";
    products.style.textDecoration = "none";
    www.style.textDecoration = "none";
    ads.style.textDecoration = "none";
    contact.style.textDecoration = "none";
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
  <span>Treści angażujące klientów</span>
  <br>
  <span>Elastyczność</span>
  <br>
  <span>Zgodne z zasadami SEO</span>
  <br>
  <span>Merytoryczne</span>
  <br>
  <br>
  <br>
  <a href="www.html">Zobacz przykładowe opisy na stronach.</a>
  </div>`;
  mainCopy.style.display = "block";
  list.style.display = "none";
  closeEv.style.display = "block";
  title.innerHTML = "Treści na stronach";
  if (window.innerWidth > 960) {
    list.style.display = "block";
    articles.style.textDecoration = "none";
    products.style.textDecoration = "none";
    www.style.textDecoration = "underline";
    ads.style.textDecoration = "none";
    contact.style.textDecoration = "none";
    closeEv.style.display = "none";
    title.innerHTML = "Copywriting.";
    mainCopy.innerHTML = `
    <h2>treści, które angażują klienta. merytoryczność. elastyczność. SEO.</h2>
    <div class="small_gallery gallery-www">
    <div id="item1"><img src="images/www/www1.png"/></div>
    <div id="item4"><img src="images/www/www4.png"/></div>
    <div id="item5"><img src="images/www/www5.png"/></div>
    </div> 
    <div id="preview">
    </div>
    `;

    document.getElementById("item1").onmouseover = function () {
      document.getElementById("preview").style.backgroundImage =
        "url(images/www/www1.png)";
      document.getElementById("preview").style.backgroundSize = "contain";
      document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    };
    document.getElementById("item1").onmouseout = function () {
      document.getElementById("preview").style.backgroundImage = "";
    };
    document.getElementById("item4").onmouseover = function () {
      document.getElementById("preview").style.backgroundImage =
        "url(images/www/www4.png)";
      document.getElementById("preview").style.backgroundSize = "contain";
      document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    };
    document.getElementById("item4").onmouseout = function () {
      document.getElementById("preview").style.backgroundImage = "";
    };

    document.getElementById("item5").onmouseover = function () {
      document.getElementById("preview").style.backgroundImage =
        "url(images/www/www5.png)";
      document.getElementById("preview").style.backgroundSize = "contain";
      document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    };
    document.getElementById("item5").onmouseout = function () {
      document.getElementById("preview").style.backgroundImage = "";
    };
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
    articles.style.textDecoration = "none";
    products.style.textDecoration = "underline";
    www.style.textDecoration = "none";
    ads.style.textDecoration = "none";
    contact.style.textDecoration = "none";
    closeEv.style.display = "none";
    title.innerHTML = "Copywriting.";
    mainCopy.innerHTML = `
    <h2>zgodność z zasadami SEO. różnorodna tematyka. poprawność gramatyczna i ortograficzna. zachęcające teksty. </h2>
    <div class="small_gallery">
<div id="item1"><img src="images/png/ceiling-lamp.png"/></div>
<div id="item2"><img src="images/png/cleaning.png"/></div>
<div id="item3"><img src="images/png/wall-lamp.png"/></div>
<div id="item4"><img src="images/png/liquid-soap.png"/></div>
<div id="item5"><img src="images/png/hair-spray.png"/></div>
<div id="item6"><img src="images/png/skincare.png"/></div>
<div id="item7"><img src="images/png/skin-care.png"/></div>
</div>

<div id="preview">
</div>
`;

    document.getElementById("item1").onmouseover = function () {
      document.getElementById("preview").style.backgroundImage =
        "url(images/produkty/opis1.png)";
      document.getElementById("preview").style.backgroundSize = "contain";
      document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    };
    document.getElementById("item1").onmouseout = function () {
      document.getElementById("preview").style.backgroundImage = "";
    };

    document.getElementById("item2").onmouseover = function () {
      document.getElementById("preview").style.backgroundImage =
        "url(images/produkty/opis2.png)";
      document.getElementById("preview").style.backgroundSize = "contain";
      document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    };
    document.getElementById("item2").onmouseout = function () {
      document.getElementById("preview").style.backgroundImage = "";
    };

    document.getElementById("item3").onmouseover = function () {
      document.getElementById("preview").style.backgroundImage =
        "url(images/produkty/opis3.png)";
      document.getElementById("preview").style.backgroundSize = "contain";
      document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    };
    document.getElementById("item3").onmouseout = function () {
      document.getElementById("preview").style.backgroundImage = "";
    };

    document.getElementById("item4").onmouseover = function () {
      document.getElementById("preview").style.backgroundImage =
        "url(images/produkty/opis4.png)";
      document.getElementById("preview").style.backgroundSize = "contain";
      document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    };
    document.getElementById("item4").onmouseout = function () {
      document.getElementById("preview").style.backgroundImage = "";
    };

    document.getElementById("item5").onmouseover = function () {
      document.getElementById("preview").style.backgroundImage =
        "url(images/produkty/opis5.png)";
      document.getElementById("preview").style.backgroundSize = "contain";
      document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    };

    document.getElementById("item6").onmouseover = function () {
      document.getElementById("preview").style.backgroundImage =
        "url(images/produkty/opis6.png)";
      document.getElementById("preview").style.backgroundSize = "contain";
      document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    };

    document.getElementById("item7").onmouseover = function () {
      document.getElementById("preview").style.backgroundImage =
        "url(images/produkty/opis7.png)";
      document.getElementById("preview").style.backgroundSize = "contain";
      document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    };
  }
}

products.addEventListener("click", showProducts);

function showAds() {
  mainCopy.innerHTML = `<div>
  <span>Przyciągające klientów</span>
  <br>
  <span>Unikatowe</span>
  <br>
  <span>Kreatywne</span>
  <br>
  <span>Bogate w słowa kluczowe</span>
  <br>
  <br>
  <br>
  <a href="ogłoszenia.html">Zobacz przykładowe ogłoszenia.</a>
  </div>`;
  mainCopy.style.display = "block";
  list.style.display = "none";
  closeEv.style.display = "block";
  title.innerHTML = "Ogłoszenia";
  if (window.innerWidth > 960) {
    list.style.display = "block";
    articles.style.textDecoration = "none";
    products.style.textDecoration = "none";
    www.style.textDecoration = "none";
    ads.style.textDecoration = "underline";
    contact.style.textDecoration = "none";
    closeEv.style.display = "none";
    title.innerHTML = "Copywriting.";
    mainCopy.innerHTML = `<h2>ogłoszenia. poprawa ogłoszeń na olx. większe zasięgi. więcej
    klientów. bogate i merytoryczne treści reklamowe. zmień stronę i sprawdź, w jaki sposób ogłoszenie może wyglądać lepiej!</h2>
    
    <div id="dots"><span id="span1"></span><span id="span2"></span><span id="span3"></span></div>
    <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front flip-card-front-one" id="frontbgc"></div>
    <div class="flip-card-back flip-card-back-one" id="backbgc"></div>
    </div>
    </div>
    </div>
    `;
    let dot1 = document.getElementById("span1");
    let dot2 = document.getElementById("span2");
    let dot3 = document.getElementById("span3");
    let frontBgc = document.getElementById("frontbgc");
    let backBgc = document.getElementById("backbgc");

    function changeCard1() {
      dot1.style.backgroundColor = "black";
      dot2.style.backgroundColor = "white";
      dot3.style.backgroundColor = "white";
      frontBgc.style.backgroundImage = "url(images/ogłoszenia/buty1.png)";
      backBgc.style.backgroundImage = "url(images/ogłoszenia/buty1a.png)";
    }

    function changeCard2() {
      dot1.style.backgroundColor = "white";
      dot2.style.backgroundColor = "black";
      dot3.style.backgroundColor = "white";
      frontBgc.style.backgroundImage = "url(images/ogłoszenia/fizyka1.png)";
      backBgc.style.backgroundImage = "url(images/ogłoszenia/fizyka1a.png)";
    }

    function changeCard3() {
      dot1.style.backgroundColor = "white";
      dot2.style.backgroundColor = "white";
      dot3.style.backgroundColor = "black";
      frontBgc.style.backgroundImage = "url(images/ogłoszenia/paznokcie1.png)";
      backBgc.style.backgroundImage = "url(images/ogłoszenia/paznokcie1a.png)";
    }
    dot1.style.backgroundColor = "black";
    dot1.addEventListener("click", changeCard1);
    dot2.addEventListener("click", changeCard2);
    dot3.addEventListener("click", changeCard3);
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
    articles.style.textDecoration = "none";
    products.style.textDecoration = "none";
    www.style.textDecoration = "none";
    ads.style.textDecoration = "none";
    contact.style.textDecoration = "underline";
    closeEv.style.display = "none";
    title.innerHTML = "Copywriting.";
    mainCopy.innerHTML = `<h2>bezproblemowy kontakt. elastyczność. terminowość.</h2>
    <div class="contact">
  <span>Patrycja Ulatowska</span>
  <br>
  <span>692877781</span>
  <br>
  <span>ulatowska.p@gmail.com</span>
  </div>`;
  }
}

contact.addEventListener("click", showContact);
