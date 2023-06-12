const countResult = document.querySelector("#countDownResult");
let count = 10;
let timeout = 1000;
const countDownFun = () => {
  setTimeout(() => {
    countResult.innerHTML = count;
    count--;
    setTimeout(() => {
      countResult.innerHTML = count;
      count--;
      setTimeout(() => {
        countResult.innerHTML = count;
        count--;
        setTimeout(() => {
          countResult.innerHTML = count;
          count--;
          setTimeout(() => {
            countResult.innerHTML = count;
            count--;
            setTimeout(() => {
              countResult.innerHTML = count;
              count--;
              setTimeout(() => {
                countResult.innerHTML = count;
                count--;
                setTimeout(() => {
                  countResult.innerHTML = count;
                  count--;
                  setTimeout(() => {
                    countResult.innerHTML = count;
                    count--;
                    setTimeout(() => {
                      countResult.innerHTML = count;
                      count--;
                      setTimeout(() => {
                        countResult.innerHTML = count;
                        count--;
                        setTimeout(() => {
                          countResult.innerHTML = `Welcome to Callback Hell!!!`;
                        }, timeout);
                      }, timeout);
                    }, timeout);
                  }, timeout);
                }, timeout);
              }, timeout);
            }, timeout);
          }, timeout);
        }, timeout);
      }, timeout);
    }, timeout);
  }, timeout);
};

countDownFun();
