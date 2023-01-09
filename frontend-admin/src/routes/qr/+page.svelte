<script>
  import QRImage from '$lib/assets/qrcode.png';
</script>

<svelte:head>
  <title>QR 코드</title>
</svelte:head>

<div class="w-full h-full grid place-items-center">
  <div class="flex flex-col items-center">
    <img class="w-11/12 max-w-3xl mb-2" src={QRImage} alt="QR Code" />
    <h2 class="text-xl font-medium text-center">QR 코드를 스캔해서 접속해 주세요 🙇‍♂️</h2>
  </div>
</div>
