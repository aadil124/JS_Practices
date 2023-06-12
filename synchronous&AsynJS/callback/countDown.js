const countResult = document.querySelector("#countDownResult");
let count = 10;
let timeout = 1000;

setTimeout(() => {
  countResult.innerHTML = count--;
  setTimeout(() => {
    countResult.innerHTML = count--;
    setTimeout(() => {
      countResult.innerHTML = count--;
      setTimeout(() => {
        countResult.innerHTML = count--;
        setTimeout(() => {
          countResult.innerHTML = count--;
          setTimeout(() => {
            countResult.innerHTML = count--;
            setTimeout(() => {
              countResult.innerHTML = count--;
              setTimeout(() => {
                countResult.innerHTML = count--;
                setTimeout(() => {
                  countResult.innerHTML = count--;
                  setTimeout(() => {
                    countResult.innerHTML = count--;
                    setTimeout(() => {
                      countResult.innerHTML = count--;
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
