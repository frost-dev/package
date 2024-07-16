<template>
	<div
		class="YearEndReview YearEnd-four-tiles"
		style="background: linear-gradient(180deg, #052312 0%, #0f3e24 100%)"
		ref="contentToCapture"
	>
		<div class="YearEnd-four-tiles__wrap">
			<div class="YearEnd-four-tiles__content">
				<div class="YearEnd-four-tiles__grid-container">
					<div class="YearEnd-four-tiles__grid-item">
						<div class="YearEnd-four-tiles__main-title">GForest</div>
						<div class="YearEnd-four-tiles__main-desc">Look back sa lahat ng ambag mo para sa greener future with GForest.</div>
					</div>
					<div class="YearEnd-four-tiles__grid-item">
						<div class="YearEnd-four-tiles__sub-title">Wow! You planted</div>
						<span class="YearEnd-four-tiles__count">10 trees</span>
						<div class="YearEnd-four-tiles__sub-title">and helped reduce <br /><span>10g of carbon emissions!</span></div>
					</div>
					<div class="YearEnd-four-tiles__grid-item">
						<img src="./../../../assets/images/plain/gforest.svg" />
						<div class="YearEnd-four-tiles__sub-title">Your Green Energy</div>
						<div class="YearEnd-four-tiles__sub-title">You earned</div>
						<span class="YearEnd-four-tiles__count">2,000</span>
						<div class="YearEnd-four-tiles__sub-title">green energy!</div>
					</div>
					<div class="YearEnd-four-tiles__grid-item gforest-title">
						<div class="YearEnd-four-tiles__gforest-rank">You are officially a <span>Forest Guardian.</span></div>
					</div>
				</div>
			</div>
			<div class="YearEnd-Share-Footer">
				<img src="../../../assets/images/icons/gcash-share-logo-white.svg" />
				<span>Flashback 2024</span>
			</div>
		</div>
	</div>
</template>

<script>
import './style.less';

export default {
	name: 'ShareFourCol',
	// props: {
	// 	items: {
	// 		type: Array,
	// 		required: true,
	// 	},
	// },
};
</script>
