<script setup>
const props = defineProps({
    url: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: "Call to action",
    },
    title: {
        type: String,
    },
    buttonColor: {
        type: String,
        default: "dark-gray",
    },
    buttonColorHover: {
        type: String,
        default: "black",
    },
    buttonBorderColor: {
        type: String,
        default: "dark-gray",
    },
    buttonBorderColorHover: {
        type: String,
        default: "black",
    },
    buttonLabelColor: {
        type: String,
        default: "white",
    },
    buttonLabelColorHover: {
        type: String,
        default: "white",
    },
})
</script>

<template>
    <NuxtLink :to="props.url" :title="props.title" class="cta-button">
        {{ props.label }}
    </NuxtLink>
</template>

<style lang="scss" scoped>
.cta-button {
    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
    border: 2px solid v-bind("`var(--${buttonBorderColor})`");
    background-color: v-bind("`var(--${buttonColor})`");
    color: v-bind("`var(--${buttonLabelColor})`");
    border-radius: 0.5rem;
    display: inline-block;
    text-decoration: none;
    cursor: pointer !important;
    &:hover {
        border: 2px solid v-bind("`var(--${buttonBorderColorHover})`");
        background-color: v-bind("`var(--${buttonColorHover})`");
        color: v-bind("`var(--${buttonLabelColorHover})`");
    }
}
</style>
