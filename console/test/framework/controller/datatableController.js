testApp.controller('WithAjaxCtrl', WithAjaxCtrl);
WithAjaxCtrl.$inject = ['DTOptionsBuilder','DTColumnBuilder'];

function WithAjaxCtrl(DTOptionsBuilder, DTColumnBuilder) {
	   var vm = this;
	    vm.dtOptions = DTOptionsBuilder.fromSource('../data/table.json')
//	    .withBootstrap();
	            .withLanguage({
            "sEmptyTable":     "查询不到任何相关数据",
            "sInfo":           "共  _TOTAL_ 条记录",
            "sInfoEmpty":      "Showing 0 to 0 of 0 entries",
            "sInfoFiltered":   "(filtered from _MAX_ total entries)",
            "sInfoPostFix":    "",
            "sInfoThousands":  ",",
            "sLengthMenu":     "显示 _MENU_ 条每页",
            "sLoadingRecords": "数据加载中...",
            "sProcessing":     "Processing...",
            "sSearch":         "搜索:",
            "sZeroRecords":    "未查询到相关数据...",
            "oPaginate": {
                "sFirst":    "上页",
                "sLast":     "下页",
                "sNext":     "下页",
                "sPrevious": "上页"
            },
            "oAria": {
                "sSortAscending":  ": activate to sort column ascending",
                "sSortDescending": ": activate to sort column descending"
            }
        });
	    vm.dtColumns = [
	        DTColumnBuilder.newColumn('bookId').withTitle('序列'),
	        DTColumnBuilder.newColumn('name').withTitle('书名'),
	        DTColumnBuilder.newColumn('author').withTitle('作者'),
	        DTColumnBuilder.newColumn('pubTime').withTitle('发布时间'),
	        DTColumnBuilder.newColumn('price').withTitle('价格'),
	        DTColumnBuilder.newColumn('index').withTitle('INDEX').notVisible()
	    ];
}

