export const getById = (phoneId) => {
  let url = `https://kniazev1.github.io/phone-app/api/phones/${phoneId}.json`;

  return fetch(url)
    .then(response => response.json());
    // .catch(error => console.error(error));
};

export const getAll = () => {
  let url = 'https://kniazev1.github.io/phone-app/api/phones.json';

  return fetch(url)
    .then(response => response.json());
    // .catch(error => console.error(error));
};
