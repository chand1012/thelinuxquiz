/*
We want to use a simple point-based system for selecting a winning distro. I like bell curves.
Each distro has an internal rating for a given metric/question. When the user inputs a score for said question. the distros
that are closest (according to the bell curve) receive the most points. For example, if arch has security value 8, ubuntu
has security value 6, and the user entered 8 for security, Arch receives 3 points, ubuntu would receive 1, and so on. Distros
that match are given the most points, then those which fall outside are given fewer points.
*/

// this is what quizState looks like:
// const quizState = {
//   windows,
//   experience,
//   ux,
//   security,
//   privacy,
//   stability,
//   gaming,
//   customize,
//   install,
//   community,
// };

import * as DistroRatings from "./ratings";

// this definitely could be better
// outputs a string of the distro name
const compareResults = (quizState) => {
  const distroScores = {};

  // loop through each user score input.
  // compare against each distro's internal rating for the given score input
  // distros that are the same receive +3 points in distroScores, distros that are off by 1 receive 2 points,
  // and distros that are off by 2 receive 1 point. All others stay the same.
  // The distro which has the highest score at the end wins. second and third place are easy.

  Object.keys(DistroRatings).forEach((distroName) => {
    const distro = DistroRatings[distroName];
    distroScores[distroName] = 0;
    Object.keys(quizState).forEach((key) => {
      const distroValue = distro[key];
      const quizValue = quizState[key];

      if (quizValue == distroValue) {
        distroScores[distroName] += 3;
      } else if (quizValue == distroValue + 1 || quizValue == distroValue - 1) {
        distroScores[distroName] += 2;
      } else if (quizValue == distroValue + 2 || quizValue == distroValue - 2) {
        distroScores[distroName] += 1;
      }
    });
  });

  console.log(distroScores);

  let max = 0;
  let maxDistro = null;

  Object.keys(distroScores).forEach((key) => {
    if (distroScores[key] >= max) {
      max = distroScores[key];
      maxDistro = key;
    }
  });

  return maxDistro;
};

export default compareResults;
