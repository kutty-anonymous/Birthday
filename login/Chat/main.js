window.sr = ScrollReveal();
sr.reveal('.dark-overlay', {
  duration: 2500,
  delay: 1000,
});

sr.reveal('#chat1, #chat2, #chat3, #chat4, #chat5, #chat6, #chat7,#chat8', {
  viewFactor: 0,
  duration: 2000,
  origin: 'top',
  distance: '20px',
}, 4000)

sr.reveal('#chat1, #chat3 ,#chat5, #chat7', {
  origin: 'top',
}, 4000)

sr.reveal('#chat2, #chat4, #chat6,#chat8', {
  origin: 'bottom',
}, 4000)

sr.reveal('#chat1', {
    delay: 4000,
}, 4000)


sr.reveal('h2', {
  viewFactor:0.2,
  duration: 1500,
  origin: 'left',
  distance: '200px',
  reset: true,
})

