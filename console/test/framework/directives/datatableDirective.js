testApp
.directive('myTable',function(){
	return{
		restrict:'E',
		scope:false,
		link:link,
		template:'<table id="example" class="display" cellspacing="0" width="100%"></table>'
	}
	function link(scope, element, attrs, controller){
		
	}
});