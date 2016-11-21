/*
 * [{a: 123}, {a: 456}, {b: 789}] 转换成 [{a: [123, 456]}, {b: [789]}];
 * [{a: 123}, {a: 456}, {b: 789}]
 */

var doJSON = {
    /**
     * url字符串转json
     */
    //  var str = "http://192.168.199.103:83/secondhan/index.html?id=107&platform=android&userId=91";
    getQueryString: function getQueryString(url){
        var queryObj = {};//定义数组  
        var query = url ? url.substr(url.indexOf('?')) : window.location.search.substr(1);

        query.replace(/(\w+)=(\w+)/ig, function(a, b, c){
            queryObj[b] = unescape(c);
        });  

        return queryObj; 
    }
};

function mergeObj(data){
    var values = [];
    var key_names = [];

    data.forEach(function(v){
        for(var key in v){
            if( v.hasOwnProperty(key) ){

                if( key_names.indexOf(key) == -1 ){
                    key_names.push(key);

                    values[key_names.length-1] = [];
                    values[key_names.length-1].push( v[key] );

                }else{
                    values[key_names.length-1].push( v[key] )
                }
            };
        }
    })

    var new_arr = [];
    key_names.forEach(function(v, i){
        new_arr.push({key_names: valuse[i]})
    })

    console.log(new_arr)
}