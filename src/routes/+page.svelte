<script>
  import { error } from '@sveltejs/kit';
  export let data;
</script>
  {#each data.posts as post}
    <div>{post.title}</div>
  {/each}