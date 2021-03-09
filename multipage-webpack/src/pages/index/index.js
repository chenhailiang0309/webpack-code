import '@/styles/index.less';

document.write("this is index");

const a = 123;
console.log(a);

function nvm(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
}

async function timi(res) {
  let a = await nvm(2); //这里执行2s //await后面可以跟任何方法，对象
  console.log(a); //你等7s，才打印出结果
}

timi()
