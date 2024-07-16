<template>
	<component
		:is="type"
		:class="className ? className : type"
	>
		<slot></slot>
	</component>
</template>
<script>
export default {
	name: 'YearEnd-Heading',
	props: {
		type: String,
		className: String,
	},
};
</script>
