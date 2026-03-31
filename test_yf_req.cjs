const yf = require('yahoo-finance2').default;
yf.quote(['GC=F', 'SI=F']).then(res => console.log(res)).catch(e => console.error(e));
