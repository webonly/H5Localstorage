/**
 * HRG-localStorage v1.1.1 
 * Copyright 2015-2016 HIT ROBOT GROUP -wzb
 * Date: 2016-11-14
 * 
 * webCache.get(k)    获取数据
 * webCache.add(k,v)  添加数据
 * webCache.remove(k) 移除数据
 * webCache.clear()   清空数据
 * webCache.all       获取所有数据
 * 
 */
var Cache={get:function(a){return JSON.parse(window.localStorage.getItem(a))},add:function(a,b){window.localStorage[a]=JSON.stringify(b)},remove:function(a){window.localStorage.removeItem(a)},clear:function(){window.localStorage.clear()},all:window.localStorage};


