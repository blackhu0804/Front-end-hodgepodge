setTimeout(() => {
  import(
    /* webpackChunkName: 'sum-test' */
    /* webpackPrefetch: true */
    "./sum"
  ).then((m) => {
    console.log(m.default(3, 4));
  });
}, 3000000);
