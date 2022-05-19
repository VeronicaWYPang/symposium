<script>
  export let event
</script>

<div class="flex gap-3 mt-10">
  <img src="{event.image}" alt="speaker name" class="rounded-full" width="80" height="80">
  <div>
    <div class="text-sm">{event.time}</div>
    <div class="text-xl font-bold">{event.title}</div>
    <div class="text-sm">{event.speaker}</div>
  </div>
</div>
