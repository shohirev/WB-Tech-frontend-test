import axios from 'axios';

const getItemsData = async () => {
	const response = await axios.get('https://private-anon-76207985fb-lampshop.apiary-mock.com/lamps');
	console.log(response)
	const url = response.data[1].image;
	return url; //first picture url
};

const app = async () => {
	alert(document.documentElement.clientWidth)
	const switcher = document.querySelector('.items-switcher');
	switcher.classList.toggle('empty-switcher');
	switcher.classList.toggle('filled-switcher');

	for (let i = 0; i < 3; i += 1) {
		const item = document.createElement('div');
		item.classList.add('item');
		switcher.append(item);
	}

	const imageUrl = await getItemsData();

	const lampImage = document.createElement('img');
	lampImage.setAttribute('src', imageUrl);
	lampImage.setAttribute('alt', 'lamp image');

	const lampMainContainer = document.querySelector('.lamp-picture-container');
	lampMainContainer.append(lampImage);

	const lampRightContainer = document.querySelector('.lamp-presentation-container');
	lampRightContainer.append(lampImage.cloneNode());

	const lampSwitcherItem = document.querySelector('.items-switcher .item');
	lampSwitcherItem.append(lampImage.cloneNode());
	
};

export default app;
