{"filter":false,"title":"Untitled.js","tooltip":"/test_ideas/Untitled.js","undoManager":{"mark":22,"position":22,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":33,"column":7},"action":"insert","lines":["router.route('/removeAccount')","","    ","    .post(function(req, res) {","        ","        /* todo: oauth with req.body.oauth */","","db.collection(req.body.address).drop(function(err,res){console.log(res)})","","var WebSocket = require('ws')","","var websocket = new WebSocket('wss://s1.ripple.com')","","","var subscribeCommand = '{\"command\":\"unsubscribe\",\"id\":0,\"accounts\":[\"'+req.body.address+'\"]}'","","console.log(subscribeCommand)","","websocket.on('open', function(){","    console.log('Connected to the Ripple payment network')","    websocket.send(subscribeCommand)","   ","   ","})    ","    websocket.on('message', function(data){","        console.log('message', data)","   ","    })","","","                res.json(\"Removed all data for account: \" +req.body.address); ","","","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":7},"end":{"row":34,"column":0},"action":"insert","lines":["",""]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":4},"end":{"row":35,"column":0},"action":"insert","lines":["",""]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":4},"end":{"row":36,"column":0},"action":"insert","lines":["",""]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":4},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":4},"end":{"row":38,"column":0},"action":"insert","lines":["",""]},{"start":{"row":38,"column":0},"end":{"row":38,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":4},"end":{"row":39,"column":0},"action":"insert","lines":["",""]},{"start":{"row":39,"column":0},"end":{"row":39,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":4},"end":{"row":40,"column":0},"action":"insert","lines":["",""]},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":4},"end":{"row":41,"column":0},"action":"insert","lines":["",""]},{"start":{"row":41,"column":0},"end":{"row":41,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":0},"end":{"row":52,"column":40},"action":"insert","lines":["","### https:// + domain (eg: api.basicincome.co) + /v1/removeAccount","","req: { \"address\": your_account, \"oauth\": oauth_authorization_key }","","res: \"Removed all data for account: \" + your_account","","","","","","## Built on NodeJS, express, ws, MongoDB"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":4},"end":{"row":52,"column":40},"action":"remove","lines":["","    ","","### https:// + domain (eg: api.basicincome.co) + /v1/removeAccount","","req: { \"address\": your_account, \"oauth\": oauth_authorization_key }","","res: \"Removed all data for account: \" + your_account","","","","","","## Built on NodeJS, express, ws, MongoDB"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":0},"end":{"row":39,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":4},"end":{"row":39,"column":4},"action":"remove","lines":["","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":0},"end":{"row":38,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":4},"end":{"row":38,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":4},"end":{"row":37,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":4},"end":{"row":36,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":4},"end":{"row":35,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":7},"end":{"row":34,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":33,"column":7},"end":{"row":33,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1428737944916,"hash":"4bd85700a3c893d9fa29c7de67b68576132e54be"}