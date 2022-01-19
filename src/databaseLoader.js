import axios from 'axios';

export default async (state) => {
  state.loadingProcess = 'loading data';
	const data = await axios.get('https://private-anon-76207985fb-lampshop.apiary-mock.com/lamps')
                          .then((response) => response.data)
                          .catch((error) => {
                            state.error = error;
                          });
  state.items = data;
  state.loadingProcess = 'loaded';
	return;
};
