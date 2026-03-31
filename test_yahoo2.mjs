// simple native fetch test
async function test() {
  const url = 'https://query2.finance.yahoo.com/v8/finance/chart/SI=F';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  });
  console.log('Status SI=F:', res.status);
  const data = await res.json();
  const meta = data?.chart?.result?.[0]?.meta;
  console.log('meta:', meta);
}

test();
