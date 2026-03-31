import fetch from 'node-fetch';

async function test() {
  const url = 'https://query2.finance.yahoo.com/v10/finance/quote?symbols=GC=F,SI=F,PL=F,INR=X';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  });
  console.log('Status:', res.status);
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

test();
