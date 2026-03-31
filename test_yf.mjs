import yahooFinance from 'yahoo-finance2';

async function test() {
  try {
    const symbols = ['GC=F', 'SI=F', 'PL=F', 'INR=X'];
    const results = await yahooFinance.quote(symbols);
    for (const r of results) {
      console.log(`${r.symbol}: ${r.regularMarketPrice} (prev: ${r.regularMarketPreviousClose})`);
    }
  } catch(e) {
    console.error(e);
  }
}

test();
