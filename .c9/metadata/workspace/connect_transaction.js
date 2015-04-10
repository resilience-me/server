{"filter":false,"title":"connect_transaction.js","tooltip":"/connect_transaction.js","undoManager":{"mark":89,"position":89,"stack":[[{"group":"doc","deltas":[{"start":{"row":41,"column":2},"end":{"row":51,"column":10},"action":"remove","lines":[" // upsert safety net (sum of all safety_net_pathways)","    db.collection(account).findAndModify({","        query: {type: \"total_safety_net\", currency: currency, dividendRate: dividendRate}, ","        update:{$inc:{total_pathway:Number(amount)}}, ","        upsert: true,","        new: true","        ","    }, ","        function(err,doc){","            console.log(doc)","        })"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":1},"end":{"row":39,"column":0},"action":"remove","lines":["       ","    // upsert safety_net pathway (mirror of dividend pathway)","    db.collection(account).findAndModify({","        query: {type: \"safety_net_pathway\", account: destination, currency: currency, dividendRate: dividendRate}, ","        update:{$inc:{total_pathway:Number(amount)}}, ","        upsert: true,","        new: true","        ","    }, ","        function(err,doc){","            console.log(doc)","        })",""]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":1},"end":{"row":28,"column":4},"action":"remove","lines":["","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":1},"end":{"row":28,"column":2},"action":"remove","lines":["","  "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":23},"end":{"row":34,"column":31},"action":"remove","lines":["tax_blob"]},{"start":{"row":34,"column":23},"end":{"row":34,"column":24},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":24},"end":{"row":34,"column":25},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":25},"end":{"row":34,"column":26},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":26},"end":{"row":34,"column":27},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"remove","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"remove","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":35},"end":{"row":34,"column":36},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":23},"end":{"row":34,"column":36},"action":"remove","lines":["dividend_blob"]},{"start":{"row":34,"column":23},"end":{"row":34,"column":24},"action":"insert","lines":["u"]},{"start":{"row":34,"column":24},"end":{"row":34,"column":25},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":25},"end":{"row":34,"column":26},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":26},"end":{"row":34,"column":27},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":35},"end":{"row":34,"column":36},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":36},"end":{"row":34,"column":37},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":37},"end":{"row":34,"column":38},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":38},"end":{"row":34,"column":39},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":39},"end":{"row":34,"column":40},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":40},"end":{"row":34,"column":41},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":23},"end":{"row":34,"column":41},"action":"remove","lines":["unsigned_dividends"]},{"start":{"row":34,"column":23},"end":{"row":34,"column":24},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":24},"end":{"row":34,"column":25},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":25},"end":{"row":34,"column":26},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":26},"end":{"row":34,"column":27},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":35},"end":{"row":34,"column":36},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":36},"end":{"row":34,"column":37},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":36},"end":{"row":34,"column":37},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":35},"end":{"row":34,"column":36},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"remove","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":26},"end":{"row":34,"column":27},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":25},"end":{"row":34,"column":26},"action":"remove","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":24},"end":{"row":34,"column":25},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":23},"end":{"row":34,"column":24},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":23},"end":{"row":34,"column":24},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":24},"end":{"row":34,"column":25},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":25},"end":{"row":34,"column":26},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":26},"end":{"row":34,"column":27},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":35},"end":{"row":34,"column":36},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":36},"end":{"row":34,"column":37},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":37},"end":{"row":34,"column":38},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":38},"end":{"row":34,"column":39},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":39},"end":{"row":34,"column":40},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":40},"end":{"row":34,"column":41},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":122,"column":0},"end":{"row":123,"column":0},"action":"remove","lines":["console.log(\"TRANSACTION CONNECTED\")",""]}]}]]},"ace":{"folds":[{"start":{"row":17,"column":46},"end":{"row":23,"column":4},"placeholder":"..."},{"start":{"row":24,"column":26},"end":{"row":26,"column":8},"placeholder":"..."},{"start":{"row":40,"column":26},"end":{"row":43,"column":8},"placeholder":"..."},{"start":{"row":90,"column":50},"end":{"row":119,"column":0},"placeholder":"..."}],"scrolltop":294.5,"scrollleft":0,"selection":{"start":{"row":33,"column":1},"end":{"row":43,"column":10},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":6,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1428655571728,"hash":"db1515255a663dc57b22db58065ef970e169618e"}