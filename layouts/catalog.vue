<template>
  <!--
    Layout: catalog
    Per pagine catalogo su sfondo bianco (senza hero-foto).

    Differenza da "default":
      · force-sticky="true" su header-one → navbar parte già con
        testo navy e logo colorato (non bianco su bianco).
      · Lo scroll e il comportamento .fixed rimangono IDENTICI
        al layout default: la navbar si comporta normalmente,
        semplicemente i colori partono già "light" sin dall'inizio.
  -->
  <div>
    <header-one :force-sticky="true" />

    <main class="catalog-main">
      <slot />
    </main>

    <footer-catalog />
  </div>
</template>

<script setup lang="ts">
// Nessuna logica: tutto gestito da header-one tramite force-sticky
</script>

<style>
/*
  La navbar è position:fixed → il main inizia a y=0 e finirebbe sotto la barra.
  Compensiamo con padding-top pari all'altezza della navbar in stato sticky:
    Desktop ≥992px: topbar (36px) + inner (64px) → ma quando è .fixed
                    la topbar scompare → rimane solo inner ≈ 80px totali
                    (include padding interno 10px top+bottom + logo ~60px)
    Tablet 768-991px: niente topbar, inner ≈ 68px
    Mobile <768px:   inner ≈ 60px
*/
.catalog-main {
  padding-top: 80px;
  background-color: #f5f5f5;
}

@media (max-width: 991.98px) {
  .catalog-main { padding-top: 68px; }
}

@media (max-width: 767.98px) {
  .catalog-main { padding-top: 60px; }
}
</style>
