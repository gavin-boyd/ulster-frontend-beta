//throw off
function CallWebAPI() {

    // New XMLHTTPRequest
    var request = new XMLHttpRequest();
    request.open("POST", "/oauth/token", false);
    request.setRequestHeader("Authorization", authenticateUser(userName, passWord));
    request.send();
    // view request status
    alert(request.status);
    response.innerHTML = request.responseText;
}
function authenticateUser(user, password)
{
    var token = user + ":" + password;

    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    var hash = token;

    return "Basic " + hash;
}

var res = _REST.response.body;
if (res) {
  res = eval('(' + _REST.response.body + ')');
  var output = '';
  if (res.CampaignTotals) {
    if (res.CampaignTotals.DirectDonationAmount) {
      var total = res.CampaignTotals.DirectDonationAmount;
      total = JSON.stringify(total);
      total = total.replace('.5', '.50');
      output += '<div class="cell large-4">';
      output += '<div class="bordered radius text-center p-t-30 p-b-30 p-r-20 p-l-20">';
      output += '<div data-equalizer-watch="true">';
      output += '<h2 class="h4 uppercase">Amount raised</h2>';
      output += '<p class="m-b-0 extra-large text-sky-blue bl">&pound;' + total + '</p>';
      output += '</div>';
      output += '</div>';
      output += '</div>';
      print(output);
    }
  }
}
