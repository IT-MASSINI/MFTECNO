<!-- Stili in: mftecno.css (globale) -->
<template>
  <section class="text-feature-two py-section">
    <div class="container">
      <div class="row align-items-center g-5">

        <!-- ================================================
             COLONNA TESTO
             ================================================ -->
        <div class="col-lg-6">
          <br/>
          <div class="section-label fw-600 mb-2">MF Tecno</div>
          <h2 class="section-title">Impianti completi per il packaging industriale</h2>

          <p class="section-body mt-3">
            MF TECNO progetta e realizza impianti completi per la pesatura,
            il confezionamento e la palettizzazione di prodotti sfusi,
            integrando tutte le fasi della linea in un unico sistema affidabile
            e controllabile.
          </p>

          <!-- Checklist -->
          <ul class="feature-list mt-4">
            <li><i class="bi bi-check2-circle text-accent me-2"></i>Progettazione e produzione interamente interne</li>
            <li><i class="bi bi-check2-circle text-accent me-2"></i>Un unico interlocutore per tutto l'impianto</li>
            <li><i class="bi bi-check2-circle text-accent me-2"></i>Assistenza tecnica rapida e continuativa</li>
          </ul>

          <div class="mt-4 d-flex gap-3 flex-wrap btn-group-wrap">
            <nuxt-link :to="localePath('/chi-siamo')" class="scopri-btn">
              Scopri di più
            </nuxt-link>
            <nuxt-link :to="localePath('/contatti')" class="btn call-btn">
              Richiedi una call
              <span class="btn-arrow">
                <img src="/images/icon/icon_02.svg" class="call-icon-svg" alt="" />
              </span>
            </nuxt-link>
          </div>
        </div>

        <!-- ================================================
             COLONNA IMMAGINE + BADGE
             ================================================ -->
        <div class="col-lg-6 image-col">
          <img
            :src="'/images/home/impianto-completo.jpg'"
            alt="MF TECNO Full Packaging Plant"
            class="img-fluid shadow-lg feature-img"
          />

          <!-- Badge performance — posizionato in CSS responsive -->
          <NuxtLink :to="localePath('/efficienza')" class="stat-badge">
            <div class="stat-icon-wrap">
              <i class="bi bi-graph-up-arrow"></i>
            </div>
            <div class="stat-body">
              <div class="stat-value">Risparmia +30%</div>
              <div class="stat-label">sull'Efficienza linea</div>
              <div class="stat-link">LEGGI TUTTO →</div>
            </div>
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const localePath = useLocalePath()
</script>

