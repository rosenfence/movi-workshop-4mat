<script lang="ts">
  import clsx from 'clsx';
  import { page } from '$app/stores';
  import '../app.css';
</script>

<div class="relative w-full h-full max-w-[768px] mx-auto overflow-y-auto">
  <nav class="w-full h-[60px] absolute left-0 top-0 p-4 bg-white">
    <ul class="flex gap-2">
      <li class="list-none">
        <a
          href="/"
          class={clsx(
            'text-lg font-medium transition-colors',
            $page.url.pathname === '/' ? 'text-orange-600' : 'text-gray-700'
          )}>결과 보기</a
        >
      </li>
      <li class="list-none">
        <a
          href="/qr"
          class={clsx(
            'text-lg font-medium transition-colors',
            $page.url.pathname === '/qr' ? 'text-orange-600' : 'text-gray-700'
          )}>QR 코드</a
        >
      </li>
    </ul>
  </nav>
  <main class="h-full pt-[60px] px-4">
    <slot />
  </main>
</div>
