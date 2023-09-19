// code your solution here
function saturdayFun(fun = 'roller-skate'){
    return `This Saturday, I want to ${fun}!`;
}
saturdayFun('bathe my dog');

const mondayWork = function(mondayWork = 'go to the office'){
    return `This Monday, I will ${mondayWork}.`;
}
mondayWork('be interviewed');

function wrapAdjective(flair = "*") {
    return function(name = "special") {
      return `You are ${flair}${name}${flair}!`;
    };
}

