<template>
  <div class="movements">
    <h2 class="title">Reservas</h2>
    <div class="content">
        <Reservation></Reservation>
        <Reservation></Reservation>
        <Reservation></Reservation>
    </div>
  </div>
</template>
<script>
import Reservation from '@/components/Reservations/Reservation';

export default {
  components: {
    Reservation
}
}
</script>
<style scoped>
  .movements {
    max-height: 100%;
    padding: 0 8px;
    margin-bottom: 14px;
  }

  .title {
    margin: 8px 16px 24px 16px;
    color: var(--brand-blue);
  }

  .content {
    max-height: 68vh;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: scroll;
  }
</style>