

var selected_coins = [];
var xAxis = 0;
$(document).ready(function () {

///  Calling API and modeling data for each chart ///
const btcData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
      times,
      prices
    }
  }
  
  
  const AdaData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ada&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
      times,
      prices
    }
  }
  
  
  const ethereumData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
      times,
      prices
    }
  }
  
  const BNBData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
      times,
      prices
    }
  }
  
  /// Error handling ///
  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  
  
  
  /// Charts ///
  let createBtcChart
  let createCosmosChart
  let createethereumChart
  let createBNBChart

  
  async function printBtcChart() {
    let { times, prices } = await btcData()
  
    let btcChart = document.getElementById('btcChart').getContext('2d');
  
    let gradient = btcChart.createLinearGradient(0, 0, 0, 400);
  
    gradient.addColorStop(0, 'rgba(247,147,26,.5)');
    gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;
  
    createBtcChart = new Chart(btcChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
  
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
  
        legend: {
          display: false
        },
  
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
  
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
  
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
  }
  
  
  
  async function printAdaChart() {
    let { times, prices } = await AdaData()
  
    let cosmosChart = document.getElementById('cosmosChart').getContext('2d');
  
    let gradient = cosmosChart.createLinearGradient(0, 0, 0, 400);
  
    gradient.addColorStop(0, 'rgba(27,30,54,.5)');
    gradient.addColorStop(.425, 'rgba(46,49,72,0)');
  
    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;
  
    createCosmosChart = new Chart(cosmosChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: "",
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(46,49,72,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
  
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
  
        legend: {
          display: false
        },
  
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
  
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
  
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
  }
  
  
  async function printBNBChart() {
    let { times, prices } = await BNBData()
  
    let ethereumChart = document.getElementById('BNBChart').getContext('2d');
  
    let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);
  
    gradient.addColorStop(0, 'rgba(88, 150, 80, 0.55)');
    gradient.addColorStop(.425, 'rgba(3, 138, 55, 0.15)');
  
    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;
  
    createBNBChart = new Chart(ethereumChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(0,100,0)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
  
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
  
        legend: {
          display: false
        },
  
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
  
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
  
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
  }
  
  async function printEthereumChart() {
    let { times, prices } = await ethereumData()
  
    let ethereumChart = document.getElementById('ethereumChart').getContext('2d');
  
    let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);
  
    gradient.addColorStop(0, 'rgba(78,56,216,.5)');
    gradient.addColorStop(.425, 'rgba(118,106,192,0)');
  
    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;
  
    createethereumChart = new Chart(ethereumChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(118,106,192,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
  
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
  
        legend: {
          display: false
        },
  
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
  
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
  
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
  }
  
  
  /// Update current price ///
  async function updateBNBPrice() {
    let { times, prices } = await BNBData()
    let currentPrice = prices[prices.length-1].toFixed(2);
  
    document.getElementById("BNBPrice").innerHTML = "$" + currentPrice;
  }

  async function updateEthereumPrice() {
    let { times, prices } = await ethereumData()
    let currentPrice = prices[prices.length-1].toFixed(2);
  
    document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
  }
  
  async function updateAdaPrice() {
    let { times, prices } = await AdaData()
    let currentPrice = prices[prices.length-1].toFixed(2);
  
    document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
  }
  
  async function updateBitcoinPrice() {
    let { times, prices } = await btcData()
    let currentPrice = prices[prices.length-1].toFixed(2);
  
    document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
  }
  
  updateBNBPrice()
  updateEthereumPrice()
  updateAdaPrice()
  updateBitcoinPrice()
  
  printBtcChart()
  printAdaChart()
  printEthereumChart()
  printBNBChart()























    getvetCoin();
    getcardanoCoin();
    getbtcCoin();
    getETHCoin();
    getBNBCoin();
   getCoins();
   
    $("#Home").on("click", function () {
        $("#chartContainer").show();
        // $(".About").hide();
        // $(".cube").show();
        //$("#chartContainer").hide();
        // addCoinToSelectedCoinsArray()
        // //getCoins();
        // getvetCoin();
        // getcardanoCoin();
        // getbtcCoin();
        // getETHCoin();

          

    });
  
        xAxis = 0;
        new_data = [];
        data_values = [];
        // $(".cube").hide();
        // $(".About").hide();
        // $("#chartContainer").show();
        // getCoinsPrice();

        
        
    
    $("#About").on("click", function () {
        
        
        // $(".About").show();
        // $(".cube").hide();
        // $("#chartContainer").hide();
      
       
        

        // About();
        
    });
   
    
    
    // $("#search").on("click", function () {
    //     var value = $(".form-control").val().toLowerCase();
    //     $(".cube ").filter(function () {
    //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //     });

    // });
});


// function getCoins() {
//     $("#coins").html("<img src='image/bitcoin-globe.gif' class='col-md-12'/>");
//     var my_url = "https://api.coingecko.com/api/v3/coins/list";
//     $.ajax({
//         url: my_url,
//         type: "get",
//         data: {},
//         success: function (result) {
//             console.log(result);
//             $("#coins").html("");
//             printAllCoins(result);
//         },
//         error: function (xhr) {
//             console.log("Error:", xhr);
//         }
//     });
// }
// //result.length
// function printAllCoins(result) {
//     for (let i = 0; i < result.length; i++) {
//         let cube = $("<div class='cube col-md-4 cube'></div>");
//         $(cube).append(`<label class="switch col-md-3"  ><input type="checkbox"  id="_${result[i].symbol}" onClick="addCoinToSelectedCoinsArray(this)">(<span class="slider round" ></span>)</label>`);
//         $(cube).append("<h3>" + result[i].symbol + "</h3>");
//         $(cube).append("<h6>" + result[i].name + "</h6>");
//         $(cube).append(`<div class=" btn btn-outline-warning" id="` + result[i].id + `"  onclick= 'getCoinsInfo( this.id )'> More Info </div>`);
//         if (!$("#coins").find(result).length) {
//             $("#coins").append(cube);
//         }
//     }
// }

function addCoinToSelectedCoinsArray(id) {
    let myStr = id.id;
    myStr = myStr.replace(/_/g, '');
    console.log(myStr)
    if (selected_coins.indexOf(myStr) >= 0) {
        selected_coins.splice(selected_coins.indexOf(myStr), 1);
        console.log(selected_coins);
        console.log(selected_coins.length)
       
    } else {
        if (selected_coins.length <= 4) {
            selected_coins.push(myStr);
            $('#coins #_' + myStr).prop("checked", true);
            console.log(selected_coins)
           
        } else {
            $('#_' + myStr).prop("checked", false);
            

            console.log(selected_coins)
            // showPopUpForCoins()
        

        }
    }
}



// function showPopUpForCoins() {
//     $("#Open_a_modal").html('');
//     Modal = $('<div class="modal col-md-12" id="myModal">');
//     $(Modal).append('<div class="modal-header">' + '<h1 class="H">Select up to five coins</h1>' + '</div>');
//     for (let i = 0; i < 5; i++) {
//         $(Modal).append('<div class="modal-body col-md-12">' + `<label class="switch i"  ><input type="checkbox" checked id="${selected_coins[i]}" onClick="removeCoinfrompopup(this)"><span class="slider round" ></span></label>` + "<h1 class='H'>" + selected_coins[i] + "</h1>")
//     }
//     $(Modal).append('<div class="modal-footer">' + '<div class="btn btn-outline-dark" id="close">close</div>' + '</div>');
//     $("#Open_a_modal").append(Modal);
//     var modal = document.getElementById('myModal');
//     modal.style.display = "block";

//     $("#close").on("click", function () {
//         modal.style.display = "none";
//     });
// }

function removeCoinfrompopup(id) {
    let myStr = id.id;
    myStr = myStr.replace(/_/g, '');
    console.log(myStr)
    if ($(id).prop("checked") == false) {
        $('#Open_a_modal #_' + myStr).prop("checked", false);
        $('#coins #_' + myStr).prop("checked", false);
        selected_coins.splice(selected_coins.indexOf(id.id), 1);
        console.log(selected_coins)
    } else {
        $('#Open_a_modal #_' + myStr).prop("checked", true);
        $('#coins #_' + myStr).prop("checked", true);
        selected_coins.push(myStr);
        console.log(selected_coins)

    }

}

function getCoinsInfo(id) {
    if (id in localStorage) {
        var stored_id = JSON.parse(localStorage.getItem(id));
        // calculate expiration time for item after 2 minutes,
        now = new Date();
        expiration = new Date(stored_id.time);
        expiration.setMinutes(expiration.getMinutes() + 0.5);
        showFromLS(stored_id);
        // Delete the item if too old
        if (now.getTime() > expiration.getTime()) {
            localStorage.removeItem(id);
        }
        
    } else {
        id = id.toLowerCase();
        my_url = "https://api.coingecko.com/api/v3/coins/" + id;
        console.log(my_url)
        $.ajax({
            url: my_url,
            type: "get",
            data: {},
            success: function (result) {
                localStorage.setItem(id, JSON.stringify({ time: new Date(), info: result }));
                printAllCoinsInfo(result);
                console.log(result);
            },
            error: function (xhr) {
                console.log("Error:", xhr);
            }
        });
    }
}
function getCoinsInfoo(id) {
    if (id in localStorage) {
        var stored_id = JSON.parse(localStorage.getItem(id));
        // calculate expiration time for item after 2 minutes,
        now = new Date();
        expiration = new Date(stored_id.time);
        expiration.setMinutes(expiration.getMinutes() + 0.5);
        showFromLS(stored_id);
        // Delete the item if too old
        if (now.getTime() > expiration.getTime()) {
            localStorage.removeItem(id);
        }
        
    } else {
        id = id.toLowerCase();
        my_url = "https://api.coingecko.com/api/v3/coins/" + id;
        console.log(my_url)
        $.ajax({
            url: my_url,
            type: "get",
            data: {},
            success: function (result) {
                localStorage.setItem(id, JSON.stringify({ time: new Date(), info: result }));
                printAllCoinsInfoo(result);
                console.log(result);
            },
            error: function (xhr) {
                console.log("Error:", xhr);
            }
        });
    }
}

function getCoinsInfooo(id) {
    if (id in localStorage) {
        var stored_id = JSON.parse(localStorage.getItem(id));
        // calculate expiration time for item after 2 minutes,
        now = new Date();
        expiration = new Date(stored_id.time);
        expiration.setMinutes(expiration.getMinutes() + 0.5);
        showFromLS(stored_id);
        // Delete the item if too old
        if (now.getTime() > expiration.getTime()) {
            localStorage.removeItem(id);
        }
        
    } else {
        id = id.toLowerCase();
        my_url = "https://api.coingecko.com/api/v3/coins/" + id;
        console.log(my_url)
        $.ajax({
            url: my_url,
            type: "get",
            data: {},
            success: function (result) {
                localStorage.setItem(id, JSON.stringify({ time: new Date(), info: result }));
                printAllCoinsInfooo(result);
                console.log(result);
            },
            error: function (xhr) {
                console.log("Error:", xhr);
            }
        });
    }
}

function getCoinsInfoooo(id) {
    if (id in localStorage) {
        var stored_id = JSON.parse(localStorage.getItem(id));
        // calculate expiration time for item after 2 minutes,
        now = new Date();
        expiration = new Date(stored_id.time);
        expiration.setMinutes(expiration.getMinutes() + 0.5);
        showFromLS(stored_id);
        // Delete the item if too old
        if (now.getTime() > expiration.getTime()) {
            localStorage.removeItem(id);
        }
        
    } else {
        id = id.toLowerCase();
        my_url = "https://api.coingecko.com/api/v3/coins/" + id;
        console.log(my_url)
        $.ajax({
            url: my_url,
            type: "get",
            data: {},
            success: function (result) {
                localStorage.setItem(id, JSON.stringify({ time: new Date(), info: result }));
                printAllCoinsInfoooo(result);
                console.log(result);
            },
            error: function (xhr) {
                console.log("Error:", xhr);
            }
        });
    }
}

function getCoinsInfO(id) {
    if (id in localStorage) {
        var stored_id = JSON.parse(localStorage.getItem(id));
        // calculate expiration time for item after 2 minutes,
        now = new Date();
        expiration = new Date(stored_id.time);
        expiration.setMinutes(expiration.getMinutes() + 0.5);
        showFromLS(stored_id);
        // Delete the item if too old
        if (now.getTime() > expiration.getTime()) {
            localStorage.removeItem(id);
        }
        
    } else {
        id = id.toLowerCase();
        my_url = "https://api.coingecko.com/api/v3/coins/" + id;
        console.log(my_url)
        $.ajax({
            url: my_url,
            type: "get",
            data: {},
            success: function (result) {
                localStorage.setItem(id, JSON.stringify({ time: new Date(), info: result }));
                printAllCoinsInfO(result);
                console.log(result);
            },
            error: function (xhr) {
                console.log("Error:", xhr);
            }
        });
    }
}


//Show information from localStorage
function showFromLS(result) {
    var more = $("<div class='more'></div>");
    $(more).html("<img src='image/coin.gif' width=238 height=160/>");
    setTimeout(function () {
        $(more).html("");
    }, 1000);
    setTimeout(function () {
        $(more).append("<img  src='" + result.info.image.small + "' />");
        $(more).append("<h4>" + result.info.market_data.current_price.usd.toFixed(4) + '$' + "</h4>");
        $(more).append("<h4>" + result.info.market_data.current_price.eur.toFixed(4) + '???' + "</h4>");
        $(more).append("<h4>" + result.info.market_data.current_price.ils.toFixed(4) + '???' + "</h3>");
        //$(more).append("<h4>" + result.info.market_data.current_price.ils.toFixed(4)*76.53071932 + '???' + "</h3>");
    }, 1000);
    $("#" + result.info.id).parent().append(more);
    $("#" + result.info.id).one('click', function () {
        $(more).slideToggle("slow")
        $("#" + result.info.id).parent().append(more);

    })
}

//Show information from api
function printAllCoinsInfo(result) {
    let more = $("<div class='more'></div>");
    $(more).append("<img class=fullBack src='" + result.image.small + "' />");
    setTimeout(function () {
        $(more).html("");
    }, 1000);
    setTimeout(function () {
        $(more).append("<img  src='" + result.image.small + "' />");
        $(more).append("<h5>" + result.market_data.current_price.usd.toFixed(4) + '$' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.eur.toFixed(4) + '???' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.ils.toFixed(4) + '???' + "</h5>");
        $(more).append("<h5>" +'<div>'+ "my money:"+'</div>' + result.market_data.current_price.usd.toFixed(4)*550.86666226 + '$' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.eur.toFixed(4)*550.86666226 + '???' + "</h5>");
        $(more).append("<h5 class='a'>" + result.market_data.current_price.ils.toFixed(4)*550.86666226 + '???' + "</h5>");
    }, 1000);

    if (!$("#" + result.id).find('.more').length) {
        $("#" + result.id).parent().append(more);
    }
    $("#" + result.id).one('click', function () {
        $(more).slideToggle("slow")
        $("#" + result.id).parent().append(more);
    })
}
function printAllCoinsInfoo(result) {
    let more = $("<div class='more'></div>");
    // $(more).html("<img src='image/coin.gif' width=238 height=160/>");
    $(more).append("<img class=fullBack  src='" + result.image.small + "' />");
    setTimeout(function () {
        $(more).html("");
    }, 1000);
    setTimeout(function () {
        $(more).append("<img  src='" + result.image.small + "' />");
        $(more).append("<h5>" + result.market_data.current_price.usd.toFixed(4) + '$' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.eur.toFixed(4) + '???' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.ils.toFixed(4) + '???' + "</h5>");
        $(more).append("<h5>" +'<div>'+ "my money:"+'</div>' + result.market_data.current_price.usd.toFixed(4)*38.33173029 + '$' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.eur.toFixed(4)*38.33173029 + '???' + "</h5>");
        $(more).append("<h5 class='b'>" + result.market_data.current_price.ils.toFixed(4)*38.33173029 + '???' + "</h5>");
    }, 1000);

    if (!$("#" + result.id).find('.more').length) {
        $("#" + result.id).parent().append(more);
    }
    $("#" + result.id).one('click', function () {
        $(more).slideToggle("slow")
        $("#" + result.id).parent().append(more);
    })
}

function printAllCoinsInfooo(result) {
    let more = $("<div class='more'></div>");
    $(more).append("<img class=fullBack src='" + result.image.small + "' />");
    setTimeout(function () {
        $(more).html("");
    }, 1000);
    setTimeout(function () {
        $(more).append("<img  src='" + result.image.small + "' />");
        $(more).append("<h5>" + result.market_data.current_price.usd.toFixed(4) + '$' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.eur.toFixed(4) + '???' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.ils.toFixed(4) + '???' + "</h5>");
        $(more).append("<h5>" +'<div>'+ "my money:"+'</div>' + result.market_data.current_price.usd.toFixed(4)*0.00320780 + '$' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.eur.toFixed(4)*0.00320780 + '???' + "</h5>");
        $(more).append("<h5 class='c'>" + result.market_data.current_price.ils.toFixed(4)*0.00320780 + '???' + "</h5>");
        
    }, 1000);

    if (!$("#" + result.id).find('.more').length) {
        $("#" + result.id).parent().append(more);
    }
    $("#" + result.id).one('click', function () {
        $(more).slideToggle("slow")
        $("#" + result.id).parent().append(more);
    })
}

function printAllCoinsInfoooo(result) {
    let more = $("<div class='more'></div>");
    $(more).append("<img class=fullBack src='" + result.image.small + "' />");
    setTimeout(function () {
        $(more).html("");
    }, 1000);
    setTimeout(function () {
        $(more).append("<img  src='" + result.image.small + "' />");
        $(more).append("<h5>" + result.market_data.current_price.usd.toFixed(4) + '$' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.eur.toFixed(4) + '???' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.ils.toFixed(4) + '???' + "</h5>");
        $(more).append("<h5>" +'<div color:green>'+ "my money:"+'</div>' + result.market_data.current_price.usd.toFixed(4)*0.05017693 + '$' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.eur.toFixed(4)*0.05017693 + '???' + "</h5>");
        $(more).append("<h5 class='d'>" + result.market_data.current_price.ils.toFixed(4)*0.05017693 + '???' + "</h5>");
    }, 1000);

    if (!$("#" + result.id).find('.more').length) {
        $("#" + result.id).parent().append(more);
    }
    $("#" + result.id).one('click', function () {
        $(more).slideToggle("slow")
        $("#" + result.id).parent().append(more);
    })
}

function printAllCoinsInfO(result) {
    let more = $("<div class='more'></div>");
    $(more).append("<img class=fullBack src='" + result.image.small + "' />");
    setTimeout(function () {
        $(more).html("");
    }, 1000);
    setTimeout(function () {
        $(more).append("<img  src='" + result.image.small + "' />");
        $(more).append("<h5>" + result.market_data.current_price.usd.toFixed(4) + '$' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.eur.toFixed(4) + '???' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.ils.toFixed(4) + '???' + "</h5>");
        $(more).append("<h5>" +'<div>'+ "my money:"+'</div>' + result.market_data.current_price.usd.toFixed(4)*0.12538729 + '$' + "</h5>");
        $(more).append("<h5>" + result.market_data.current_price.eur.toFixed(4)*0.12538729 + '???' + "</h5>");
        $(more).append("<h5 class='e'>" + result.market_data.current_price.ils.toFixed(4)*0.12538729 + '???' + "</h5>");
    }, 1000);

    if (!$("#" + result.id).find('.more').length) {
        $("#" + result.id).parent().append(more);
    }
    $("#" + result.id).one('click', function () {
        $(more).slideToggle("slow")
        $("#" + result.id).parent().append(more);
    })
}




var data_values = []
function getCoinsPrice() {

    my_url = "";
    let coins = "";
    for (let i = 0; i < selected_coins.length; i++) {
        var res = selected_coins[i].toUpperCase()
        coins += res + ",";
    }
    my_url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + coins.slice(0, -1) + "&tsyms=USD";
    if (coins != "") {
        $.ajax({
            url: my_url,
            type: "get",
            data: {},
            success: function (result) {
                var d = new Date();
                console.log(result);
                new_data = [];

                for (let r = 0; r < selected_coins.length; r++) {
                    if (result[selected_coins[r].toUpperCase()]) { // if coin exist
                        if (!data_values[selected_coins[r].toUpperCase()]) {
                            data_values[selected_coins[r].toUpperCase()] = [];
                        }
                        data_values[selected_coins[r].toUpperCase()].push({ x: xAxis, y: result[selected_coins[r].toUpperCase()].USD });
                        new_data.push(
                            {
                                type: "line",
                                name: selected_coins[r].toUpperCase(),
                                showInLegend: true,
                                axisYIndex: 1,
                                label: xAxis,
                                dataPoints: data_values[selected_coins[r].toUpperCase()]
                            }
                        )
                    }
                }

                var chart = new CanvasJS.Chart("chartContainer", {
                    title: {
                        text: selected_coins + ' to USD',
                    },
                    axisY: [{
                        title: "Coin value",
                        lineColor: "#C24642",
                        tickColor: "#C24642",
                        labelFontColor: "#C24642",
                        titleFontColor: "#C24642",
                        suffix: "k"
                    },],
                    toolTip: {
                        shared: true
                    },
                    legend: {
                        cursor: "pointer",
                        itemclick: toggleDataSeries
                    },
                    data: new_data

                });


                function toggleDataSeries(e) {
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                       
                    } else {
                        e.dataSeries.visible = true;
                    }
                    e.chart.render();
                    

                }
                $("#coins").append(chart);
                chart.render();
                xAxis += 0.1;
            },
            error: function (xhr) {
                console.log("Error:", xhr);

            }
        });
    } 


}
var interval = setInterval(function () { getCoinsPrice(); }, 500);


function getvetCoin() {
    $("#coins").html("<img src='image/bitcoin-globe.gif' class='col-md-12'/>");
    var my_url = 'https://api.coingecko.com/api/v3/coins/vechain';
    $.ajax({
        url: my_url,
        type: "get",
        data: {},
        success: function (r) {
            console.log(r);
            $("#coins").html("");
            printvetCoin(r);
        },
        error: function (xhr) {
            console.log("Error:", xhr);
        }
    });
}

function printvetCoin(r) {
        let cube = $("<div class='cube col-md-4 cube'></div>");
        $(cube).append(`<label class="switch col-md-3"  ><input type="checkbox"  id="_${r.symbol}" onClick="addCoinToSelectedCoinsArray(this)">(<span class="slider round" ></span>)</label>`);
        $(cube).append("<h3>" + r.symbol + "</h3>");
        $(cube).append("<h6>" + r.name + "</h6>");
        $(cube).append(`<div class=" btn btn-outline-warning" id="` + r.id + `"  onclick= 'getCoinsInfo( this.id )'> More Info </div>`);
        if (!$("#coins").find(r).length) {
            $("#coins").append(cube);
           
        
    }
}

function getcardanoCoin() {
    $("#coinss").html("<img src='image/bitcoin-globe.gif' class='col-md-12'/>");
    var my_url ='https://api.coingecko.com/api/v3/coins/cardano';
    $.ajax({
        url: my_url,
        type: "get",
        data: {},
        success: function (r) {
            console.log(r);
            $("#coinss").html("");
            printcardanoCoin(r);
        },
        error: function (xhr) {
            console.log("Error:", xhr);
        }
    });
}

function printcardanoCoin(r) {
        let cube = $("<div class='cube col-md-4 cube'></div>");
        $(cube).append(`<label class="switch col-md-3"  ><input type="checkbox"  id="_${r.symbol}" onClick="addCoinToSelectedCoinsArray(this)">(<span class="slider round" ></span>)</label>`);
        $(cube).append("<h3>" + r.symbol + "</h3>");
        $(cube).append("<h6>" + r.name + "</h6>");
        $(cube).append(`<div class=" btn btn-outline-warning" id="` + r.id + `"  onclick= 'getCoinsInfoo( this.id )'> More Info </div>`);
        if (!$("#coinss").find(r).length) {
            $("#coinss").append(cube);
    }
}

function getbtcCoin() {
    $("#coinss").html("<img src='image/bitcoin-globe.gif' class='col-md-12'/>");
    var my_url ='https://api.coingecko.com/api/v3/coins/bitcoin';
    $.ajax({
        url: my_url,
        type: "get",
        data: {},
        success: function (r) {
            console.log(r);
            $("#coinss").html("");
            printbtcCoin(r);
        },
        error: function (xhr) {
            console.log("Error:", xhr);
        }
    });
}
//result.length
function printbtcCoin(r) {
        let cube = $("<div class='cube col-md-4 cube'></div>");
        $(cube).append(`<label class="switch col-md-3"  ><input type="checkbox"  id="_${r.symbol}" onClick="addCoinToSelectedCoinsArray(this)">(<span class="slider round" ></span>)</label>`);
        $(cube).append("<h3>" + r.symbol + "</h3>");
        $(cube).append("<h6>" + r.name + "</h6>");
        $(cube).append(`<div class=" btn btn-outline-warning" id="` + r.id + `"  onclick= 'getCoinsInfooo( this.id )'> More Info </div>`);
        if (!$("#coinsss").find(r).length) {
            $("#coinsss").append(cube);
    }
}

function getETHCoin() {
    $("#coinss").html("<img src='image/bitcoin-globe.gif' class='col-md-12'/>");
    var my_url ='https://api.coingecko.com/api/v3/coins/ethereum';
    $.ajax({
        url: my_url,
        type: "get",
        data: {},
        success: function (r) {
            console.log(r);
            $("#coinss").html("");
            printbtcETHCoin(r);
        },
        error: function (xhr) {
            console.log("Error:", xhr);
        }
    });
}
//result.length
function printbtcETHCoin(r) {
        let cube = $("<div class='cube col-md-4 cube'></div>");
        $(cube).append(`<label class="switch col-md-3"  ><input type="checkbox"  id="_${r.symbol}" onClick="addCoinToSelectedCoinsArray(this)">(<span class="slider round" ></span>)</label>`);
        $(cube).append("<h3>" + r.symbol + "</h3>");
        $(cube).append("<h6>" + r.name + "</h6>");
        $(cube).append(`<div class=" btn btn-outline-warning" id="` + r.id + `"  onclick= 'getCoinsInfoooo( this.id )'> More Info </div>`);
        if (!$("#coinssss").find(r).length) {
            $("#coinssss").append(cube);
    }
}

function getBNBCoin() {
    $("#coinss").html("<img src='image/bitcoin-globe.gif' class='col-md-12'/>");
    var my_url ='https://api.coingecko.com/api/v3/coins/binancecoin';
    $.ajax({
        url: my_url,
        type: "get",
        data: {},
        success: function (r) {
            console.log(r);
            $("#coinss").html("");
            printbtcBNBCoin(r);
        },
        error: function (xhr) {
            console.log("Error:", xhr);
        }
    });
}
//result.length
function printbtcBNBCoin(r) {
        let cube = $("<div class='cube col-md-4 cube'></div>");
        $(cube).append(`<label class="switch col-md-3"  ><input type="checkbox"  id="_${r.symbol}" onClick="addCoinToSelectedCoinsArray(this)">(<span class="slider round" ></span>)</label>`);
        $(cube).append("<h3>" + r.symbol + "</h3>");
        $(cube).append("<h6>" + r.name + "</h6>");
        $(cube).append(`<div class=" btn btn-outline-warning" id="` + r.id + `"  onclick= 'getCoinsInfO( this.id )'> More Info </div>`);
        if (!$("#coinsssss").find(r).length) {
            $("#coinsssss").append(cube);
    }
}





