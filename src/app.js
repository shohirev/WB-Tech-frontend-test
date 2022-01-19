import onChange from 'on-change';
import {renderLoader, renderLampInfo, renderMode} from './renders.js';
import getItemsDatabase from './databaseLoader.js';

const app = async () => {
	const state = {
		items: null,
		activeItemId: 1,
		theme: 'light',
    loadingProcess: null,
	};

	const watchedState = onChange(state, (path, value) => {
    if (path === 'loadingProcess') {
      renderLoader(watchedState);
    }
		if (path === 'activeItemId') {
			renderLampInfo(watchedState);
		}
		if (path === 'theme') {
      renderMode(value);
		}
	});

  await getItemsDatabase(watchedState);

  const switchers = document.querySelector('.switchers');

  watchedState.items.forEach((item) => {
    const switcher = document.createElement('div');
    switcher.classList.add('lamp-switcher');
    if (item.id === watchedState.activeItemId) {
      switcher.classList.add('active-lamp-switcher');
    }
    switchers.append(switcher);

    const lampImage = document.createElement('img');
    lampImage.setAttribute('src', item.image);
    lampImage.setAttribute('alt', 'lamp image');
    switcher.append(lampImage);

    switcher.onclick = () => {
      const previousActiveSwitcher = document.querySelector('.active-lamp-switcher');
      previousActiveSwitcher.classList.remove('active-lamp-switcher');
      switcher.classList.add('active-lamp-switcher');
      watchedState.activeItemId = item.id;
    };
  });

	renderLampInfo(watchedState);
};

export default app;
