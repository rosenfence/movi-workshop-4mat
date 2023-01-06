<script lang="ts">
  import clsx from 'clsx';

  export let type: 'head' | 'body';
  export let colspan = 1;
  export let rowspan = 1;
  export let highlight = false;
  export let className = '';
</script>

{#if type === 'head'}
  <th
    class={clsx('text-gray-700 bg-gray-100 border select-none transition-colors hover:bg-gray-200', className)}
    {colspan}
    {rowspan}><slot /></th
  >
{:else}
  <td class={clsx('text-gray-700 text-center border select-none', highlight && 'font-bold bg-orange-100', className)}
    ><slot /></td
  >
{/if}
