const generate =  require('./generate');

test('No Parameters', () => {
  expect(generate({})).toMatchObject({url: "https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=b865a4c43872710001c9c2de4b17b8be&item_name=The%20seller%20did%20not%20provide%20a%20product%20description&currency=USD&amountf=1&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&"});
});

test('merchant_id is specified', () => {
  expect(generate({merchant_id: "test"})).toMatchObject({url: "https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=test&item_name=The%20seller%20did%20not%20provide%20a%20product%20description&currency=USD&amountf=1&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&"});
});

test('product_currency and product_amount is specified', () => {
  expect(generate({product_currency: "USD", product_amount: "100"})).toMatchObject({url: "https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=b865a4c43872710001c9c2de4b17b8be&item_name=The%20seller%20did%20not%20provide%20a%20product%20description&currency=USD&amountf=100&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&"});
});

test('product_description is specified', () => {
  expect(generate({product_description: encodeURIComponent("Specified product description")})).toMatchObject({url: "https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=b865a4c43872710001c9c2de4b17b8be&item_name=" + encodeURIComponent("Specified product description") + "&currency=USD&amountf=1&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&"});
});

test('product_invoice is specified', () => {
  expect(generate({product_invoice: "PRODINVOICE"})).toMatchObject({url: "https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=b865a4c43872710001c9c2de4b17b8be&item_name=The%20seller%20did%20not%20provide%20a%20product%20description&invoice=PRODINVOICE&currency=USD&amountf=1&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&"});
});
