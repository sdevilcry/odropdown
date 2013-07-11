odropdown
=========

jQuery - oDropDown Menu

This plugins will help to build fast dropdown menu to be used with any form you want.

I was inspired from this article : http://tympanus.net/codrops/2012/10/04/custom-drop-down-list-styling/comment-page-5/#comment-445223
And due to a need of a professional project, I wrote this plugin.

So, in first, thanks to HUGO GIRAUDEL for his tutorial and his beautiful css style (Example 3) I used back.

This plugin could be improved a lot (code and features).


How to :
========

1 / Include jquery plugins, css, and this plugin in the header.

2 / Initialize your content with this simple line.

$('.odropdown').odropdown();

3 / Add the minimal html container code :

<div class="odropdown wrapper-odropdown-3">
	<span>Title</span>
	<ul class="dropdown" data-target='targeted_input_id'>
		<li data-id="1">
			<a href="#">Entity 1</a>
		</li>
		<li data-id="2">
			<a href="#">Entity 2</a>
		</li>
		<li data-id="3">
			<a href="#">Entity 3</a>
		</li>
	</ul>
</div>

4 / Enjoy :)

More information :
==================

This plugin handle form for you, just add the given code into <form></form> tag.

Some elements need to be added as :
The "data-target" attribute is used to target and set the selected value into an input (this one can be created by yourself, but the plugin check it for you).
the "data-id" attribute is the value stored into the input when a user select of the element of the list.