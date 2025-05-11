
const prodotti = [
  {
    categoria: "LEGO",
    nome: "LEGO Star Wars Millennium Falcon",
    prezzo: "€159,99",
    dettagli: "Set 75192, 7541 pezzi, età 16+",
    imgUrl: "https://link-al-falcom-lego.jpg"
  },
  {
    categoria: "LEGO",
    nome: "LEGO Technic Porsche 911 RSR",
    prezzo: "€299,99",
    dettagli: "Set 42096, 1580 pezzi, età 18+",
    imgUrl: "https://link-porsche-technic.jpg"
  },
  {
    categoria: "Funko Pop",
    nome: "Funko Pop! Marvel: Spider-Man",
    prezzo: "€12,99",
    dettagli: "Figura in vinile, altezza 9 cm",
    imgUrl: "https://link-funko-spiderman.jpg"
  },
  {
    categoria: "Funko Pop",
    nome: "Funko Pop! Star Wars: Darth Vader",
    prezzo: "€14,99",
    dettagli: "Figura in vinile, altezza 9 cm",
    imgUrl: "https://link-funko-vader.jpg"
  },
  {
    categoria: "Action Figure",
    nome: "Hot Toys Iron Man Mark LXXXV",
    prezzo: "€399,99",
    dettagli: "1/6 scale, 30 cm, LED lights",
    imgUrl: "https://link-hot-toys-ironman.jpg"
  },
  {
    categoria: "Action Figure",
    nome: "NECA TMNT Leonardo",
    prezzo: "€49,99",
    dettagli: "Action figure 7'', articolato",
    imgUrl: "https://link-neca-leonardo.jpg"
  },
  {
    categoria: "Statuette",
    nome: "Kotobukiya Statue: Batman",
    prezzo: "€129,99",
    dettagli: "PVC 1/7 scale, altezza 30 cm",
    imgUrl: "https://link-statue-batman.jpg"
  },
  {
    categoria: "Statuette",
    nome: "Prime 1 Studio: Wonder Woman",
    prezzo: "€499,99",
    dettagli: "Polystone 1/4 scale, altezza 50 cm",
    imgUrl: "https://link-prime1-ww.jpg"
  }
];

// Salva in localStorage all’avvio
localStorage.setItem('prodotti', JSON.stringify(prodotti));
