let webTitle = document.getElementById("web-title");
let webmain = document.getElementById("webdesignmain");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
let mainPageWeb = document.getElementById("main-webdesign");
let bracket1 = document.getElementById("bracket1");
let bracket2 = document.getElementById("bracket2");

function changeTitleProjects() {
  webTitle.innerHTML = "&lt; Zmień stronę &gt;";
  mainPageWeb.innerHTML = `
  <div id="dots"><span id="span1"></span><span id="span2"></span><span id="span3"></span></div>
  <div class="flip-card">
  <div class="flip-card-inner">
  <div class="flip-card-front flip-card-front-one" id="frontbgc"></div>
  <div class="flip-card-back flip-card-back-one" id="backbgc"></div>
  </div>
  </div>
  </div>`;
  let dot1 = document.getElementById("span1");
  let dot2 = document.getElementById("span2");
  let dot3 = document.getElementById("span3");
  let frontBgc = document.getElementById("frontbgc");
  let backBgc = document.getElementById("backbgc");

  bracket1.style.display = "none";
  bracket2.style.display = "none";

  function changeCard1() {
    dot1.style.backgroundColor = "white";
    dot2.style.backgroundColor = "black";
    dot3.style.backgroundColor = "black";
    frontBgc.style.backgroundImage = "url(images/template1.png)";
    backBgc.style.backgroundImage = "url(images/template1a.png)";
  }

  function changeCard2() {
    dot1.style.backgroundColor = "black";
    dot2.style.backgroundColor = "white";
    dot3.style.backgroundColor = "black";
    frontBgc.style.backgroundImage = "url(images/template2.png)";
    backBgc.style.backgroundImage = "url(images/template2a.png)";
  }

  function changeCard3() {
    dot1.style.backgroundColor = "black";
    dot2.style.backgroundColor = "black";
    dot3.style.backgroundColor = "white";
    frontBgc.style.backgroundImage = "url(images/template3.png)";
    backBgc.style.backgroundImage = "url(images/template3a.png)";
  }

  dot1.addEventListener("click", changeCard1);
  dot2.addEventListener("click", changeCard2);
  dot3.addEventListener("click", changeCard3);

  projects.style.textDecoration = "underline";
  webmain.style.textDecoration = "none";
  contact.style.textDecoration = "none";
  dot1.style.backgroundColor = "white";
}

projects.addEventListener("click", changeTitleProjects);

function changeTitleContact() {
  webTitle.innerHTML = "&lt; Kontakt &gt;";
  mainPageWeb.innerHTML = `<div class="contact">
  <span>Patrycja Ulatowska</span>
  <br>
  <span>692877781</span>
  <br>
  <span>ulatowska.p@gmail.com</span>
  </div>`;
  projects.style.textDecoration = "none";
  webmain.style.textDecoration = "none";
  contact.style.textDecoration = "underline";
  bracket1.style.display = "block";
  bracket2.style.display = "block";
}

contact.addEventListener("click", changeTitleContact);

function changeTitleMain() {
  webTitle.innerHTML = "&lt; Web design &gt;";
  bracket1.style.display = "block";
  bracket2.style.display = "block";
  mainPageWeb.innerHTML = `
  <div class="names-mobile">
    <div>
      <p>Profesjonalizm.</p>
      <p>Czy twoja strona wzbudza zaufanie?</p>
    </div>
    <div>
      <p>Skuteczność.</p>
      <p>Czy twoja strona zacheca, czy odrzuca klientów?</p>
    </div>
    <div>
      <p>Plan.</p>
      <p>Czy zdjęcia na Twojej stronie realizują określony cel?</p>
    </div>
    <div>
      <p>Przystępność.</p>
      <p>Płyną, a może brną? Czy twoja strona jest intuicyjna?</p>
    </div>
    <div>
      <p>Komunikacja.</p>
      <p>
        Czy klienci rozumieją, czym jest twoj produkt po wejściu na stronę?
      </p>
    </div>
    <div>
      <p>10 sekund.</p>
      <p>W takim czasie klient decyduje, czy zostanie na stronie.</p>
    </div>
    <div>
      <p>Wrażenie.</p>
      <p>Co jest pierwszą rzeczą, którą klienci widzą na Twojej stronie?</p>
    </div>
    <div>
      <p>Oryginalność.</p>
      <p>Czy Twoja strona zapada w pamięć?</p>
    </div>
    <div>
      <p>User Experience</p>
      <p>Czy Twoja strona jest dobrze zaprojektowana?</p>
    </div>
    <div>
      <p>60%</p>
      <p>
        Tyle ruchu na stronach pochodzi z telefonów komórkowych. Czy Twoja
        strona mobilna działa?
      </p>
    </div>

    <div>
      <p>Wysoki standard.</p>
      <p>Czy twoja strona jest nowoczesna?</p>
    </div>
    <div>
      <p>Zaangażowanie.</p>
      <p>
        Czy klienci zostają na twojej stronie wystarczająco długo żeby
        dowiedzieć się co oferujesz?
      </p>
    </div>

    <div>
      <p>Czas ładowania.</p>
      <p>Jak długo twoi klienci czekają na obejrzenie twojej strony?</p>
    </div>
    <div>
      <p>Przejrzystość.</p>
      <p>
        Widzą, a może szukają? Czy twoi klienci mogą łatwo znaleźć
        najważniejsze informacje?
      </p>
    </div>
    </div>`;
  projects.style.textDecoration = "none";
  webmain.style.textDecoration = "underline";
  contact.style.textDecoration = "none";
}

webmain.addEventListener("click", changeTitleMain);
