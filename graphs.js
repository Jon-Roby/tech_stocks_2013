d3.json('data/retail.json', function(data) {
  for (var i = 0; i < data.length; i++) {
      data[i] = MG.convert.date(data[i], 'date');
  }

  MG.data_graphic({
      title: "Retail",
      description: "",
      data: data,
      width: 600,
      height: 200,
      right: 40,
      target: '#retail',
      legend: ["QUNR", "LITB", "ZU", "SALE", "WUBA"],
      legend_target: '#retailLegend'
  });
});

d3.json('data/messaging.json', function(data) {
  for (var i = 0; i < data.length; i++) {
      data[i] = MG.convert.date(data[i], 'date');
  }

  MG.data_graphic({
      title: "Messaging",
      description: "",
      data: data,
      width: 600,
      height: 200,
      right: 40,
      target: '#messaging',
      legend: ["MVNR", "RNG", "GOMO", "TRMR", "TWTR"],
      legend_target: '#messagingLegend'
  });
});

d3.json('data/ads.json', function(data) {

  for (var i = 0; i < data.length; i++) {

      data[i] = MG.convert.date(data[i], 'date');
  }

  MG.data_graphic({
      title: "Ads",
      description: "",
      data: data,
      width: 600,
      height: 200,
      right: 40,
      target: '#advertising',
      legend: ["MRIN", "YUME", "CRTO", "FUEL"],
      legend_target: '#advertisingLegend'
  });
});

d3.json('data/platform.json', function(data) {
  for (var i = 0; i < data.length; i++) {
      data[i] = MG.convert.date(data[i], 'date');
  }

  MG.data_graphic({
      title: "Platform",
      description: "",
      data: data,
      width: 600,
      height: 200,
      right: 40,
      target: '#platform',
      legend: ["MKTO", "ECOM", "CVT"],
      legend_target: '#platformLegend'
  });
});

d3.json('data/money.json', function(data) {
  for (var i = 0; i < data.length; i++) {
      data[i] = MG.convert.date(data[i], 'date');
  }

  MG.data_graphic({
      title: "Money",
      description: "",
      data: data,
      width: 600,
      height: 200,
      right: 40,
      target: '#money',
      legend: ["XOOM", "QIWI"],
      legend_target: '#moneyLegend'
  });
});

d3.json('data/security.json', function(data) {
  for (var i = 0; i < data.length; i++) {
      data[i] = MG.convert.date(data[i], 'date');
  }

  MG.data_graphic({
      title: "Security",
      description: "",
      data: data,
      width: 600,
      height: 200,
      right: 40,
      target: '#security',
      legend: ["FEYE", "CUDA"],
      legend_target: '#securityLegend'
  });
});

d3.json('data/website.json', function(data) {
  for (var i = 0; i < data.length; i++) {
      data[i] = MG.convert.date(data[i], 'date');
  }

  MG.data_graphic({
      title: "Website",
      description: "",
      data: data,
      width: 600,
      height: 200,
      right: 40,
      target: '#website',
      legend: ["EIGI", "WIX"],
      legend_target: '#websiteLegend'
  });
});

d3.json('data/miscellaneous.json', function(data) {
  for (var i = 0; i < data.length; i++) {
      data[i] = MG.convert.date(data[i], 'date');
  }

  MG.data_graphic({
      title: "Miscellaneous",
      description: "",
      data: data,
      width: 600,
      height: 200,
      right: 40,
      target: '#miscellaneous',
      legend: ["WBAI", "TXTR", "ATHM"],
      legend_target: '#miscellaneousLegend'
  });
});
