const destinations = {
  japan: {
    emoji: '🗾',
    fact: 'Home to Mount Fuji and sushi!',
    capital: 'Tokyo',
    bestSeason: 'Spring'
  },
  italy: {
    emoji: '🍝',
    fact: 'Famous for pasta and the Colosseum.',
    capital: 'Rome',
    bestSeason: 'Spring'
  },
  brazil: {
    emoji: '🌴',
    fact: 'Home of the Amazon rainforest.',
    capital: 'Brasilia',
    bestSeason: 'Summer'
  }
};

export function getDestinationInfo(country) {
  return {
    emoji: destinations[country].emoji,
    fact: destinations[country].fact
  };
}

export function getCapital(country) {
  return destinations[country].capital;
}

export function getBestSeason(country) {
  return destinations[country].bestSeason;
}
