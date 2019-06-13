export const getById = (phoneId) => {
  let url = `https://kniazev1.github.io/phone-app/api/phones/${phoneId}.json`;
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);

  xhr.send();

  let phone = JSON.parse(xhr.responseText);

  xhr.status != 200 ?
    xhr.status + ': ' + xhr.statusText :
    phone;

  return phone;
};

export const getAll = () => {
  let url = 'https://kniazev1.github.io/phone-app/api/phones.json';
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);

  xhr.send();

  let phones = JSON.parse(xhr.responseText);

  xhr.status != 200 ?
    xhr.status + ': ' + xhr.statusText :
    phones;

  return phones;
}
