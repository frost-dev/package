import html2canvas from 'html2canvas';

export default {
	data() {
		return {
			generatedSharePreview: null,
		};
	},
	methods: {
		async generateImage(parentRef, nestedRef) {
			try {
				await this.$nextTick();
				const parent = this.$refs[parentRef];
				const content = parent.$refs[nestedRef];

				if (!content) {
					throw new Error('Content not found');
				}

				const canvas = await html2canvas(content);

				const dataUrl = canvas.toDataURL('image/webp');
				const blob = await (await fetch(dataUrl)).blob();
				const file = new File([blob], 'year-end-review.webp', { type: 'image/webp' });

				this.generatedSharePreview = file;
			} catch (error) {
				console.error('Error generating image:', error);
			}
		},
		async onShare() {
			try {
				if (!this.generatedSharePreview) {
					await this.generateImage('yearEndReview');
				}

				if (navigator.canShare && navigator.canShare({ files: [this.generatedSharePreview] })) {
					await navigator.share({
						files: [this.generatedSharePreview],
					});
				}
			} catch (error) {
				console.error('Error sharing content:', error);
			}
		},
	},
	async mounted() {
		await this.generateImage('yearEndReview', 'contentToCapture');
	},
};
