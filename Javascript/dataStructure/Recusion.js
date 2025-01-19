// indirect recurstion



let money = 100;
let totalApple = 0;

const buyApple = (x) => {
  //   console.log(x);
  if (x > 0) {
    console.log("i have", x, totalApple);
    buyMore(x);
  } else {
    console.log("I do not  have money ", totalApple);
  }
};

const buyMore = (x) => {
  totalApple++;
  buyApple(x - 10);
  console.log("buy more", x);
};
buyApple(money);
