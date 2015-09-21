/*
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

$(document).ready(function(){

// tip popups at some places
$('a.subtle').popover({
	trigger:   'hover focus',
	placement: 'bottom',
});

// randomize and pack results
var isotopeGutter = 20;
var isotope = $('#isotope').isotope({
	layoutMode: 'packery',
	packery: {
		gutter: isotopeGutter
	},
	sortBy: 'random',
	stamp: '#about'
});

// place the results all over the page, but centered
function reflow() {
	var isotopeColumns = Math.floor($(window).outerWidth() / $('#isotope section:not(.double)').first().outerWidth());
	var isotopeWidth = $('#isotope section:not(.double)').outerWidth() * isotopeColumns + (isotopeGutter * (isotopeColumns-1));
	$('#isotope').css('width', isotopeWidth);
	
	$('#thanks').css('width', isotopeWidth);
}
reflow();

// reflow when changing screen, just because it's cool
$(window).on('resize', function(){
	isotope.isotope('reloadItems');
	reflow();
});

// randomize thanking
$('#thanks section ul').isotope({
	layoutMode: 'packery',
	packery: {
		gutter: (isotopeGutter * 1.5)
	},
	sortBy: 'random',
});

});
