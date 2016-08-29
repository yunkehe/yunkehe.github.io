/**
 * 字串helper
 */
var HTxt=new function()
{
	var me= this;
	
	/**
	 * 取一个随机数
	 */
	this.make_random=function()
	{
		return 'c'+Math.random().toString().replace('0.','');
	};
	
	/**
	 * 将text字串重复n次
	 */
	this.repeat=function(x,n)
	{
		var txt='';
		x += '' ;
		for(var i=0;i<n;i++){txt += x;}
		return txt;
	};
	
	/**
	 * 字串x补充c字符，直到x的长度等于len
	 */
	this.add2pre= function(x,c,len)
	{
		x += '' ;
		if(x.length<len){x = me.repeat(c, len-x.length)+ x;  };
		return x;
	};
	
	/**
	 * 清除左右字串左右空白等
	 */
	this.trim=function(x)
	{
		return x.replace(/(^\s*)|(\s*$)/g, "");
	};
	
	/**
	 * 检查是否含有中文
	 */
	this.check_chinese=function(x)
	{
		return (new RegExp("[\u4E00-\u9FA5]|[\uFE30-\uFFA0]")).test( x );
	};
	
	/**
	 * 计算字符串占区域长度
	 * x, 字符串
	 * fsize, 字体大小
	 */
	this.str_width=function( x, fsize )
	{
		// 中文个数
		var cl= x.replace(new RegExp("[\u4E00-\u9FA5]|[\uFE30-\uFFA0]","g"),'**').length-x.length;
		// 英文个数
		var el= x.length-cl;
		
		return (cl*2+el)*fsize/2;
	};
	
	/* 名称: 截取字符串(lenth宽度内的有效英文字符个数)
	 */
	this.substr = function( str , length , ext )
	{
		!ext && (ext='');
		
		var len_one = 0 ;
		var num = 0 ;
		var ret = '' ;
		
		for ( i=0; i<str.length;i++ ) {
			if( me.check_chinese(str[i]) ){
				len_one = 2;
			} else {
				len_one = 1;
			}
			if( (len_one + num) > length ){
				ret += ext ;
				break;
			}
			num += len_one ;
			ret += str[i];
		}
		return ret ;
	};

	/*
	 * 超出指定宽度字符串加省略号	
	 */
	this.substr111 = function(s,short){
	    var len = 0 ;
	    var patten = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/ ;
	    var rt_str = "" ;
	    if(patten.test(s)){//中文
	        if(s.length<=short){
	            return s ;
	        }else{
	            return s.slice(0,2)+ s.slice(-1)+"..." ;
	        }
	    }
	    else{//英文
	        if(s.length<=short*2){
	            return s ;
	        }else{
	            return s.slice(0,4)+ s.slice(-2)+"..." ;
	        }
	    }
	};
	

};