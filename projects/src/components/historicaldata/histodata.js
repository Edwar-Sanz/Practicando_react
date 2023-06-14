const yahooFinance = require('yahoo-finance');

async function getHistoricalData (){
  try{
    const data = await yahooFinance.historical({
      symbol: 'AAPL',
      from: '2023-05-22',
      to: '2023-05-25',
      period: 'd'
    });
    console.log(data[0].date.getFullYear())
  }catch(error){
    console.log(error);
  }
}

getHistoricalData();