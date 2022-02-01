// code your solution here
const saturdayFun = function (a = "roller-skate") {
  return `This Saturday, I want to ${a}!`;
};
saturdayFun("bathe my dog");

const mondayWork = function (b = "go to the office") {
  return `This Monday, I will ${b}.`;
};

const wrapAdjective = function (flair = "*") {
  return function (adj = "special") {
    return `You are ${flair}${adj}${flair}!`;
  };
};
