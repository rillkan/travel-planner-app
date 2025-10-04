import {
  getDestinationInfo,
  getCapital,
  getBestSeason,
} from './destinations.js';

const plan = [];

window.showDestination = function () {
  const select = document.getElementById('countrySelect');
  const country = select.value;
  const info = getDestinationInfo(country);
  const capital = getCapital(country);
  const season = getBestSeason(country);

  const display = document.getElementById('travelInfo');
  display.innerHTML = `
    <h3>${info.emoji} ${country.toUpperCase()}</h3>
    <p>${info.fact}</p>
    <p><strong>Capital:</strong> ${capital}</p>
    <p><strong>Best Season:</strong> ${season}</p>
  `;
};

window.addToPlan = function () {
  const select = document.getElementById('countrySelect');
  const country = select.value;
  const planList = document.getElementById('travelPlan');

  if (plan.includes(country)) {
    alert(`${country} is already in your plan!`);
    return;
  }
  plan.push(country);

  const li = document.createElement('li');
  li.textContent = `${country.charAt(0).toUpperCase() + country.slice(1)}`;
  planList.appendChild(li);
};

window.clearPlan = function () {
  plan.length = 0;

  const planList = document.getElementById('travelPlan');
  planList.innerHTML = '';
};
