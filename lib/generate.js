var emptyStringCheck = require("fuckingundefinedemptynull").isStringSet;

module.exports = (info) => {
  var merchant_id = info['merchant_id'] || "b865a4c43872710001c9c2de4b17b8be";
  var productDescription = info['product_description'] || encodeURIComponent("The seller did not provide a product description");
  var productCurrency = info['product_currency'] || encodeURIComponent("USD");
  var productAmount = info['product_amount'] || encodeURIComponent("1");
  var generatedURL = "https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=" + merchant_id + "&item_name=" + productDescription;
  if (emptyStringCheck(info['product_invoice'])) generatedURL = generatedURL + "&invoice=" + encodeURIComponent(info['product_invoice']);
  generatedURL = generatedURL + "&currency=" + productCurrency + "&amountf=" + productAmount.toString() + "&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&"
  var returnValue = {
    url: generatedURL
  }
  return returnValue;
}
