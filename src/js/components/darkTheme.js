window.addEventListener('DOMContentLoaded', () => {
  const systemTime = new Date(),
        systemHours = systemTime.getHours();

  const page = document.querySelector('.page'),
        userNavLink = document.querySelectorAll('.user-nav__link'),
        mainInfoTitle = document.querySelector('.main-info__title'),
        mainInfoText = document.querySelector('.main-info__text'),
        postsBackground = document.querySelector('.posts'),
        postsTitle = document.querySelector('.posts__title'),
        postsItemBackground = document.querySelectorAll('.posts__item'),
        postsItemTitle = document.querySelectorAll('.posts__item-title'),
        postsItemText = document.querySelectorAll('.posts__item-date-text'),
        postsItemLine = document.querySelectorAll('.posts__item-line'),
        postsText = document.querySelectorAll('.posts__item-text'),
        featuredWorksTitle = document.querySelector('.featured-works__title'),
        featuredWorksItemTitle = document.querySelectorAll('.featured-works__item-title'),
        featuredWorksItemText = document.querySelectorAll('.featured-works__item-text'),
        footerIcn = document.querySelectorAll('.footer__icn-item')
        footer = document.querySelector('.footer__text');

        function addDarkTheme() {
          page.classList.add('dark-page-js');
          userNavLink.forEach((element) => {
            element.classList.add('dark-text-js');
          });
          mainInfoTitle.classList.add('dark-text-js');
          mainInfoText.classList.add('dark-text-js');
          postsBackground.classList.add('dark-section-js');
          postsTitle.classList.add('dark-text-js');
          postsItemBackground.forEach((element) => {
            element.classList.add('dark-page-js')
          });
          postsItemTitle.forEach((element) => {
            element.classList.add('dark-text-js')
          });
          postsItemText.forEach((element) => {
            element.classList.add('dark-text-js')
          });
          postsItemLine.forEach((element) => {
            element.classList.add('dark-line-js')
          });
          postsText.forEach((element) => {
            element.classList.add('dark-text-js')
          });
          featuredWorksTitle.classList.add('dark-text-js');
          featuredWorksItemTitle.forEach((element) => {
            element.classList.add('dark-text-js')
          });
          featuredWorksItemText.forEach((element) => {
            element.classList.add('dark-text-js')
          });
          footer.classList.add('dark-text-js');
          footerIcn.forEach((element) => {
            element.classList.add('dark-icn-js')
          });
        };

        function removeDarkTheme() {
          page.classList.remove('dark-page-js');
          userNavLink.forEach((element) => {
            element.classList.remove('dark-text-js');
          });
          mainInfoTitle.classList.remove('dark-text-js');
          mainInfoText.classList.remove('dark-text-js');
          postsBackground.classList.remove('dark-section-js');
          postsTitle.classList.remove('dark-text-js');
          postsItemBackground.forEach((element) => {
            element.classList.remove('dark-page-js')
          });
          postsItemTitle.forEach((element) => {
            element.classList.remove('dark-text-js')
          });
          postsItemText.forEach((element) => {
            element.classList.remove('dark-text-js')
          });
          postsItemLine.forEach((element) => {
            element.classList.remove('dark-line-js')
          });
          postsText.forEach((element) => {
            element.classList.remove('dark-text-js')
          });
          featuredWorksTitle.classList.remove('dark-text-js');
          featuredWorksItemTitle.forEach((element) => {
            element.classList.remove('dark-text-js')
          });
          featuredWorksItemText.forEach((element) => {
            element.classList.remove('dark-text-js')
          });
          footer.classList.remove('dark-text-js');
          footerIcn.forEach((element) => {
            element.classList.remove('dark-icn-js')
          });
        };

  function darkTheme() {
    if (systemHours <= '5' || systemHours == '21' || systemHours == '22' || systemHours == '23' || systemHours == '0') {
      addDarkTheme();
    } else {
      removeDarkTheme();
    }
  };

  darkTheme();
});
