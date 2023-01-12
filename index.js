function distanceFromHqInBlocks(pickUpLocation) {
  const scuberHeadquartersBlock = 42;
  return Math.abs(pickUpLocation - scuberHeadquartersBlock);
}

function distanceFromHqInFeet(pickUpLocation) {
  return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs(startingBlock - endingBlock) * 264;
}

function calculatesFarePrice(startingBlock, endingBlock) {
  const distanceInFeet = distanceTravelledInFeet(startingBlock, endingBlock);
  let price;
  if (distanceInFeet <= 400) {
    price = 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    price = (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    price = 25;
  } else price = "cannot travel that far";
  return price;
}
