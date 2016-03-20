<?php
script('imageviewer', 'script');
style('imageviewer', 'style');
?>

<div id="app">
	<div id="app-navigation">
		<?php print_unescaped($this->inc('part.navigation')); ?>
		<?php print_unescaped($this->inc('part.settings')); ?>
	</div>

	<div id="app-content">
		<div id="app-content-wrapper">
			<div id="app-content-wrapper" align="center">
				<div class="show-image">
					<img id="imagepreview">
					<button id="changebtn">Choose Image</button>
					<button id="resetbtn">Reset to Default</button>
				</div>
				<footer>
					NOTE : Hover on the image to see the options
				</footer>
			</div>
		</div>
	</div>
</div>
