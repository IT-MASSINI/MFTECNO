<template>
  <!-- ============================================================
       MF TECNO — Catalogo Insaccatrici Piccoli Formati
       Stile: Babun shop puro — immagine + nome + filtri
       Niente prezzi · Niente cuoricini · Ultra-leggero
  ============================================================ -->
  <section class="spf-section">
    <div class="container">

      <!-- ── Barra filtri + conteggio ── -->
      <div class="spf-topbar">
        <p class="spf-count">
          Mostrando <strong>{{ filteredMachines.length }}</strong>
          macchine su <strong>{{ machines.length }}</strong>
        </p>

        <div class="spf-filters">
          <!-- Filtro Categoria — custom dropdown stile Babun -->
          <div class="spf-dropdown" :class="{ open: dropCategoria }" v-click-outside="() => dropCategoria = false">
            <button class="spf-dropdown-btn" @click="dropCategoria = !dropCategoria">
              <span>{{ activeCategoria === 'all' ? 'Categoria' : activeCategoria }}</span>
              <i class="bi bi-chevron-down spf-dropdown-chevron"></i>
            </button>
            <div class="spf-dropdown-menu">
              <button
                class="spf-dropdown-item"
                :class="{ active: activeCategoria === 'all' }"
                @click="activeCategoria = 'all'; dropCategoria = false"
              >Categoria</button>
              <button
                v-for="c in categorieOptions"
                :key="c"
                class="spf-dropdown-item"
                :class="{ active: activeCategoria === c }"
                @click="activeCategoria = c; dropCategoria = false"
              >{{ c }}</button>
            </div>
          </div>

          <!-- Filtro Tipo Insacco — custom dropdown stile Babun -->
          <div class="spf-dropdown" :class="{ open: dropTipo }" v-click-outside="() => dropTipo = false">
            <button class="spf-dropdown-btn" @click="dropTipo = !dropTipo">
              <span>{{ activeTipo === 'all' ? 'Tipo insacco' : activeTipo }}</span>
              <i class="bi bi-chevron-down spf-dropdown-chevron"></i>
            </button>
            <div class="spf-dropdown-menu">
              <button
                class="spf-dropdown-item"
                :class="{ active: activeTipo === 'all' }"
                @click="activeTipo = 'all'; dropTipo = false"
              >Tipo insacco</button>
              <button
                v-for="t in tipiOptions"
                :key="t"
                class="spf-dropdown-item"
                :class="{ active: activeTipo === t }"
                @click="activeTipo = t; dropTipo = false"
              >{{ t }}</button>
            </div>
          </div>
        </div>
      </div>
      <!-- /topbar -->

      <!-- ── Griglia prodotti — stile Babun ── -->
      <div class="spf-grid">
        <div
          v-for="machine in filteredMachines"
          :key="machine.id"
          class="spf-card"
        >
          <!-- Immagine — grande, occupa tutta la card superiore -->
         <NuxtLink :to="machineLink(machine.slug)" class="spf-card-img-link">
            <div class="spf-card-img-wrap">
              <img
                :src="machine.img"
                :alt="machine.title"
                class="spf-card-img"
                loading="lazy"
              />
              <!-- Overlay centrato — pill arancione, non barra piena -->
              <div class="spf-card-img-overlay">
                <span class="spf-hover-label">Scopri di più</span>
              </div>
            </div>
          </NuxtLink>

          <!-- Info sotto immagine — solo nome e badge serie -->
          <div class="spf-card-info">
            <span class="spf-card-serie">{{ machine.serie }}</span>
            <h3 class="spf-card-title">
              <NuxtLink :to="machineLink(machine.slug)">{{ machine.title }}</NuxtLink>
            </h3>
            <p class="spf-card-speed">Fino a {{ machine.speed }}</p>
          </div>
        </div>
      </div>
      <!-- /griglia -->

      <!-- Stato vuoto se nessun filtro corrisponde -->
      <div v-if="filteredMachines.length === 0" class="spf-empty">
        <i class="bi bi-search spf-empty-icon"></i>
        <p>Nessuna macchina corrisponde ai filtri selezionati.</p>
        <button class="spf-reset-btn" @click="resetFilters">Reimposta filtri</button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// ── Unica fonte di verità per i dati ─────────────────────────
import piccoli_formati_data, { type IMachine } from "~/data/piccoli-formati-data";

const localePath = useLocalePath();

function machineLink(slug: string) {
  return localePath({
    name: "insaccatrice-slug",
    params: { slug },
  });
}

// ── Direttiva click-outside ────────────────────────────────────
interface HTMLElementWithHandler extends HTMLElement {
  _clickOutsideHandler: (event: Event) => void;
}

const vClickOutside = {
  mounted(el: HTMLElementWithHandler, binding: any) {
    el._clickOutsideHandler = (event: Event) => {
      if (!el.contains(event.target as Node)) binding.value(event);
    };
    document.addEventListener("click", el._clickOutsideHandler);
  },
  unmounted(el: HTMLElementWithHandler) {
    document.removeEventListener("click", el._clickOutsideHandler);
  },
};

// ── Dati — importati dall'esterno ─────────────────────────────
const machines: IMachine[] = piccoli_formati_data;

// ── Stato dropdown ─────────────────────────────────────────────
const dropCategoria = ref(false);
const dropTipo = ref(false);

// ── Filtri ────────────────────────────────────────────────────
const activeCategoria = ref<string>("all");
const activeTipo = ref<string>("all");

const categorieOptions = computed(() =>
  [...new Set(machines.map((m) => m.categoria))]
);

const tipiOptions = computed(() =>
  [...new Set(machines.flatMap((m) => m.tipoInsacco))].sort()
);

const filteredMachines = computed<IMachine[]>(() =>
  machines.filter((m) => {
    const okCategoria =
      activeCategoria.value === "all" || m.categoria === activeCategoria.value;
    const okTipo =
      activeTipo.value === "all" || m.tipoInsacco.includes(activeTipo.value);
    return okCategoria && okTipo;
  })
);

function resetFilters() {
  activeCategoria.value = "all";
  activeTipo.value = "all";
}
</script>

<style scoped>
/* ============================================================
   SPF = Shop Piccoli Formati
   Palette MF TECNO · Stile Babun shop puro
   ============================================================ */

.spf-section {
  padding: 60px 0 100px;
  background: #ffffff;
}

/* ── Topbar ── */
.spf-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.spf-count {
  font-size: 1.05rem;
  font-weight: 400;
  color: #28477D;
  margin: 0;
  letter-spacing: 0.01em;
}

.spf-count strong {
  color: #28477D;
  font-weight: 700;
}

/* ── Tendine filtro — custom dropdown stile Babun ── */
.spf-filters {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.spf-dropdown {
  position: relative;
}

.spf-dropdown-btn {
  display: flex;
  align-items: center;
  gap: 28px;
  background: #ffffff;
  border: 1px solid #D8D8D8;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 0.88rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  color: #28477D;
  justify-content: space-between;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;
}

.spf-dropdown-btn:hover,
.spf-dropdown.open .spf-dropdown-btn {
  border-color: #28477D;
  box-shadow: 0 0 0 3px rgba(40, 71, 125, 0.08);
}

.spf-dropdown-chevron {
  font-size: 0.72rem;
  color: #9D9D9D;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.spf-dropdown.open .spf-dropdown-chevron {
  transform: rotate(180deg);
}

/* Menu a tendina — stile immagine 1 */
.spf-dropdown-menu {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  min-width: 100%;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.10);
  z-index: 100;
  overflow: hidden;
  display: none;
}

.spf-dropdown.open .spf-dropdown-menu {
  display: block;
}

.spf-dropdown-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 16px;
  font-size: 0.88rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  color: #28477D;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease;
  white-space: nowrap;
}

.spf-dropdown-item:hover {
  color: #ED7417;
  background: rgba(237, 116, 23, 0.07);
}

.spf-dropdown-item.active {
  color: #ED7417;
  font-weight: 600;
  background: transparent;
}

/* ── Griglia — 3 colonne come Babun ── */
.spf-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 28px;
}

@media (max-width: 991.98px) {
  .spf-grid { grid-template-columns: repeat(2, 1fr); gap: 36px 20px; }
}

@media (max-width: 575.98px) {
  .spf-grid { grid-template-columns: 1fr; gap: 32px; }
}

/* ── Card ── */
.spf-card {
  display: flex;
  flex-direction: column;
}

.spf-card-img-link {
  display: block;
  text-decoration: none;
  border-radius: 4px;
  overflow: hidden;
}

.spf-card-img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 2 / 2;
  min-height: 280px;
  background: #F5F5F5;
  padding: 16px;
}

.spf-card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.spf-card:hover .spf-card-img {
  transform: scale(1.04);
}

/* Overlay hover — pill arancione centrato, NON barra piena */
.spf-card-img-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(28, 28, 26, 0.25);
  opacity: 0;
  transition: opacity 0.28s ease;
}

.spf-card:hover .spf-card-img-overlay {
  opacity: 1;
}

.spf-hover-label {
  display: inline-block;
  background: #ED7417;
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 12px 28px;
  border-radius: 40px;
  box-shadow: 0 4px 16px rgba(237, 116, 23, 0.40);
  transform: translateY(6px);
  transition: transform 0.28s ease;
}

.spf-card:hover .spf-hover-label {
  transform: translateY(0);
}

/* ── Info sotto immagine ── */
.spf-card-info {
  padding: 14px 0 0;
}

.spf-card-serie {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ED7417;
  margin-bottom: 5px;
}

.spf-card-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #28477D;
  margin: 0 0 4px;
  line-height: 1.3;
}

.spf-card-title a {
  color: #28477D;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: color 0.2s ease, text-decoration-color 0.2s ease;
}

.spf-card-title a:hover {
  color: #28477D;
  text-decoration-color: #28477D;
}

.spf-card-speed {
  font-size: 0.82rem;
  color: #9D9D9D;
  margin: 0;
  font-weight: 500;
}

/* ── Stato vuoto ── */
.spf-empty {
  text-align: center;
  padding: 80px 20px;
  color: #9D9D9D;
}

.spf-empty-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  display: block;
  opacity: 0.4;
}

.spf-empty p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.spf-reset-btn {
  display: inline-block;
  padding: 10px 26px;
  border-radius: 40px;
  border: 1.5px solid #28477D;
  background: transparent;
  color: #28477D;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: "Satoshi", sans-serif;
}

.spf-reset-btn:hover {
  background: #28477D;
  color: #ffffff;
}
</style>
