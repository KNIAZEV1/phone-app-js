export const getById = async (phoneId) => {
  let url = `https://kniazev1.github.io/phone-app/api/phones/${phoneId}.json`;

  let response = await fetch(url);
  let phone = await response.json();

  return phone;
};

export const getAll = async () => {
  let url = 'https://kniazev1.github.io/phone-app/api/phones.json';

  let response = await fetch(url);
  let phones = await response.json();

  return phones;
};
