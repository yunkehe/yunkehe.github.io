/*
 * [{a: 123}, {a: 456}, {b: 789}] 转换成 [{a: [123, 456]}, {b: [789]}];
 * [{a: 123}, {a: 456}, {b: 789}]
 */

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