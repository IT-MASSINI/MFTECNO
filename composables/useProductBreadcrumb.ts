// ============================================================
//  composables/useProductBreadcrumb.ts
//
//  Genera dinamicamente il percorso breadcrumb di una pagina prodotto
//  a partire dai campi `category*`, `subcategory*`, `segment*` della
//  macchina. Lo stesso array viene poi usato per:
//    · rendering visuale (<Breadcrumb :items="items" />)
//    · JSON-LD schema.org/BreadcrumbList (SEO Google)
//
//  USO:
//    const breadcrumbItems = useProductBreadcrumb(machine)
// ============================================================

import type { IMachine } from "~/data/piccoli-formati-data";
import type { Ref, ComputedRef } from "vue";

export interface BreadcrumbItem {
  /** Testo visualizzato nel breadcrumb */
  label: string;
  /** Path relativo di destinazione (senza prefisso locale).
   *  Undefined = voce corrente, non cliccabile. */
  to?: string;
}

/**
 * Costruisce l'array breadcrumb a partire da una macchina.
 * Accetta sia un riferimento reattivo (Ref/ComputedRef) sia un oggetto statico,
 * così funziona sia dentro <script setup> con `computed(...)` sia con dati fissi.
 */
export function useProductBreadcrumb(
  machine: Ref<IMachine | undefined> | ComputedRef<IMachine | undefined> | IMachine | undefined
): ComputedRef<BreadcrumbItem[]> {
  return computed<BreadcrumbItem[]>(() => {
    // Unwrap sia Ref che valore diretto
    const m = isRef(machine) ? machine.value : machine;
    if (!m) return [];

    const items: BreadcrumbItem[] = [
      { label: "Home", to: "/" },
      { label: m.category,    to: `/${m.categorySlug}` },
      { label: m.subcategory, to: `/${m.subcategorySlug}` },
      { label: m.segment,     to: `/${m.segmentSlug}` },
      { label: m.title } // ultimo livello: non cliccabile
    ];

    return items;
  });
}
