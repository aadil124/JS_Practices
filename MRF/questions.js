/************************************** Start Questions ************************************* */
// Questions
// 1) Print all the countries from the Asia continent or region using filter function.
// 2) Get all the countries with population having less than 2 lakhs using filter function.
// 3) Print the details name , capital , flag using foreach and map function.
// 4) Print the total population of all countries using reduce function.
// 5) Print the countries name uses USD as currency.

/*************************************** End Questions *************************************** */

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // var data = xhr.responseText;
    // console.log(data);
    var data = JSON.parse(xhr.responseText);
    // console.log(data);

    // 1)  Using for each method
    // data.forEach((element) => {
    //   const countyName = element.name.common;
    //   const regionName = element.region;
    //   if (regionName === "Asia") {
    //     console.log(`Country Name:${countyName}`);
    //     // console.log(`Country Region:${regionName}`);
    //   }
    // });

    // 1)  Using for Map
    // data.map((data) => {
    //   if (data.region === "Asia") {
    //     console.log(`Country Name: ${data.name.common}`);
    //   }
    // });

    // 1)  Using for Filter Method
    // data.filter((data) => {
    //   if (data.region === "Asia") {
    //     console.log(`Country Name: ${data.name.common}`);
    //   }
    // });

    // 2) Get all the countries with population having less than 2 lakhs using filter function.
    // data.filter((data) => {
    //   if (data.population < 200000) {
    //     console.log(
    //       `Names : ${data.name.common} having Population: ${data.population}`
    //     );
    //   }
    // });

    // 3) Print the details name , capital , flag using foreach and map function.
    //using foreach method
    // data.forEach((element) => {
    //   console.log(`
    //   Country: ${element.name.common}
    //   Capital: ${element.capital}
    //   Flag: ${element.flags.png}
    //   `);
    // });

    //using MAP method
    data.map((data) => {
      console.log(`
      Country: ${data.name.common}
      Capital: ${data.capital}
      Flags: ${data.flags.png}
      `);
    });

    // 4) Print the total population of all countries using reduce function.

    // let totalPopulations = data.reduce((prev, curr) => {
    //   return (prev += curr.population);
    // }, 0);
    // console.log(`Total population of all countries: ${totalPopulations}`);

    // 5) Print the countries name uses USD as currency.
    // data.filter((data) => {
    //   // console.log(data.currencies.USD);
    //   if (data.currencies.USD) {
    //     console.log(`Name : ${data.name.common}`);
    //   }
    // });
  }
};
xhr.send();
