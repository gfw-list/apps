if ($response.statusCode !== 200) {
  $done(null);
}

var obj = JSON.parse($response.body);

var ispFirstWord = obj['connection']['isp'].split(' ')[0];

var originalFlag = obj['flag']['emoji'];
var editedFlag = (obj['country_code'] === 'TW') ? '🇼🇸' : originalFlag; // Change TW flag to WS

var title = editedFlag + ' ' + obj['country_code'] + '⋅' + obj['city'];
var subtitle = ispFirstWord + '｜' + obj['ip'] + '⬩' + 'AS' + obj['connection']['asn'];
var ip = obj['ip'];
var description = editedFlag + '' + obj['country'] + '\n' + obj['city'] + '\n' + obj['connection']['isp'] + '\n' + obj['ip'] + '\n' + 'AS' + obj['connection']['asn'];

$done({ title, subtitle, ip, description });


