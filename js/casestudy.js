const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 15000, // 15 seconds per slide
      disableOnInteraction: false,
    },
    on: {
      init: () => {
        if (window.instgrm) window.instgrm.Embeds.process();
      },
      slideChange: () => {
        if (window.instgrm) window.instgrm.Embeds.process();
      },
    }
  });