<template>
  <main>
    <p>
      No hay reservas pendientes por revisar
    </p>
    <p>
      Reservas pendientes por revisar
    </p>
    <h1>
      25 de Agosto
      <div class="action">
        <slot name="action"></slot>
      </div>
      
    </h1>

  </main>
</template>
<style scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  h1,
  p {
    margin: 0;
    text-align: center;
  }

  h1 {
    margin-top: 14px;
    color: var(--brand-green);
  }

  .graphic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 48px 24px;
    box-sizing: border-box;
  }
</style>