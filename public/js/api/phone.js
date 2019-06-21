export const getById = async (phoneId) => {
  let url = `https://kniazev1.github.io/phone-app/api/phones/${phoneId}.json`;

  let response = await fetch(url);
  let phone = await response.json();

  return phone;
};

export const getAll = (params) => {
  return fetch(`https://kniazev1.github.io/phone-app/api/phones.json?query=${params.query}&sortField=${params.sortField}`)
    .then(response => response.json())
    .then(phones => {
      const normalizedQuery = params.query.toLowerCase();
      const key = params.sortField;

      return phones
        .filter(
          phone => phone.name.toLowerCase().includes(normalizedQuery)
        )
        .sort((phoneA, phoneB) => {
          return phoneA[key] > phoneB[key] ? 1 : -1;
        });
    })
};
