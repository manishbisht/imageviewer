/**
 * ownCloud - imageviewer
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Manish Bisht <manish.bisht490@gmail.com>
 * @copyright Manish Bisht 2016
 */
function changeimage()
{
	OC.dialogs.filepicker("Select file you want to edit", function(path){
		location.hash=encodeURI(OC.basename(path));
		var imagesource = OC.getRootPath()+"/remote.php/webdav"+path;
		$('#imagepreview').attr("src", imagesource);
		},
		false,
		["image/png", "image/jpeg"]
	);
}

function resetimage()
{
	$('#imagepreview').attr("src", OC.imagePath("imageviewer", "image.jpg"));
}

(function ($, OC) {
	$(document).ready(function () {
		$('#imagepreview').attr("src", OC.imagePath("imageviewer", "image.jpg"));
		$('#change').click(function () {
			changeimage();
		});
		$('#changebtn').click(function () {
			changeimage();
		});
		$('#reset').click(function () {
			resetimage();
		});
		$('#resetbtn').click(function () {
			resetimage();
		});
	});

})(jQuery, OC);