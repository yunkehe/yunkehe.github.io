/**
 * Created by Administrator on 2016/4/10.
 */
//try{
//    window.someNoneexistentFunction();
//}catch (error){
//    alert(error.message);
//}

function testFinally(){

    try{
        return 2;
    }catch (error){
        return 1;
    }finally {
        return 0;
    }
}

var finallyValue = testFinally();

//alert(finallyValue);

function process(values){

    if( !(values instanceof Array)){
        throw new Error('process(): Argument must be an array!');
    }

    values.sort();

    for(var i = 0, len = values.length; i<len; i++){
        if(values[i] > 100){
            return values;
        }
    }
}

//process(4)

// 错误处理策略

// 类型转换错误
function concat(str1, str2, str3){

    var result = str1 + str2;

    //if(str3){}
    if(typeof str3 == 'string'){
        result += str3;
    }

    return result;
}

//数据类型错误
function getQueryString(url){

    if(typeof url != 'string'){
        throw new Error('getQueryString(): url is not a string!')
    }

    var pos = url.indexOf("?");

    if(pos > 1){
        return url.substring(pos + 1);
    }

    return "";
}

getQueryString('heke');

//通信错误
function addQueryStringArg(url, name, value){

    if(url.indexOf('?') == -1){
        url += '?';
    }else {
        url += '&';
    }

    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);

    return url;
}

var url = 'http://www.somedomain.com';
var newUrl = addQueryStringArg(url, 'redir', 'http://www.somedomain.com?a=b&c=d');

console.log(newUrl);

var mods = [];

for(var i=0,len=mods.length; i<len; i++){
    try{
        mods[i].init();
    }catch(ex){
        // 处理错误
        logError("nonfatal", "Module init failed: " + ex.message);
    }
}


function logError(sev, msg){

    var img = new Image();;

    img.src = "log.php?sev=" + encodeURIComponent(sev) + "&msg=" + encodeURIComponent(msg);
}

function assert(condtion, message){

    if(!condtion){
        throw new Error(message);
    }
}