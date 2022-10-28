<template>
  <div class="bg-lightLiner text-mainBlue p-4 dark:bg-darkLiner">
    <div class="flex items-center justify-center text-mainBlue text-2xl pb-2">
      <div class="flex items-center justify-center pr-4">
        <a href="https://github.com/lingxuan0618" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" class="hover:text-hoverBlue"/>
          {{}}
        </a>
      </div>
      <div class="flex items-center justify-center pr-4">
        <a href="https://www.linkedin.com/in/LingXuan0618" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" class="hover:text-hoverBlue"/>
          {{}}
        </a>
      </div>
      <div class="flex items-center justify-center">
        <a href="https://lingxuan0618.github.io/" target="_blank">
          <font-awesome-icon icon="fa-solid fa-blog" class="hover:text-hoverBlue"/>
          {{}}
        </a>
      </div>
    </div>
    <p>Copyright © LingXuan</p>
  </div>
</template>
<script>

export default {
  name: 'HelloFooter',
};
</script>
