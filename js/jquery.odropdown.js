
/*
 * jquery-odropdown plugin - v0.1
 *
 * Copyright (c) 2013 Vincent Schoener <vincent.schoener@gmail.com>
 *
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 */
(function($) {

	$.fn.odropdown = function(options) {

		var default_settings = {
			placeholder : 'span',
			placeholder_text : '',
			selected_index : -1,
			use_text_metrics: false,
			extra_width_metrics :0
		};

		var settings = $.extend( {}, default_settings, options );
		var selector = $(this).selector;


		return this.each(function() {
			var $this = $(this);
			var $list = $this.find('ul');
			var selected_index = settings.selected_index;
			var $placeholder = $this.find(settings.placeholder);

			if (settings.placeholder_text.length) {
				$placeholder.text(settings.placeholder_text);
			}

			// Prepare Form / input selection
			var $input = $('input[name="' + $list.attr('data-target') + '"]');
			var $form = $this.parents('form');

			if (settings.selected_index >= 0 && $this.find('li').length >= settings.selected_index) {
				var $li = $this.find('li:eq(' + settings.selected_index + ')');
				selectElementOfList($li);
			} else {
				$this.attr('tabindex', -1);
			}

			// Check if the form exist
			if ($form.length) {
				if (!$input.length) {
					$input = $('<input type="hidden" name="' + $list.attr('data-target') + '" value="" />');
					$input.appendTo($form);
				}
			}

			if (settings.use_text_metrics) {
				var width = getWidth() + settings.extra_width_metrics;

				$this.css('width', width + 'px');
			}

			$this.on('click', function(event){
				var is_active = $this.hasClass('active');

				// Delete all active class during to stay focus on the last one
				if ($(selector + '.active').length > 0) {
					$(selector + '.active').removeClass('active');
				}

				if (!is_active) {
					$this.addClass('active');
				}
				event.preventDefault();
				return false;
			});

			$list.find('li').on('click',function(e) {
				selectElementOfList($(this));
				$this.removeClass('active');

				// Have to be called and return false, else parent click will be triggered
				e.preventDefault();
				return false;
			});

			function selectElementOfList($li) {
				selected_index = $li.index();
				$placeholder.text($li.text());
				$this.attr('tabindex', selected_index);

				if ($input) {
					$input.attr('value', $li.attr('data-id'));

					// Trigger some events
					$input.trigger('change');
					$input.trigger('click');
				}
			}

			function getWidth()
			{
				var width = 0;
				$this.find('li').each(function() {
					var html_old = $(this).html();
					var html_text = $(this).text();
					var html_calc = '<span>' + html_text + '</span>';

					$(this).html(html_calc);
					var temporary_width = $(this).find('span:first').width();
					$(this).html(html_old);

					if (temporary_width > width) {
						width = temporary_width;
					}
				});
				return width;
			}
		});
	};
})(jQuery);