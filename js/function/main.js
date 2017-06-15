function pagination(){

	/*
	 * slice翻页
	 */
	this.turnPage = {
	 		"length" : 0,
	 		"page" : 6,
	 		"cur_page" : 1,
	 		"max_cur_page" : 1,
	 		"$li" : null,

	 		init : function($li, $btn){
	 			// cons
	 			var self = this;

	 			self.$li = $li;
	 			self.length = $li.length;

	 			var length = self.length,
	 				page = self.page;

	 			self.max_cur_page = length%page ? parseInt(length/page)+1 : parseInt(length/page);

	 			if( $li.length > page ){
	 				$li.slice(page).hide();
	 				// 硬绑定
	 				self.turn = self.turn.bind(self);

		 			$btn.die("click").live("click", self.turn);

	 			}else{
	 				$btn.hide();
	 			}

	 		},

	 		turn : function(e){

	 			var self = this,
	 				page = self.page,
	 				cur_page = self.cur_page,
	 				$target = $(e.currentTarget);

	 			var flag = +$target.attr("flag");

	 			var new_page = flag + cur_page;

	 			if(	new_page <= 0 || new_page >  self.max_cur_page){
	 				return;
	 			}else{
		 			self.cur_page =	new_page;

		 			var start = (new_page-1) * page,
		 			    end = start + page;

		 			self.$li.hide().slice(start, end).show();
	 			}
	 		}
	 	};

	// @param   id   容器id
	// @param   tag  指定包裹每个文本的tag
	// @param   isRender  处理完成后用新html渲染页面
	this.parseHTMLByTag = function(id, tag, isRender){
	    var content = document.getElementById(id);
	    var tag = tag || 't';
	    var hb = content.outerHTML;

	    // var hb = document.body.outerHTML;
	    var hb = hb.replace(/>([^<]+)</igm,'><z>$1<\/z><');
	    //console.log('get Z',m);
	     var parser = new DOMParser();
	     var hb_dom = parser.parseFromString(hb,"text/html")
	     //console.log('parser',d);
	     var hb_dom_z = hb_dom.body.querySelectorAll('z');
	     //console.log('dom Z',s);
	     for(var i = 0;i<hb_dom_z.length;i++){
	          hb_dom_z[i].innerHTML = hb_dom_z[i].innerText.replace(/(\S)/igm,'<'+tag+'>$1</'+tag+'>');
	     }

	     var new_hb = hb_dom.body.outerHTML.replace(/<(\/)?z>/igm,'');
	     // document.body.outerHTML = new_hb;
	    
	    // 处理完成后渲染页面
	    if( isRender ) content.outerHTML = new_hb;

	    return new_hb;
	};
};

/**
 * 
 */
function computeMaxCallStackSize(){
	try{
		return 1 + computeMaxCallStackSize();
	}catch(e){
		return 1;
	}
};

console.log('最大调用栈层数: ', computeMaxCallStackSize())