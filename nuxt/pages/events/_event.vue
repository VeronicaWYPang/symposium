<template>
  <div class="flex flex-col">
    <section class="py-20 container mx-auto px-4 flex-1">
      <div class="max-w-2xl mx-auto">
        <nuxt-link to="/event">
          ← See all events
        </nuxt-link>
        <div class="prose mt-2">
          <h2>
            {{ event.title }}
          </h2>
        </div>
        <img class=" rounded-tl rounded-bl object-cover my-3" :src="event.image" :alt="event.title">
        <nuxt-content :document="event" class="prose" />
      </div>
    </section>
    <main-footer class="flex-none" />
  </div>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData ({ $content, params }) {
    const event = await $content('events', params.event).fetch()
    return {
      event
    }
  }
}
</script>
