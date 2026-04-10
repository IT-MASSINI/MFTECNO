<!-- Stili in: mftecno.css (globale) — sezione 18 "IMA Mega Panel" -->
<template>
  <ul class="navbar-nav align-items-lg-center" ref="navbarRef">

    <!-- ── LOGO MOBILE ─────────────────────────────────────────────── -->
    <li class="d-block d-lg-none">
      <div class="logo">
        <nuxt-link :to="localePath('/')" class="d-block">
          <img :src="logo" alt="MF Tecno logo" />
        </nuxt-link>
      </div>
    </li>

    <!-- ── VOCI MENU ──────────────────────────────────────────────── -->
    <li
      v-for="(menu, idx) in menu_data"
      :key="menu.id"
      :ref="el => { if (el) navItemEls[idx] = el as HTMLElement }"
      class="nav-item"
      :class="{ 'ima-has-panel': menu.ima_panel }"
      @mouseenter="menu.ima_panel && !isMobile ? onNavItemEnter(menu.id) : null"
      @mouseleave="menu.ima_panel && !isMobile ? onNavItemLeave() : null"
    >

      <!-- DESKTOP: trigger IMA -->
      <template v-if="menu.ima_panel">
        <button
          class="nav-link ima-trigger d-none d-lg-flex align-items-center"
          :class="{ active: activePanel === menu.id }"
          type="button"
          :aria-expanded="activePanel === menu.id"
          @click.prevent
        >
          {{ menu.title }}
          <i class="bi bi-chevron-down ima-arrow ms-1" :class="{ rotated: activePanel === menu.id }"></i>
        </button>

        <!-- MOBILE: accordion -->
        <div class="d-lg-none w-100">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            :aria-expanded="!!mobileOpen[menu.id]"
            @click.prevent="toggleMobileMenu(menu.id)"
          >
            {{ menu.title }}
          </a>
          <ul class="dropdown-menu mobile-ima-dropdown" :class="{ show: mobileOpen[menu.id] }">
            <template v-for="(group, gi) in menu.ima_groups" :key="gi">
              <li>
                <span class="dropdown-header">
                  <i v-if="group.icon" :class="`bi ${group.icon} me-1`"></i>
                  {{ group.label }}
                </span>
              </li>
              <li v-for="(item, ii) in group.items" :key="ii">
                <nuxt-link
                  :to="localePath(item.link)"
                  class="dropdown-item"
                  :class="{ active: route.path === localePath(item.link) }"
                  @click="mobileOpen[menu.id] = false"
                >{{ item.title }}</nuxt-link>
              </li>
            </template>
            <li v-if="menu.ima_panel_cta">
              <hr class="dropdown-divider" />
              <nuxt-link
                :to="localePath(menu.ima_panel_cta.link)"
                class="dropdown-item fw-bold"
                @click="mobileOpen[menu.id] = false"
              >{{ menu.ima_panel_cta.label }} →</nuxt-link>
            </li>
          </ul>
        </div>
      </template>

      <!-- Link diretto -->
      <template v-else>
        <nuxt-link
          class="nav-link"
          :to="localePath(menu.link)"
          :class="{ active: route.path === localePath(menu.link) }"
        >{{ menu.title }}</nuxt-link>
      </template>
    </li>

    <!-- ── MOBILE EXTRA ───────────────────────────────────────────── -->
    <li class="d-lg-none ps-2 pe-2 mt-3">
      <nuxt-link :to="localePath('/richiesta/?tiporich=4')" class="preventivo-mobile-btn w-100 mt-20">
        <span class="flex-fill text-center">Preventivo Gratuito</span>
        <div class="icon rounded-circle d-flex align-items-center justify-content-center">
          <i class="bi bi-arrow-right"></i>
        </div>
      </nuxt-link>
      <ul class="style-none contact-info m-0 pt-4">
        <li class="d-flex align-items-center p-0 mt-3">
          <i class="bi bi-envelope me-2 contact-icon"></i>
          <a href="mailto:sales@mftecno.com" class="fw-500 contact-link">sales@mftecno.com</a>
        </li>
        <li class="d-flex align-items-center p-0 mt-3">
          <i class="bi bi-telephone me-2 contact-icon"></i>
          <a href="tel:+390758042312" class="fw-500 contact-link">+39 075 804 2312</a>
        </li>
        <li class="d-flex align-items-center p-0 mt-3">
          <i class="bi bi-whatsapp me-2 contact-icon"></i>
          <a href="https://api.whatsapp.com/send?phone=393440721984" target="_blank" rel="noopener" class="fw-500 contact-link">WhatsApp</a>
        </li>
      </ul>
    </li>

  </ul>

  <!-- ═══════════════════════════════════════════════════════════════
       MEGA PANEL DESKTOP — Teleportato su <body>
       ═══════════════════════════════════════════════════════════════ -->
  <Teleport to="body">

    <Transition name="ima-overlay">
      <div v-if="activePanel !== null && !isMobile" class="ima-overlay" :style="{ top: panelTop + 'px' }"></div>
    </Transition>

    <template v-for="menu in menu_data" :key="`panel-${menu.id}`">
      <Transition name="ima-panel">
        <div
          v-if="activePanel === menu.id && !isMobile"
          class="ima-mega-panel"
          :style="{ top: panelTop + 'px' }"
          @mouseenter="onPanelEnter"
          @mouseleave="onPanelLeave"
        >
          <div class="ima-panel-inner">

            <nav class="ima-panel-sidebar" :class="{ 'ima-single-col': menu.ima_single_col }">
              <ul class="ima-group-list">
                <li
                  v-for="(group, gi) in menu.ima_groups"
                  :key="gi"
                  class="ima-group-item"
                  :class="{ active: activeGroup === gi }"
                  @mouseenter="!menu.ima_single_col && (activeGroup = gi)"
                >
                  <div class="ima-group-label">
                    <i v-if="group.icon" :class="`bi ${group.icon} ima-group-icon`"></i>
                    <span>{{ group.label }}</span>
                    <i v-if="!menu.ima_single_col" class="bi bi-chevron-right ima-group-arrow"></i>
                  </div>
                  <ul v-if="menu.ima_single_col" class="ima-items-inline">
                    <li v-for="(item, ii) in group.items" :key="ii">
                      <nuxt-link :to="localePath(item.link)" class="ima-item-link" @click="closePanel">
                        <span class="ima-item-title">{{ item.title }}</span>
                        <span v-if="item.description" class="ima-item-desc">{{ item.description }}</span>
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
              <nuxt-link v-if="menu.ima_panel_cta" :to="localePath(menu.ima_panel_cta.link)" class="ima-panel-cta" @click="closePanel">
                {{ menu.ima_panel_cta.label }}
                <i class="bi bi-arrow-right ms-2"></i>
              </nuxt-link>
            </nav>

            <div v-if="!menu.ima_single_col" class="ima-panel-content">
              <Transition name="ima-fade" mode="out-in">
                <div v-if="menu.ima_groups?.[activeGroup]" :key="activeGroup" class="ima-items-grid">
                  <nuxt-link
                    v-for="(item, ii) in menu.ima_groups[activeGroup].items"
                    :key="ii"
                    :to="localePath(item.link)"
                    class="ima-item-card"
                    @click="closePanel"
                  >
                    <span class="ima-item-card-title">{{ item.title }}</span>
                    <span v-if="item.description" class="ima-item-card-desc">{{ item.description }}</span>
                    <i class="bi bi-arrow-right ima-item-card-arrow"></i>
                  </nuxt-link>
                </div>
              </Transition>
            </div>

          </div>
        </div>
      </Transition>
    </template>

  </Teleport>
</template>

<script setup lang="ts">
import menu_data from "@/data/menu-data";

const route      = useRoute();
const localePath = useLocalePath();

withDefaults(defineProps<{ logo?: string }>(), {
  logo: '/images/logo/logo_mftecno.svg'
});

// ── Refs DOM ──────────────────────────────────────────────────────────
const navItemEls = ref<HTMLElement[]>([]);

// ── Stato desktop ─────────────────────────────────────────────────────
const activePanel = ref<number | null>(null);
const activeGroup = ref<number>(0);
const panelTop    = ref<number>(72);
const isMobile    = ref<boolean>(false);

// Timer unico condiviso tra nav-item e panel
let closeTimer: ReturnType<typeof setTimeout> | null = null;

// ── Stato mobile accordion ────────────────────────────────────────────
const mobileOpen = ref<Record<number, boolean>>({});

function toggleMobileMenu(id: number) {
  for (const key in mobileOpen.value) {
    if (Number(key) !== id) mobileOpen.value[Number(key)] = false;
  }
  mobileOpen.value[id] = !mobileOpen.value[id];
}

// ── Helpers ───────────────────────────────────────────────────────────
function clearClose() {
  if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
}

function scheduleClose() {
  clearClose();
  // 150ms di grace period: tempo sufficiente per passare dal nav-item al panel
  closeTimer = setTimeout(() => {
    activePanel.value = null;
    activeGroup.value = 0;
  }, 150);
}

function updatePanelTop() {
  const header = document.querySelector<HTMLElement>('header.theme-main-menu');
  if (header) panelTop.value = Math.round(header.getBoundingClientRect().bottom);
}

function openPanel(id: number) {
  clearClose();
  if (activePanel.value !== id) activeGroup.value = 0;
  updatePanelTop();
  activePanel.value = id;
}

function closePanel() {
  clearClose();
  activePanel.value = null;
  activeGroup.value = 0;
}

// ── Handlers nav-item ─────────────────────────────────────────────────
// mouseenter sul <li>: apre subito il panel
function onNavItemEnter(id: number) {
  openPanel(id);
}

// mouseleave dal <li>: schedula chiusura con grace period
// Se il mouse entra nel panel (onPanelEnter) il timer viene annullato
function onNavItemLeave() {
  scheduleClose();
}

// ── Handlers panel ────────────────────────────────────────────────────
// mouseenter sul panel: annulla il close timer
function onPanelEnter() {
  clearClose();
}

// mouseleave dal panel: schedula chiusura
function onPanelLeave() {
  scheduleClose();
}

// ── Responsivo ────────────────────────────────────────────────────────
function checkMobile() {
  isMobile.value = window.innerWidth < 992;
  if (isMobile.value) closePanel();
}

function handleScroll() {
  if (activePanel.value !== null) updatePanelTop();
}

watch(() => route.path, () => {
  closePanel();
  for (const key in mobileOpen.value) mobileOpen.value[Number(key)] = false;
});

onMounted(() => {
  checkMobile();
  menu_data.forEach(m => { mobileOpen.value[m.id] = false; });
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', checkMobile);
  if (closeTimer) clearTimeout(closeTimer);
});
</script>
