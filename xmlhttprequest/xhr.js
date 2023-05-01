// Use XHR approach and print below details:
// INDIA->
// 1.Country name
// 2.Currency->currency  name -Indian Rupee
// 3.Capital->New Delhi
// 4.Region->Asia
// 5.Language->English,Hindi,Tamil
// Population:1380004385
// 6.Country Flag image url->png

// const xhr = new XMLHttpRequest();
// // console.log(xhr);

// xhr.open("GET", "https://restcountries.com/v3.1/all");

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     // var data = xhr.responseText;
//     // console.log(data);
//     var data = JSON.parse(xhr.responseText);

//     data.forEach((element) => {
//       //   console.log(element.name.common);

//       if (element.name.common === "India") {
//         const countyName = element.name.common;
//         const currencyName = element.currencies.INR.name;
//         const capitalName = element.capital[0];
//         const regionName = element.region;
//         const languages = element.languages;
//         // console.log(countyName);
//         // console.log(currencyName);
//         // console.log(capitalName);
//         // console.log(regionName);
//         // console.log(languages);
//         for (let key in languages) {
//           console.log(languages[key]);
//         }
//         const population = element.population;
//         // console.log(population);
//         const countyFlag = element.flags.png;
//         // console.log(countyFlag);
//         // console.log(element);

//         console.log(`
//         County Name : ${countyName}
//         Currency Name : ${currencyName}
//         Capital: ${capitalName}
//         Region: ${regionName}
//         Population: ${population}
//         Flag: ${countyFlag}

//         `);
//       }
//     });
//     // console.log(data[249].name);
//   }
// };
// xhr.send();

const xhr = new XMLHttpRequest();
// console.log(xhr);

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // var data = xhr.responseText;
    // console.log(data);
    var data = JSON.parse(xhr.responseText);

    data.forEach((element) => {
      const countyName = element.name.common;
      console.log(`
        Country Name:${countyName}
        `);

      const currencyName = element.currencies;
      for (let key in currencyName) {
        // console.log(currencyName[key].name);
        console.log(`
        Currency : ${currencyName[key].name}
        `);
      }

      const languages = element.languages;
      for (let key in languages) {
        // console.log(languages[key]);
        console.log(`
        Languages : ${languages[key]}
        `);
      }
    });
  }
};
xhr.send();
