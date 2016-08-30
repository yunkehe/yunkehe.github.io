function(){

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


};