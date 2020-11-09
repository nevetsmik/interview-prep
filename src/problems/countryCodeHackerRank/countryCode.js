const fetch = window.fetch;

const getCountryCode = async (code) => {
  const fn = async (pageNumber, code) => {
    try {
      const response = await fetch(
        `https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`
      );
      const { data } = await response.json();
      const matchingCountry = data.filter(
        (country) => country.alpha2Code === code
      );
      if (matchingCountry.length > 0) {
        return matchingCountry[0].name;
      }
      return await fn(pageNumber + 1, code);
    } catch (error) {
      console.error("Something wrong happened");
    }
  };

  return await fn(1, code);
};

export default getCountryCode;
