const renderLoader = (state) => {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  if (state.loadingProcess === 'loading data') {
    const loaderBackground = document.createElement('div');
    loaderBackground.classList.add('loader-background');
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loaderBackground.append(loader);
    loaderWrapper.append(loaderBackground);
  } else {
    loaderWrapper.innerHTML = '';
  }
};

const renderLampInfo = (state) => {
  const activeItem = state.items.find((item) => item.id === state.activeItemId);

  const material = document.querySelector('.feature-material');
  material.textContent = activeItem.material;
  const dimensions = document.querySelector('.feature-dimensions');
  const { height, width } = activeItem;
  dimensions.textContent = `H ${height} x W ${width} x D ${width}`;
  const weight = document.querySelector('.feature-weight');
  weight.textContent = activeItem.weight;
  const electrification = document.querySelector('.feature-electrification');
  electrification.textContent = activeItem.electrification;

  const currentLampImage = document.createElement('img');
  currentLampImage.setAttribute('src', activeItem.image);
  currentLampImage.setAttribute('alt', 'selected lamp image');

  const lampImageContainer = document.querySelector('.lamp-picture-container');
  const lampInRoomContainer = document.querySelector('.lamp-presentation-container');
  if (!lampImageContainer.firstElementChild) {
    lampImageContainer.append(currentLampImage);
    lampInRoomContainer.append(currentLampImage.cloneNode());
  } else {
    lampImageContainer.firstElementChild.replaceWith(currentLampImage);
    lampInRoomContainer.firstElementChild.replaceWith(currentLampImage.cloneNode());
  }

  const themeSwitcher = document.querySelector('.theme-switcher');
  const lightThemeSwitcher = document.querySelector('.light');
  const darkThemeSwitcher = document.querySelector('.dark');
  const roomBackground = document.querySelector('.presentation-side');

  if (activeItem.isDarkMode && window.getComputedStyle(roomBackground).display !== 'none') {
    themeSwitcher.classList.remove('disabled-button');
    lightThemeSwitcher.onclick = () => {
      state.theme = 'light';
    };
    darkThemeSwitcher.onclick = () => {
      state.theme = 'dark';
    };
  } else {
    themeSwitcher.classList.add('disabled-button');
    state.theme = 'light';
    lightThemeSwitcher.onclick = null;
    darkThemeSwitcher.onclick = null;
  }
};

const renderMode = (mode) => {
  const lightThemeBackground = document.querySelector('.light-theme');
  const darkThemeBackground = document.querySelector('.dark-theme');
  const lampPicture = document.querySelector('.lamp-presentation-container img');

  if (mode === 'light') {
    lightThemeBackground.style.display = 'block';
    darkThemeBackground.style.display = 'none';
    lampPicture.style.display = 'block';
  } else {
    darkThemeBackground.style.display = 'block';
    lightThemeBackground.style.display = 'none';
    lampPicture.style.display = 'none';
  }
};

export {renderLoader, renderLampInfo, renderMode};
