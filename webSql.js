/**
 * HRG-localStorage v1.1.1 
 * Copyright 2015-2016 HIT ROBOT GROUP -wzb
 * Date: 2016-11-14
 * 
 * websql_add(data)   增加数据
 * websql_remove(id)  删除数据
 * websql_modify(id,data) 修改数据
 * websql_readAll()  获取全部数据
 * websql_clear()    清空全部数据
 */

//创建数据库连接
var websql_db = openDatabase('hitrobot-xx', '1.0', 'Well2-database', 10 * 1024 * 1024);
if (!websql_db) {
	console.log("Create database failed！");
}
websql_db.transaction(function(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS navigation (id INTEGER PRIMARY KEY,data TEXT)');
});
//增加数据
function websql_add(data) {
	websql_db.transaction(function(tx) {
			tx.executeSql('INSERT INTO navigation (data) VALUES (?)', [data]);
		},
		function(error) {
			console.log('add error');
		},
		function(e) {
			websql_readAll();
		}
	);
}
//删除数据
function websql_remove(id) {
	websql_db.transaction(function(tx) {
		tx.executeSql('DELETE FROM navigation WHERE id=?', [id]);
	}, function(error) {
		console.log('remove error');
	}, function(e) {
		websql_readAll();
	});
}
//修改数据
function websql_modify(id, data) {
	websql_db.transaction(function(tx) {
		tx.executeSql('UPDATE navigation SET data=? WHERE id=?', [data, id]);
	}, function(error) {
		console.log('modify error');
	}, function(e) {
		websql_readAll();
	});
}
//清空数据
function websql_clear() {
	websql_db.transaction(function(tx) {
		tx.executeSql("DELETE FROM MsgData", [], function(tx, rs) {
				console.log("数据删除成功!");           
			},
			function(tx, error) {
				console.log(error.source + "::" + error.message);
			});
	});
		websql_readAll();
}

function websql_readAll() {
	websql_db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM navigation', [], function(tx, results) {
			var len = results.rows.length,
				i;
			msg = "<p>查询记录条数: " + len + "</p>";
			document.querySelector('#total').innerHTML += msg;
			var cont = "";
			for (i = 0; i < len; i++) {
				cont += "<p>" + results.rows[i].id + "--------" + results.rows[i].data;
			}
			document.querySelector('#total').innerHTML = cont;
			console.log(tx);
			console.log(results);
		}, null);

	});

}