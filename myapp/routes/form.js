var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var data = {
  	title: '岡崎市避難所 物資検索箱',
    content: 'どうされましたか？'
  }
  res.render('form', data);
});

router.post('/result', (req, res, next) => {

	var param = req.body['question'];
 	if (param == '') {
		param = '特に質問はありません。'
	}

// Watson
	const AssistantV1 = require('ibm-watson/assistant/v1');
	const service = new AssistantV1({
		version: '2019-02-28',
		iam_apikey: 'ZYDSX6EWajrRmmSQ1zVQhCwu2eUOAtnwQc4zMeCjxZDJ',
		url: 'https://gateway.watsonplatform.net/assistant/api'
	});
	service.message({
		workspace_id: 'a895e4b8-b9e5-4412-8b5d-9790179fcf6e',
		input: {'text': param}
	})
	.then(rsp => {
		selected = rsp.output.text[0]

// Kintone
		const kintone = require('kintone-nodejs-sdk');
		let APIToken = 'KFEKBLSxs9plXjErpXjL2mNLTauwx1yqyOjR5mrZ'; // your API Token
		let basicUserName = 'yoshioka.mitsuyoshi@nifty.com'; // basicAuth user name
		let basicPassword = 'kintone9war'; // basicAuth password
		let kintoneAuth = new kintone.Auth();
		kintoneAuth.setBasicAuth(basicUserName, basicPassword);
		kintoneAuth.setApiToken(APIToken);
		let myDomainName = 'code4aichi.cybozu.com';
		let kintoneConnection = new kintone.Connection(myDomainName, kintoneAuth);
		let kintoneRecord = new kintone.Record(kintoneConnection);
		let appID = 26; // target appID

		let query = 'no>30';

		if (selected == 'SelectChild') {
			let query = 'milk>0';
			fields = ['hako', 'milk']
		} else {
			fields = ['hako', 'kanpan', 'no']
		}

		kintoneRecord.getRecords(appID, query, fields, false)
		.then((rsp) => {
			res.send(rsp);
		});
	});
});

module.exports = router;
