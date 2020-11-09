(function () {

    const moreInformationBtn = document.querySelector('.more-btn');
    const profileInterestsBlock = document.querySelector('.profile-interests');
    const moreBtn = document.querySelector('.more-btn');
    const moreBtnText = document.querySelector('.more-btn-text');

    const handleMoreInformation = () => {
      if (profileInterestsBlock.classList.contains('hide')) {
        profileInterestsBlock && profileInterestsBlock.classList.remove('hide');
        moreBtn && moreBtn.classList.add('open');
        moreBtnText.innerHTML = "Hide information";
        return
      }
      profileInterestsBlock && profileInterestsBlock.classList.add('hide');
      moreBtn && moreBtn.classList.remove('open');
      moreBtnText.innerHTML = "More information";
    };

    moreInformationBtn && moreInformationBtn.addEventListener('click', handleMoreInformation)
  }
)();
