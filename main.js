//Animacao de entrada e saida de conteudo ao rolar a página
const elementos = document.querySelectorAll('[data-anima]');
const animacaoClass = 'animacao';

function animaScroll() {
  const topoPaginaNaJanela = window.pageYOffset + ((window.innerHeight * 3 / 4));
  elementos.forEach(function (elemento) {
    if (topoPaginaNaJanela > elemento.offsetTop) {
      elemento.classList.add(animacaoClass);
    } else {
      elemento.classList.remove(animacaoClass);
    }
  });
}

if (elementos.length) {
  window.addEventListener('scroll', function () {
    animaScroll()
  })
}


// Acordeon - perguntas frequentes
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});



//Noticias

function loadProducts() {

  const itens = [
    {
      img: "img/noticias/PAQNIC 4-24 1 (1).png",
      titulo: "PAQNIC - Horto Florestal",
      descrição: "Realizamos um super evento de integração para os veteramos receberem os recém chegados: o PAQNIC",
      link: "not-unicas/PAQ-nic.html"

    },
    {
      img: "img/noticias/1689697106376 1 (1).png",
      titulo: "PAD papo: orgulho LGBTQIAP+",
      descrição: "Junho é o mês do Orgulho LGBTQIAP+ e o PAD, puxou esse papo importantíssimo nas unidades do PAQ!",
      link: "not-unicas/PAQ-nic.html"

    },
    {
      img: "img/noticias/1695122572394 1 (1).png",
      titulo: "PAQNIC - Horto Florestal",
      descrição: "Realizamos um super evento de integração para os veteramos receberem os recém chegados: o PAQNIC",
      link: "not-unicas/PAQ-nic.html"

    },
    {
      img: "img/noticias/03 2 (1).png",
      titulo: "Conheça os jovens empregados do PAQ!",
      descrição: "Conheça as mentes brilhantes e as histórias inspiradoras por trás da nova geração de talentos no PAQ.",
      link: "not-unicas/PAQ-nic.html"


    },
    {
      img: "img/noticias/CONCARH-28 2 (1).png",
      titulo: "Conheça os jovens do PAQ na facul!",
      descrição: "Conheça as mentes brilhantes e as histórias inspiradoras por trás da nova geração de talentos no PAQ.",
      link: "not-unicas/PAQ-nic.html"


    },
    {
      img: "img/noticias/Notebooks-30 1 (1).png",
      titulo: "PAQNIC - Horto Florestal",
      descrição: "Realizamos um super evento de integração para os veteramos receberem os recém chegados: o PAQNIC",
      link: "not-unicas/PAQ-nic.html"


    },
    {
      img: "img/noticias/CONCARH-40 1.png",
      titulo: "PAQNIC - Horto Florestal",
      descrição: "Realizamos um super evento de integração para os veteramos receberem os recém chegados: o PAQNIC",
      link: "not-unicas/PAQ-nic.html"


    },
    {
      img: "img/noticias/PaqNic 3-15 1.png",
      titulo: "PAQNIC - Horto Florestal",
      descrição: "Realizamos um super evento de integração para os veteramos receberem os recém chegados: o PAQNIC",
      link: "not-unicas/PAQ-nic.html"


    },
    {
      img: "img/noticias/Startup Summit-38 1.png",
      titulo: "PAQNIC - Horto Florestal",
      descrição: "Realizamos um super evento de integração para os veteramos receberem os recém chegados: o PAQNIC",
      link: "not-unicas/PAQ-nic.html"


    },
    {
      img: "img/noticias/Floripa mais tec-3 1 (3).png",
      titulo: "PAQNIC - Horto Florestal",
      descrição: "Realizamos um super evento de integração para os veteramos receberem os recém chegados: o PAQNIC",
      link: "not-unicas/PAQ-nic.html"


    },
    {
      img: "img/noticias/1689697106376 1 (1).png",
      titulo: "PAD papo: orgulho LGBTQIAP+",
      descrição: "Junho é o mês do Orgulho LGBTQIAP+ e o PAD, puxou esse papo importantíssimo nas unidades do PAQ!",
      link: "not-unicas/PAQ-nic.html"

    }
  ];

  const itensDiv = document.getElementById("paqnewsJS");

  itens.forEach(function (item) {
    const itemInfo = document.createElement("p");

    itemInfo.innerHTML = `<div class="paqnews-container-item">
    <img src="${item.img}" alt="">
    <div class="paqnews-container-descricao">
        <h3>${item.titulo}</h3>
        <p>${item.descrição}</p>
        <div class="saiba-mais">
            <a href="${item.link}">Saiba mais</a>
            <img src="img/seta-para-baixo 3.svg" alt="">
        </div>
    </div>
</div>`;

    itensDiv.appendChild(itemInfo);
  });
}
