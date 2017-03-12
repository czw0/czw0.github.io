// JavaScript Document
jQuery(document).ready(function($){
	;(function(element) {
		
		var $container = $('.respl-items');
		$container.imagesLoaded(function() {          //图片的加载
			$container.isotope({
				containerStyle: {
					position: 'relative',
					height: 'auto',
					overflow: 'visible'
				},
				itemSelector: '.respl-item',
				sortAscending: true

			});
			_opTionSets();     //点击图片上的导航
			function _opTionSets(){
				var $optionSets = $('.respl-header .respl-option'),
					$optionLinks = $optionSets.find('a');
				$optionLinks.each(function(){
					$(this).click(function(){
						var $this = $(this);
						var $optionSet = $this.parents('.respl-option');
						$this.parent().addClass('select').siblings().removeClass('select');
						var options = {},key = $optionSet.attr('data-option-key'),value = $this.attr('data-rl_value');
						value = value === 'false' ? false: value;
						options[key] = value;
						$container.isotope(options);   //自适应  
						return false;
					});
				});
			}
		});
	})('.customerCase');
});

//悬停到图片上边红色
$(function(){
	$(".customerCase .ProductList li").hover(function(){
		$(this).removeClass('gray');
	},function(){
		$(this).addClass('gray');
	})
});
