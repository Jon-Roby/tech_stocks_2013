var retail = [
  "WUBA",
  "LITB",
  "QUNR",
  "SALE",
  "ZU"
]

var messaging = [
  "TRMR",
  "RNG",
  "TWTR",
  "MVNR",
  "GOMO"
]

var advertising = [
  "MRIN",
  "YUME",
  "CRTO",
  "FUEL"
]

var platform = [
  "MKTO",
  "ECOM",
  "CVT"
]

var money = [
  "XOOM",
  "QIWI"
]

var security = [
  "CUDA",
  "FEYE"
]

var website = [
  "EIGI",
  "WIX"
]

var miscellaneous = [
  "TXTR",
  "WBAI",
  "ATHM"
]

var all = [retail, messaging, advertising, platform, money, security, website, miscellaneous];

function requestStockData(stockList) {
  var return_data = [];
  for (var i = 0; i < stockList.length; i++) {

    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://marketdata.websol.barchart.com/getHistory.json?key=c115027a1af8ccdda6f1cefbe24f6587&symbol=" + stockList[i] + "&type=daily&startDate=20100101&endDate=20150101",
      data: "{}",
      beforeSend: function(xmlHttpRequest) {
        xmlHttpRequest.withCredentials = true;
      },

      success: function(data) {
        return_data.push(data.results);
        document.body.innerHTML = JSON.stringify(return_data);
        console.log(return_data);
      }

    });
  }
}

requestStockData(messaging);
