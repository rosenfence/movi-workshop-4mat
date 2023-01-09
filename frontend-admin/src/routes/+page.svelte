<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Cell from '$lib/components/+cell.svelte';
  import fetcher, { type Data } from '$lib/utils/fetcher';

  let datas: Data[] = [];
  let timer: NodeJS.Timer;

  onMount(async function () {
    datas = await fetcher();
    timer = setInterval(async () => {
      datas = await fetcher();
    }, 1000);
  });

  onDestroy(() => {
    timer && clearInterval(timer);
  });
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
      {#each datas as data}
        <tr class="h-12">
          <Cell type="body">{data.name}</Cell>
          <Cell type="body" highlight={data.result.partA[0].isTop}>{data.result.partA[0].value}</Cell>
          <Cell type="body" highlight={data.result.partA[1].isTop}>{data.result.partA[1].value}</Cell>
          <Cell type="body" highlight={data.result.partA[2].isTop}>{data.result.partA[2].value}</Cell>
          <Cell type="body" highlight={data.result.partA[3].isTop}>{data.result.partA[3].value}</Cell>
          <Cell type="body" highlight={data.result.partB.isTop}>{data.result.partB.value}</Cell>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
