<script lang="ts">
  import Cell from '../lib/components/+cell.svelte';
</script>

<svelte:head>
  <title>테스트 결과</title>
</svelte:head>

<div class="h-full py-4">
  <h2 class="mb-4 text-gray-700 text-2xl font-bold">테스트 결과</h2>
  <table class="border-collapse">
    <thead>
      <tr class="h-10">
        <Cell type="head" className="w-40" rowspan={2}>이름</Cell>
        <Cell type="head" colspan={4}>Part A</Cell>
        <Cell type="head">Part B</Cell>
      </tr>
      <tr class="h-10">
        <Cell type="head" className="w-36">O</Cell>
        <Cell type="head" className="w-36">△</Cell>
        <Cell type="head" className="w-36">ㅁ</Cell>
        <Cell type="head" className="w-36">☆</Cell>
        <Cell type="head" className="w-36">합</Cell>
      </tr>
    </thead>
    <tbody>
      {#each Array.from({ length: 10 }) as v, i}
        <tr class="h-12">
          <Cell type="body">새던</Cell>
          <Cell type="body">1</Cell>
          <Cell type="body">1</Cell>
          <Cell type="body">1</Cell>
          <Cell type="body">d</Cell>
          <Cell type="body">d</Cell>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
