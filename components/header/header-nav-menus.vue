<!-- Stili in: mftecno.css (globale) -->
<template>
  <ul class="navbar-nav align-items-lg-center">
    <li class="d-block d-lg-none">
      <div class="logo">
        <nuxt-link :to="localePath('/')" class="d-block">
          <img :src="logo" alt="MF Tecno logo"/>
        </nuxt-link>
      </div>
    </li>

    <li
      v-for="menu in menu_data"
      :key="menu.id"
      :class="`nav-item ${menu.dropdown ? 'dropdown' :''} ${menu.mega_menu ? 'dropdown mega-dropdown-sm' : ''}`"
    >
      <!-- ── DROPDOWN NORMALE ── -->
      <template v-if="menu.dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          {{ menu.title }}
        </a>

        <ul class="dropdown-menu">
          <li
            v-for="(dm, i) in menu.dropdown_menus"
            :key="i"
            :class="dm.sub_menus && dm.sub_menus.length > 0 ? 'dropdown' : ''"
          >
            <!-- Voce CON sottomenu -->
            <template v-if="dm.sub_menus && dm.sub_menus.length > 0">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between pe-2"
                href="#"
                @click.prevent
              >
                <span>{{ dm.title }}</span>
                <i class="bi bi-chevron-right small ms-3"></i>
              </a>

              <ul class="dropdown-menu">
                <li v-for="(sub, j) in dm.sub_menus" :key="j">
                  <nuxt-link
                    :to="localePath(sub.link)"
                    class="dropdown-item"
                    :class="{ active: route.path === localePath(sub.link) }"
                  >
                    <span>{{ sub.title }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </template>

            <!-- Voce SEMPLICE senza sottomenu -->
            <template v-else>
              <nuxt-link
                :to="localePath(dm.link)"
                class="dropdown-item"
                :class="{ active: route.path === localePath(dm.link) }"
              >
                <span>{{ dm.title }}</span>
              </nuxt-link>
            </template>
          </li>
        </ul>
      </template>

      <!-- ── MEGA MENU ── -->
      <template v-else-if="menu.mega_menu">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          {{ menu.title }}
        </a>
        <ul class="dropdown-menu">
          <li class="row gx-1">
            <div v-for="mm in menu.mega_menus" :key="mm.id" class="col-lg-4">
              <div class="menu-column">
                <ul class="style-none mega-dropdown-list">
                  <li v-for="(sm, i) in mm.menus" :key="i">
                    <nuxt-link
                      :to="localePath(sm.link)"
                      class="dropdown-item"
                      :class="{ active: route.path === localePath(sm.link) }"
                    >
                      <span>{{ sm.title }}</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </template>

      <!-- ── LINK SEMPLICE ── -->
      <template v-else>
        <nuxt-link
          class="nav-link"
          :to="localePath(menu.link)"
          :class="{ active: route.path === localePath(menu.link) }"
          role="button"
        >
          {{ menu.title }}
        </nuxt-link>
      </template>
    </li>

    <!-- ── MOBILE EXTRA — contatti MF Tecno ── -->
    <li class="d-lg-none ps-2 pe-2 mt-3">
      <nuxt-link
        :to="localePath('/richiesta/?tiporich=4')"
        class="preventivo-mobile-btn w-100 mt-20"
      >
        <span class="flex-fill text-center">Preventivo Gratuito</span>
        <div class="icon rounded-circle d-flex align-items-center justify-content-center">
          <i class="bi bi-arrow-right"></i>
        </div>
      </nuxt-link>
      <ul class="style-none contact-info m-0 pt-4">
        <li class="d-flex align-items-center p-0 mt-3">
          <i class="bi bi-envelope me-2 contact-icon"></i>
          <a href="mailto:info@mftecno.com" class="fw-500 contact-link">info@mftecno.com</a>
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
</template>

<script setup lang="ts">
import menu_data from "@/data/menu-data";

const route = useRoute();
const localePath = useLocalePath() // ✅ composable nativo @nuxtjs/i18n

withDefaults(defineProps<{ logo?: string }>(), {
  logo: '/images/logo/logo_mftecno.svg'
})
</script>

