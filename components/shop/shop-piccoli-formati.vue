<template>
  <!-- ============================================================
       MF TECNO — Catalogo Insaccatrici Piccoli Formati
       Filtri: Macchinari (categoria) | I tuoi Prodotti (gruppi+voci)
               | Stili di Confezione (tipoInsacco) | Ricerca
  ============================================================ -->
  <section class="spf-section">
    <div class="container">

      <!-- ── Barra filtri ── -->
      <div class="spf-topbar">
        <span class="spf-topbar-label">Filtra per:</span>

        <div class="spf-filters">

          <!-- 1. Macchinari → legge "categoria" — selezione singola -->
          <div class="spf-dropdown" :class="{ open: dropCategoria }" v-click-outside="() => dropCategoria = false">
            <button class="spf-dropdown-btn" @click="dropCategoria = !dropCategoria">
              <span>{{ activeCategoria === 'all' ? 'Macchinari' : activeCategoria }}</span>
              <i class="bi bi-chevron-down spf-dropdown-chevron"></i>
            </button>
            <div class="spf-dropdown-menu">
              <label class="spf-dropdown-header">Macchinari</label>
              <button
                class="spf-dropdown-item"
                :class="{ active: activeCategoria === 'all' }"
                @click="activeCategoria = 'all'; dropCategoria = false"
              >Tutti</button>
              <button
                v-for="c in categorieOptions"
                :key="c"
                class="spf-dropdown-item"
                :class="{ active: activeCategoria === c }"
                @click="activeCategoria = c; dropCategoria = false"
              >{{ c }}</button>
            </div>
          </div>

          <!-- 2. I tuoi Prodotti → gruppi con checkbox per voce -->
          <div class="spf-dropdown" :class="{ open: dropProdotti }" v-click-outside="() => dropProdotti = false">
            <button class="spf-dropdown-btn" @click="dropProdotti = !dropProdotti">
              <span>{{
                activeProdotti.length === 0
                  ? 'I tuoi Prodotti'
                  : activeProdotti.length === 1
                    ? activeProdotti[0]
                    : `${activeProdotti.length} selezionati`
              }}</span>
              <i class="bi bi-chevron-down spf-dropdown-chevron"></i>
            </button>
            <div class="spf-dropdown-menu spf-dropdown-menu--grouped">

              <div
                v-for="gruppo in prodottiGruppi"
                :key="gruppo.gruppo"
                class="spf-group"
                :class="{
                  'spf-group--open': expandedGruppi.includes(gruppo.gruppo),
                  'spf-group--active': isGruppoAttivo(gruppo.gruppo, gruppo.voci)
                }"
              >
                <!-- ── Riga intestazione: [checkbox gruppo] [nome] ... [freccetta accordion] ── -->
                <div class="spf-group-header">

                  <!-- Checkbox: seleziona/deseleziona tutto il gruppo -->
                  <label class="spf-group-check-label" @click.stop>
                    <input
                      type="checkbox"
                      :checked="isGruppoAttivo(gruppo.gruppo, gruppo.voci)"
                      :indeterminate="isGruppoIndeterminate(gruppo.gruppo, gruppo.voci)"
                      @change="toggleGruppo(gruppo.gruppo, gruppo.voci)"
                    />
                    <span class="spf-group-name">{{ gruppo.gruppo }}</span>
                  </label>

                  <!-- Freccetta: espande/collassa le voci -->
                  <button
                    class="spf-group-expand-btn"
                    @click.stop="toggleExpand(gruppo.gruppo)"
                    :aria-label="`Espandi ${gruppo.gruppo}`"
                  >
                    <i class="bi bi-chevron-down spf-group-chevron"></i>
                  </button>

                </div>

                <!-- Voci del gruppo — visibili solo se il gruppo è espanso -->
                <div class="spf-group-voci">
                  <label
                    v-for="voce in gruppo.voci"
                    :key="voce"
                    class="spf-checkbox-item spf-checkbox-item--indented"
                  >
                    <input
                      type="checkbox"
                      :value="voce"
                      :checked="activeProdotti.includes(voce)"
                      @change="toggleProdotto(voce)"
                    />
                    {{ voce }}
                  </label>
                </div>

              </div>

            </div>
          </div>

          <!-- 3. Stili di Confezione → legge "tipoInsacco" — checkbox multi-selezione -->
          <div class="spf-dropdown" :class="{ open: dropStile }" v-click-outside="() => dropStile = false">
            <button class="spf-dropdown-btn" @click="dropStile = !dropStile">
              <span>{{
                activeStili.length === 0
                  ? 'Stili di Confezioni'
                  : activeStili.length === 1
                    ? activeStili[0]
                    : `${activeStili.length} selezionati`
              }}</span>
              <i class="bi bi-chevron-down spf-dropdown-chevron"></i>
            </button>
            <div class="spf-dropdown-menu spf-dropdown-menu--checkbox">
              <label class="spf-dropdown-header">Stili di Confezione</label>
              <label
                v-for="s in stiliOptions"
                :key="s"
                class="spf-checkbox-item"
              >
                <input
                  type="checkbox"
                  :value="s"
                  :checked="activeStili.includes(s)"
                  @change="toggleStile(s)"
                />
                {{ s }}
              </label>
            </div>
          </div>

          <!-- 4. Ricerca testuale -->
          <div class="spf-search-wrap">
            <input
              v-model="searchQuery"
              type="text"
              class="spf-search-input"
              placeholder="Ricerca"
            />
            <i class="bi bi-search spf-search-icon"></i>
          </div>

        </div>
      </div>
      <!-- /topbar -->

      <!-- ── Griglia prodotti ── -->
      <div class="spf-grid">
        <div
          v-for="machine in pagedMachines"
          :key="machine.id"
          class="spf-card"
        >
          <div class="spf-card-header">
            <div class="spf-card-header-left">
              <span class="spf-card-serie">SERIE {{ machine.serie }}</span>
              <h3 class="spf-card-title">{{ machine.title }}</h3>
              <p class="spf-card-speed">Fino a {{ machine.speed }}</p>
            </div>
            <NuxtLink :to="machineLink(machine.slug)" class="spf-card-arrow" :aria-label="`Scopri ${machine.title}`">
              <i class="bi bi-arrow-up-right"></i>
            </NuxtLink>
          </div>

          <p class="spf-card-desc">{{ machine.description }}</p>

          <NuxtLink :to="machineLink(machine.slug)" class="spf-card-img-link">
            <div class="spf-card-img-wrap">
              <img
                :src="machine.img"
                :alt="machine.title"
                class="spf-card-img"
                loading="lazy"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
      <!-- /griglia -->

      <!-- Paginazione: compare solo se > 9 schede -->
      <div class="spf-pagination" v-if="totalPages > 1">
        <button
          class="spf-pagination-arrow"
          :disabled="currentPage === 1"
          @click="currentPage > 1 && currentPage--"
          aria-label="Pagina precedente"
        >←</button>
        <button
          v-for="p in totalPages"
          :key="p"
          class="spf-pagination-page"
          :class="{ active: p === currentPage }"
          @click="currentPage = p"
        >{{ p }}</button>
        <button
          class="spf-pagination-arrow"
          :disabled="currentPage === totalPages"
          @click="currentPage < totalPages && currentPage++"
          aria-label="Pagina successiva"
        >→</button>
      </div>

      <!-- Stato vuoto -->
      <div v-if="filteredMachines.length === 0" class="spf-empty">
        <i class="bi bi-search spf-empty-icon"></i>
        <p>Nessuna macchina corrisponde ai filtri selezionati.</p>
        <button class="spf-reset-btn" @click="resetFilters">Reimposta filtri</button>
      </div>

    </div>
    <br/>
    <br/>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import piccoli_formati_data, { type IMachine, type IProdottoGruppo } from "~/data/piccoli-formati-data";

const localePath = useLocalePath();

function machineLink(slug: string) {
  return localePath({ name: "insaccatrice-slug", params: { slug } });
}

// ── Direttiva click-outside ──────────────────────────────────
interface HTMLElementWithHandler extends HTMLElement {
  _clickOutsideHandler?: (event: Event) => void;
}

const vClickOutside = {
  mounted(el: HTMLElementWithHandler, binding: any) {
    el._clickOutsideHandler = (event: Event) => {
      if (el && !el.contains(event.target as Node)) {
        binding.value(event);
      }
    };
    document.addEventListener("click", el._clickOutsideHandler);
  },
  beforeUnmount(el: HTMLElementWithHandler) {
    if (el._clickOutsideHandler) {
      document.removeEventListener("click", el._clickOutsideHandler);
      delete el._clickOutsideHandler;
    }
  },
  unmounted(el: HTMLElementWithHandler) {
    if (el._clickOutsideHandler) {
      document.removeEventListener("click", el._clickOutsideHandler);
      delete el._clickOutsideHandler;
    }
  },
};

// ── Dati ────────────────────────────────────────────────────
const machines: IMachine[] = piccoli_formati_data;

// ── Stato dropdown ───────────────────────────────────────────
const dropCategoria = ref(false);
const dropProdotti  = ref(false);
const dropStile     = ref(false);

// ── Filtri ───────────────────────────────────────────────────
const activeCategoria = ref<string>("all");
const activeProdotti  = ref<string[]>([]);   // voci singole selezionate
const activeStili     = ref<string[]>([]);
const searchQuery     = ref<string>("");

// ── Opzioni ─────────────────────────────────────────────────

// Macchinari: categorie uniche
const categorieOptions = computed(() =>
  [...new Set(machines.map((m) => m.categoria))].sort()
);

// Stili di Confezione: tipoInsacco unici
const stiliOptions = computed(() =>
  [...new Set(machines.flatMap((m) => m.tipoInsacco))].sort()
);

/**
 * prodottiGruppi: array di { gruppo, voci[] } deduplicato.
 * Merge le voci di tutti i gruppi con lo stesso nome tra tutte le macchine.
 */
const prodottiGruppi = computed<IProdottoGruppo[]>(() => {
  const map = new Map<string, Set<string>>();

  for (const machine of machines) {
    for (const pg of machine.prodotti) {
      if (!map.has(pg.gruppo)) map.set(pg.gruppo, new Set());
      for (const voce of pg.voci) map.get(pg.gruppo)!.add(voce);
    }
  }

  return [...map.entries()].map(([gruppo, vociSet]) => ({
    gruppo,
    voci: [...vociSet].sort(),
  }));
});

// ── Stato accordion gruppi ───────────────────────────────────
// Gruppi con voci espanse (accordion); di default tutti collassati
const expandedGruppi = ref<string[]>([]);

function toggleExpand(gruppo: string) {
  const idx = expandedGruppi.value.indexOf(gruppo);
  if (idx === -1) expandedGruppi.value.push(gruppo);
  else expandedGruppi.value.splice(idx, 1);
}

// ── Toggle helpers ───────────────────────────────────────────

function toggleProdotto(voce: string) {
  const idx = activeProdotti.value.indexOf(voce);
  if (idx === -1) activeProdotti.value.push(voce);
  else activeProdotti.value.splice(idx, 1);
}

/** Controlla se tutte le voci del gruppo sono selezionate */
function isGruppoAttivo(gruppo: string, voci: string[]): boolean {
  return voci.length > 0 && voci.every((v) => activeProdotti.value.includes(v));
}

/** Indeterminate: alcune voci selezionate ma non tutte */
function isGruppoIndeterminate(gruppo: string, voci: string[]): boolean {
  const count = voci.filter((v) => activeProdotti.value.includes(v)).length;
  return count > 0 && count < voci.length;
}

/** Seleziona/deseleziona tutto il gruppo */
function toggleGruppo(gruppo: string, voci: string[]) {
  if (isGruppoAttivo(gruppo, voci)) {
    // Rimuovi tutte le voci del gruppo
    activeProdotti.value = activeProdotti.value.filter((v) => !voci.includes(v));
  } else {
    // Aggiungi le voci mancanti
    for (const voce of voci) {
      if (!activeProdotti.value.includes(voce)) activeProdotti.value.push(voce);
    }
  }
}

function toggleStile(s: string) {
  const idx = activeStili.value.indexOf(s);
  if (idx === -1) activeStili.value.push(s);
  else activeStili.value.splice(idx, 1);
}

// ── Filtro combinato ─────────────────────────────────────────
const filteredMachines = computed<IMachine[]>(() =>
  machines.filter((m) => {
    const okCategoria =
      activeCategoria.value === "all" || m.categoria === activeCategoria.value;

    // La macchina passa se almeno una delle voci selezionate è presente in qualunque gruppo
    const allMachineVoci = m.prodotti.flatMap((pg) => pg.voci);
    const okProdotti =
      activeProdotti.value.length === 0 ||
      activeProdotti.value.some((v) => allMachineVoci.includes(v));

    const okStili =
      activeStili.value.length === 0 ||
      activeStili.value.some((s) => m.tipoInsacco.includes(s));

    const q = searchQuery.value.trim().toLowerCase();
    const okSearch =
      q === "" ||
      m.title.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q);

    return okCategoria && okProdotti && okStili && okSearch;
  })
);

// ── Paginazione ──────────────────────────────────────────────
const PAGE_SIZE = 9;
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(filteredMachines.value.length / PAGE_SIZE)
);

const pagedMachines = computed<IMachine[]>(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return filteredMachines.value.slice(start, start + PAGE_SIZE);
});

watch(filteredMachines, () => { currentPage.value = 1; });

// ── Reset ────────────────────────────────────────────────────
function resetFilters() {
  activeCategoria.value = "all";
  activeProdotti.value  = [];
  activeStili.value     = [];
  searchQuery.value     = "";
}
</script>

<style scoped>
/* ============================================================
   SPF = Shop Piccoli Formati
   ============================================================ */

.spf-section {
  padding: 48px 0 80px;
  background: #f5f5f5;
}

/* ── Topbar filtri ── */
.spf-topbar {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.spf-topbar-label {
  font-size: 0.88rem;
  font-weight: 500;
  color: #555;
  white-space: nowrap;
  font-family: "Satoshi", sans-serif;
}

.spf-filters {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  flex: 1;
}

/* ── Dropdown generico ── */
.spf-dropdown {
  position: relative;
}

.spf-dropdown-btn {
  display: flex;
  align-items: center;
  gap: 24px;
  background: #ebebeb;
  border: 1px solid #D8D8D8;
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 0.88rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  color: #28477D;
  justify-content: space-between;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;
  cursor: pointer;
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

.spf-dropdown-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 240px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
  z-index: 200;
  overflow: hidden;
  display: none;
  padding: 6px 0;
}

.spf-dropdown.open .spf-dropdown-menu {
  display: block;
}

/* Menu con checkbox piatto (Stili) */
.spf-dropdown-menu--checkbox {
  max-height: 280px;
  overflow-y: auto;
}

/* Menu con gruppi (I tuoi Prodotti) */
.spf-dropdown-menu--grouped {
  max-height: 340px;
  overflow-y: auto;
}

/* Header primo livello (per Macchinari) */
.spf-dropdown-header {
  display: block;
  padding: 8px 16px 4px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #9D9D9D;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  font-family: "Satoshi", sans-serif;
}

/* ── Item singolo (Macchinari) ── */
.spf-dropdown-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 9px 16px;
  font-size: 0.88rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  color: #28477D;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.15s ease;
  white-space: nowrap;
}

.spf-dropdown-item:hover { background: rgba(40, 71, 125, 0.06); }

.spf-dropdown-item.active {
  font-weight: 700;
  background: rgba(40, 71, 125, 0.08);
}

/* ── Gruppi accordion (I tuoi Prodotti) ── */
.spf-group {
  border-bottom: none;
  padding: 4px 10px;
}

.spf-group:last-child {
  padding-bottom: 6px;
}

/* La pill è la riga intera: checkbox + nome + freccetta */
.spf-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 6px 5px 10px;
  background: #ebebeb;
  border: 1px solid #D8D8D8;
  border-radius: 20px;
  min-height: 36px;
  gap: 4px;
  transition: background 0.15s ease, border-color 0.15s ease;
  cursor: default;
}

.spf-group-header:hover {
  background: #e0e6f0;
  border-color: #28477D;
}

/* Stato attivo: almeno una voce selezionata */
.spf-group--active .spf-group-header {
  background: #28477D;
  border-color: #28477D;
}

.spf-group--active .spf-group-name {
  color: #ffffff;
}

.spf-group--active .spf-group-check-label input[type="checkbox"] {
  accent-color: #ffffff;
}

.spf-group--active .spf-group-expand-btn {
  color: rgba(255, 255, 255, 0.8);
}

.spf-group--active .spf-group-expand-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

/* Label checkbox del gruppo */
.spf-group-check-label {
  display: flex;
  align-items: center;
  gap: 9px;
  flex: 1;
  cursor: pointer;
  padding: 2px 0;
  user-select: none;
}

.spf-group-check-label input[type="checkbox"] {
  width: 15px;
  height: 15px;
  border-radius: 3px;
  accent-color: #28477D;
  flex-shrink: 0;
  cursor: pointer;
}

/* Nome del gruppo — solo testo, no pill propria */
.spf-group-name {
  font-size: 0.72rem;
  font-weight: 700;
  font-family: "Satoshi", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #28477D;
  transition: color 0.15s ease;
}

/* Bottone freccetta */
.spf-group-expand-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  flex-shrink: 0;
  transition: background 0.15s ease, color 0.15s ease;
  color: #9D9D9D;
  padding: 0;
}

.spf-group-expand-btn:hover {
  background: rgba(40, 71, 125, 0.1);
  color: #28477D;
}

.spf-group-chevron {
  font-size: 0.7rem;
  transition: transform 0.22s ease;
  display: block;
}

.spf-group--open .spf-group-chevron {
  transform: rotate(180deg);
}

/* Voci collassate/espanse */
.spf-group-voci {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.25s ease;
}

.spf-group--open .spf-group-voci {
  max-height: 400px;
}

/* Checkbox singola — base */
.spf-checkbox-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  font-size: 0.88rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  color: #28477D;
  cursor: pointer;
  transition: background 0.15s ease;
  user-select: none;
}

.spf-checkbox-item:hover {
  background: rgba(40, 71, 125, 0.05);
}

/* Voce indentata sotto il gruppo */
.spf-checkbox-item--indented {
  padding-left: 28px;
}

.spf-checkbox-item input[type="checkbox"] {
  width: 15px;
  height: 15px;
  border-radius: 3px;
  accent-color: #28477D;
  flex-shrink: 0;
  cursor: pointer;
}

/* ── Search bar ── */
.spf-search-wrap {
  position: relative;
  margin-left: auto;
}

.spf-search-input {
  background: #ebebeb;
  border: 1px solid #D8D8D8;
  border-radius: 20px;
  padding: 10px 40px 10px 16px;
  font-size: 0.88rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  color: #28477D;
  width: 200px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.spf-search-input::placeholder { color: #AAAAAA; }

.spf-search-input:focus {
  border-color: #28477D;
  box-shadow: 0 0 0 3px rgba(40, 71, 125, 0.08);
}

.spf-search-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.85rem;
  color: #9D9D9D;
  pointer-events: none;
}

/* ── Griglia — 3 colonne ── */
.spf-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 991.98px) {
  .spf-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
}

@media (max-width: 575.98px) {
  .spf-grid { grid-template-columns: 1fr; gap: 16px; }
}

/* ── Card ── */
.spf-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 24px 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.spf-card:hover {
  box-shadow: 0 8px 32px rgba(40, 71, 125, 0.13);
  transform: translateY(-3px);
}

/* ── Header card ── */
.spf-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.spf-card-header-left { flex: 1; }

.spf-card-serie {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #28477D;
  margin-bottom: 4px;
}

.spf-card-title {
  font-size: 1.45rem;
  font-weight: 800;
  color: #28477D;
  margin: 0 0 4px;
  line-height: 1.2;
  font-family: "Satoshi", sans-serif;
}

.spf-card-speed {
  font-size: 0.82rem;
  color: #9D9D9D;
  margin: 0;
  font-weight: 500;
}

/* ── Freccia ── */
.spf-card-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1.5px solid #D8D8D8;
  border-radius: 50%;
  color: #28477D;
  text-decoration: none;
  font-size: 1rem;
  flex-shrink: 0;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.spf-card:hover .spf-card-arrow {
  background: #28477D;
  border-color: #28477D;
  color: #ffffff;
}

/* ── Descrizione ── */
.spf-card-desc {
  font-size: 0.82rem;
  color: #666666;
  line-height: 1.55;
  margin: 0 0 16px;
  font-family: "Satoshi", sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Immagine ── */
.spf-card-img-link {
  display: block;
  text-decoration: none;
  margin: 0 -24px;
}

.spf-card-img-wrap {
  position: relative;
  overflow: hidden;
  background: #ffffff;
  aspect-ratio: 4 / 3;
}

.spf-card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
  display: block;
  padding: 8px 16px 0;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.spf-card:hover .spf-card-img { transform: scale(1.04); }

/* ── Paginazione ── */
.spf-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 56px;
  font-family: "Satoshi", sans-serif;
}

.spf-pagination-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1.5px solid #D8D8D8;
  border-radius: 50%;
  background: #ffffff;
  color: #28477D;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.spf-pagination-arrow:hover:not(:disabled) {
  background: #28477D;
  border-color: #28477D;
  color: #ffffff;
}

.spf-pagination-arrow:disabled { opacity: 0.3; cursor: not-allowed; }

.spf-pagination-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  background: transparent;
  color: #28477D;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Satoshi", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
}

.spf-pagination-page:hover { background: #ebebeb; }

.spf-pagination-page.active {
  background: #28477D;
  color: #ffffff;
  border-color: #28477D;
  font-weight: 700;
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

.spf-empty p { font-size: 1rem; margin-bottom: 20px; }

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

.spf-reset-btn:hover { background: #28477D; color: #ffffff; }

/* ── Responsive topbar ── */
@media (max-width: 767.98px) {
  .spf-topbar { flex-direction: column; align-items: flex-start; }
  .spf-search-wrap { margin-left: 0; width: 100%; }
  .spf-search-input { width: 100%; }
}
</style>
