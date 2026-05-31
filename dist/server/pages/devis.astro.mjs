import { e as createComponent, k as renderComponent, r as renderTemplate, l as renderScript, g as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_0AjLyGG5.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_AvIwMfAC.mjs';
import { $ as $$MarketingIcon } from '../chunks/MarketingIcon_TLWSRWAh.mjs';
import { $ as $$BrandLockup } from '../chunks/BrandLockup_B3gotdcG.mjs';
/* empty css                                   */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const apiBaseUrl = "/api";
  const apiFallbackBaseUrl = "http://127.0.0.1:8000/api";
  const quoteHighlights = [
    {
      icon: "glass",
      tone: "blue",
      title: "VITRAGE",
      subtitle: "ADAPTÉ"
    },
    {
      icon: "thermo",
      tone: "blue",
      title: "LECTURE",
      subtitle: "TECHNIQUE"
    },
    {
      icon: "quote",
      tone: "red",
      title: "DEVIS",
      subtitle: "CLAIR"
    }
  ];
  const quoteChecklist = [
    "Dimensions utiles de l'ouverture",
    "Type de vitrage souhaité",
    "Prestation exacte à réaliser",
    "Options ou niveau de performance visé"
  ];
  const quoteProcess = [
    {
      step: "01",
      title: "Configurer",
      description: "Vous renseignez les dimensions, le type de vitrage, l'épaisseur et la prestation visée."
    },
    {
      step: "02",
      title: "Calculer",
      description: "Le simulateur assemble la surface, le vitrage, la main-d'œuvre et les options dans une seule lecture."
    },
    {
      step: "03",
      title: "Exploiter",
      description: "Le résultat devient une base claire pour enchaîner vers une demande plus précise ou une urgence."
    }
  ];
  const quoteBenefits = [
    {
      icon: "glass",
      title: "Configuration nette",
      description: "Chaque choix garde une lecture simple pour cadrer tout de suite le bon vitrage."
    },
    {
      icon: "thermo",
      title: "Calcul structuré",
      description: "Le prix relie surface, vitrage, main-d'œuvre et options sans perdre la logique technique."
    },
    {
      icon: "repair",
      title: "Suite exploitable",
      description: "Le résultat devient une base claire pour avancer rapidement sur une vraie demande."
    }
  ];
  const quoteTrustItems = [
    {
      icon: "quality",
      label: "CONFIGURATION DYNAMIQUE"
    },
    {
      icon: "clock",
      label: "PARCOURS RAPIDE"
    },
    {
      icon: "shield",
      label: "LECTURE TECHNIQUE"
    },
    {
      icon: "people",
      label: "RÉSULTAT CLAIR"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Demande de devis", "description": "Calculez une estimation claire pour votre projet vitrerie.", "data-astro-cid-236iqep3": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="home-shell" data-astro-cid-236iqep3> <section class="hero-card quote-page"', "", ' data-astro-cid-236iqep3> <div class="hero-main" data-astro-cid-236iqep3> <div class="hero-copy" data-astro-cid-236iqep3> <div class="hero-copy__bg" aria-hidden="true" data-astro-cid-236iqep3></div> ', ' <h1 class="hero-title" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>DEVIS</span> <span class="hero-title--accent" data-astro-cid-236iqep3>CLAIR ET</span> <span data-astro-cid-236iqep3>RAPIDE</span> </h1> <span class="hero-rule" aria-hidden="true" data-astro-cid-236iqep3></span> <p class="hero-description" data-astro-cid-236iqep3>\nRenseignez les dimensions, le vitrage, la prestation et les options\n            pour obtenir une estimation propre, lisible et directement utile.\n</p> <div class="feature-list" data-astro-cid-236iqep3> ', ' </div> <div class="hero-actions" data-astro-cid-236iqep3> <a class="hero-button hero-button--blue" href="#quote-workbench" data-astro-cid-236iqep3> <span class="hero-button__icon" data-astro-cid-236iqep3> ', ' </span> <span class="hero-button__copy" data-astro-cid-236iqep3> <small data-astro-cid-236iqep3>LANCER LE</small> <strong data-astro-cid-236iqep3>CALCUL DU DEVIS</strong> </span> </a> <a class="hero-button hero-button--red" href="/intervention-rapide" data-astro-cid-236iqep3> <span class="hero-button__icon" data-astro-cid-236iqep3> ', ` </span> <span class="hero-button__copy" data-astro-cid-236iqep3> <small data-astro-cid-236iqep3>BESOIN D'UNE</small> <strong data-astro-cid-236iqep3>INTERVENTION RAPIDE</strong> </span> </a> </div> </div> <div class="hero-media" data-astro-cid-236iqep3> <img src="/fonds.png" alt="Maison moderne avec large baie vitree" loading="eager" data-astro-cid-236iqep3> </div> </div> <div class="hero-bottom" data-astro-cid-236iqep3> <div class="hero-bottom__items" data-astro-cid-236iqep3> `, ' </div> <a class="contact-panel" href="#quote-workbench" data-astro-cid-236iqep3> <span class="contact-panel__icon" data-astro-cid-236iqep3> ', ` </span> <span class="contact-panel__copy" data-astro-cid-236iqep3> <strong data-astro-cid-236iqep3>CALCULER LE DEVIS</strong> <small data-astro-cid-236iqep3>Renseignez le formulaire et lancez l'estimation</small> </span> </a> </div> </section> <section class="showcase-section" data-animate="showcase" data-astro-cid-236iqep3> <div class="showcase-heading" data-astro-cid-236iqep3> <span class="section-kicker" data-astro-cid-236iqep3>DEMANDE PRÉPARÉE</span> <h2 data-astro-cid-236iqep3>De quoi lancer votre devis sans perdre de temps.</h2> <p data-astro-cid-236iqep3>
Avant le calcul, il suffit de poser les informations qui cadrent
          vraiment le besoin. Le reste suit dans le même esprit visuel que la
          page d'accueil.
</p> </div> <div class="quote-checklist-grid" data-astro-cid-236iqep3> `, ` </div> </section> <section class="signature-section" data-animate="signature" data-astro-cid-236iqep3> <div class="signature-copy" data-astro-cid-236iqep3> <span class="section-kicker" data-astro-cid-236iqep3>MÉTHODE DEVIS</span> <h2 data-astro-cid-236iqep3>Une logique simple pour passer du besoin à une estimation claire.</h2> <p data-astro-cid-236iqep3>
La page de devis reprend la même tenue que l'accueil et
          l'intervention rapide, tout en gardant un parcours facile à lire
          entre les choix techniques et le prix estimé.
</p> </div> <div class="signature-grid" data-astro-cid-236iqep3> `, ` </div> </section> <section class="showcase-section quote-workbench" id="quote-workbench" data-astro-cid-236iqep3> <div class="showcase-heading" data-astro-cid-236iqep3> <span class="section-kicker" data-astro-cid-236iqep3>CONFIGURATION</span> <h2 data-astro-cid-236iqep3>Renseignez le vitrage et obtenez une estimation lisible.</h2> <p data-astro-cid-236iqep3>
Le formulaire garde la logique de calcul existante, mais s'insère
          maintenant dans une mise en page alignée sur la home.
</p> </div> <div class="quote-layout" data-astro-cid-236iqep3> <section class="quote-form-surface" data-astro-cid-236iqep3> <div class="quote-panel__intro" data-astro-cid-236iqep3> <span class="section-kicker" data-astro-cid-236iqep3>FORMULAIRE</span> <h3 data-astro-cid-236iqep3>Caractéristiques du vitrage</h3> <p data-astro-cid-236iqep3>
Largeur, hauteur, type de vitrage, épaisseur, prestations et
              options.
</p> </div> <div class="quote-status" data-role="status" data-astro-cid-236iqep3>Chargement de la configuration...</div> <form class="quote-form" data-role="form" data-astro-cid-236iqep3> <div class="form-grid" data-astro-cid-236iqep3> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Largeur (cm)</span> <input name="width" type="number" min="1" step="0.01" value="120" required data-astro-cid-236iqep3> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Hauteur (cm)</span> <input name="height" type="number" min="1" step="0.01" value="150" required data-astro-cid-236iqep3> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Type de vitrage</span> <select name="glass_type" data-role="glass-type" required disabled data-astro-cid-236iqep3> <option data-astro-cid-236iqep3>Chargement...</option> </select> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Épaisseur</span> <select name="thickness" data-role="thickness" required disabled data-astro-cid-236iqep3> <option data-astro-cid-236iqep3>Chargement...</option> </select> </label> <div class="contact-fields" data-astro-cid-236iqep3> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Nom</span> <input name="nom" type="text" autocomplete="name" required data-astro-cid-236iqep3> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Numéro de téléphone</span> <input name="telephone" type="tel" inputmode="tel" autocomplete="tel" required data-astro-cid-236iqep3> </label> </div> </div> <fieldset class="options" data-role="work-types-group" disabled data-astro-cid-236iqep3> <legend data-astro-cid-236iqep3>Types de prestation</legend> <div class="options__grid" data-role="work-types" data-astro-cid-236iqep3></div> </fieldset> <fieldset class="options" data-role="options-group" disabled data-astro-cid-236iqep3> <legend data-astro-cid-236iqep3>Options</legend> <div class="options__grid" data-role="options" data-astro-cid-236iqep3></div> </fieldset> <div class="form-actions" data-astro-cid-236iqep3> <button class="quote-submit" type="submit" data-role="submit" disabled data-astro-cid-236iqep3>
Calculer le devis
</button> <a class="quote-link" href="/" data-astro-cid-236iqep3>Retour à l'accueil</a> </div> </form> </section> <aside class="quote-result-surface" data-astro-cid-236iqep3> <div class="quote-panel__intro quote-panel__intro--light" data-astro-cid-236iqep3> <span class="section-kicker section-kicker--light" data-astro-cid-236iqep3>RÉSULTAT</span> <h3 data-astro-cid-236iqep3>Votre estimation apparaît ici</h3> <p data-astro-cid-236iqep3>
Le détail du coût s'affiche après calcul avec une lecture simple
              de la surface, du vitrage, de la main-d'œuvre et des options.
</p> </div> <div class="result-empty" data-role="placeholder" data-astro-cid-236iqep3>
Lancez un calcul pour afficher le prix estimé et le détail du devis.
</div> <div class="result-panel" data-role="result" hidden data-astro-cid-236iqep3> <div class="result-total" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Total estimé</span> <strong data-role="total-price" data-astro-cid-236iqep3>-</strong> </div> <div class="result-summary" data-astro-cid-236iqep3> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Surface</span> <strong data-role="area" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Vitrage</span> <strong data-role="glass-cost" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Main-d'œuvre</span> <strong data-role="work-cost" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Options</span> <strong data-role="options-cost" data-astro-cid-236iqep3>-</strong> </div> </div> <div class="result-breakdown" data-astro-cid-236iqep3> <span class="section-kicker section-kicker--light" data-astro-cid-236iqep3>DÉTAIL</span> <ul class="simple-list" data-role="breakdown" data-astro-cid-236iqep3></ul> </div> </div> </aside> </div> </section> <section class="signature-section quote-cta-section" data-astro-cid-236iqep3> <div class="signature-copy" data-astro-cid-236iqep3> <span class="section-kicker" data-astro-cid-236iqep3>ALLER PLUS LOIN</span> <h2 data-astro-cid-236iqep3>Un devis pensé pour s'aligner naturellement avec le reste du site.</h2> <p data-astro-cid-236iqep3>
Une fois le calcul lancé, vous gardez la même ambiance que sur
          l'accueil et l'intervention rapide, avec des points d'entrée clairs
          pour continuer votre parcours.
</p> </div> <div class="quote-cta-layout" data-astro-cid-236iqep3> `, ' <div class="quote-cta-actions" data-astro-cid-236iqep3> <a class="hero-button hero-button--red" href="/intervention-rapide" data-astro-cid-236iqep3> <span class="hero-button__icon" data-astro-cid-236iqep3> ', ` </span> <span class="hero-button__copy" data-astro-cid-236iqep3> <small data-astro-cid-236iqep3>BESOIN D'UNE</small> <strong data-astro-cid-236iqep3>INTERVENTION RAPIDE</strong> </span> </a> <a class="hero-button hero-button--blue" href="/" data-astro-cid-236iqep3> <span class="hero-button__icon" data-astro-cid-236iqep3> `, ` </span> <span class="hero-button__copy" data-astro-cid-236iqep3> <small data-astro-cid-236iqep3>RETOUR A</small> <strong data-astro-cid-236iqep3>L'ACCUEIL</strong> </span> </a> </div> </div> </section> </main> <script>
    (() => {
      const quoteRoot = document.querySelector(".quote-page");
      if (!quoteRoot) return;

      const normalizeApiBase = (value) => value?.replace(/\\/$/, "") || "";
      const apiBase = normalizeApiBase(quoteRoot.dataset.apiBase);
      const apiFallbackBase = normalizeApiBase(quoteRoot.dataset.apiFallbackBase);
      const apiBases = Array.from(new Set([apiBase, apiFallbackBase].filter(Boolean)));
      let activeApiBase = apiBases[0] || "";
      const status = document.querySelector('[data-role="status"]');
      const form = document.querySelector('[data-role="form"]');
      const submitButton = document.querySelector('[data-role="submit"]');
      const glassTypeSelect = document.querySelector('[data-role="glass-type"]');
      const thicknessSelect = document.querySelector('[data-role="thickness"]');
      const workTypesWrapper = document.querySelector('[data-role="work-types"]');
      const workTypesGroup = document.querySelector('[data-role="work-types-group"]');
      const optionsWrapper = document.querySelector('[data-role="options"]');
      const optionsGroup = document.querySelector('[data-role="options-group"]');
      const placeholder = document.querySelector('[data-role="placeholder"]');
      const resultPanel = document.querySelector('[data-role="result"]');
      const totalPrice = document.querySelector('[data-role="total-price"]');
      const area = document.querySelector('[data-role="area"]');
      const glassCost = document.querySelector('[data-role="glass-cost"]');
      const workCost = document.querySelector('[data-role="work-cost"]');
      const optionsCost = document.querySelector('[data-role="options-cost"]');
      const breakdown = document.querySelector('[data-role="breakdown"]');

      const setStatus = (message, type = "info") => {
        if (!status) return;
        status.textContent = message;
        status.dataset.state = type;
      };

      const clearSelect = (select, placeholderText) => {
        if (!select) return;
        select.innerHTML = "";
        const option = document.createElement("option");
        option.value = "";
        option.textContent = placeholderText;
        select.appendChild(option);
      };

      const selectFirstAvailableOption = (select) => {
        if (!select || select.options.length < 2) return false;
        select.selectedIndex = 1;
        return true;
      };

      const createCheckboxItem = (name, value, labelText) => {
        const label = document.createElement("label");
        label.className = "option-item";

        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = name;
        input.value = String(value);

        const text = document.createElement("span");
        text.textContent = labelText;

        label.append(input, text);
        return label;
      };

      const money = (value, currency) => {
        const amount = Number.parseFloat(value);
        if (Number.isNaN(amount)) return \`\${value} \${currency}\`;
        return \`\${amount.toLocaleString("fr-FR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })} \${currency}\`;
      };

      const flattenErrors = (value) => {
        if (Array.isArray(value)) {
          return value.flatMap((item) => flattenErrors(item));
        }

        if (value && typeof value === "object") {
          return Object.values(value).flatMap((item) => flattenErrors(item));
        }

        if (typeof value === "string") {
          return [value];
        }

        return [];
      };

      const getErrorMessage = (payload) => {
        const messages = flattenErrors(payload).filter(Boolean);
        return messages[0] || "Le calcul a échoué. Vérifiez les champs ou la disponibilité du backend.";
      };

      const requestApi = async (path, options) => {
        const preferredBases = activeApiBase
          ? [activeApiBase, ...apiBases.filter((base) => base !== activeApiBase)]
          : apiBases;
        let lastResponse = null;
        let lastError = null;

        for (const base of preferredBases) {
          try {
            const response = await fetch(\`\${base}\${path}\`, options);
            if (response.ok) {
              activeApiBase = base;
              return response;
            }

            lastResponse = response;
            if (response.status !== 404 && response.status < 500) {
              return response;
            }
          } catch (error) {
            lastError = error;
          }
        }

        if (lastResponse) return lastResponse;
        throw lastError ?? new Error("Aucune route API disponible.");
      };

      const renderConfig = (config) => {
        clearSelect(glassTypeSelect, "Choisir un vitrage");
        clearSelect(thicknessSelect, "Choisir une epaisseur");

        config.glass_types.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.id;
          option.textContent = \`\${item.name} (\${money(item.price_per_m2, config.currency)}/m²)\`;
          glassTypeSelect.appendChild(option);
        });

        config.thicknesses.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.value;
          option.textContent = item.label;
          thicknessSelect.appendChild(option);
        });

        workTypesWrapper.innerHTML = "";
        config.work_types.forEach((item) => {
          workTypesWrapper.appendChild(
            createCheckboxItem(
              "work_types",
              item.id,
              \`\${item.name} (\${money(item.price, config.currency)})\`
            )
          );
        });

        optionsWrapper.innerHTML = "";
        config.options.forEach((item) => {
          optionsWrapper.appendChild(
            createCheckboxItem(
              "options",
              item.id,
              \`\${item.name} (\${money(item.price, config.currency)})\`
            )
          );
        });

        const hasGlassType = selectFirstAvailableOption(glassTypeSelect);
        const hasThickness = selectFirstAvailableOption(thicknessSelect);
        const hasWorkTypes = config.work_types.length > 0;
        const isReady = hasGlassType && hasThickness && hasWorkTypes;

        glassTypeSelect.disabled = false;
        thicknessSelect.disabled = false;
        workTypesGroup.disabled = false;
        optionsGroup.disabled = false;
        submitButton.disabled = !isReady;

        if (!isReady) {
          setStatus("Configuration incomplète : le backend ne renvoie pas toutes les valeurs nécessaires.", "error");
          return;
        }

        setStatus("Configuration chargée depuis le backend. Vous pouvez calculer un devis.", "success");
      };

      const renderResult = (result) => {
        placeholder.hidden = true;
        resultPanel.hidden = false;
        totalPrice.textContent = money(result.total_price, result.currency);
        area.textContent = \`\${result.area} m²\`;
        glassCost.textContent = money(result.glass_cost, result.currency);
        workCost.textContent = money(result.work_cost, result.currency);
        optionsCost.textContent = money(result.options_cost, result.currency);
        breakdown.innerHTML = "";

        result.details.breakdown.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = \`\${item.label}: \${money(item.amount, result.currency)}\`;
          breakdown.appendChild(li);
        });
      };

      const loadConfig = async () => {
        try {
          setStatus("Chargement de la configuration...", "info");
          const response = await requestApi("/config/");
          if (!response.ok) throw new Error(\`Erreur \${response.status}\`);
          const config = await response.json();
          renderConfig(config);
        } catch (error) {
          console.error(error);
          setStatus("Impossible de charger la configuration du devis. Vérifiez que le backend est disponible.", "error");
        }
      };

      form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        submitButton.disabled = true;
        setStatus("Calcul du devis en cours...", "info");

        const formData = new FormData(form);
        const selectedWorkTypes = formData
          .getAll("work_types")
          .map((value) => Number(value));

        if (!selectedWorkTypes.length) {
          setStatus("Sélectionnez au moins une prestation pour calculer le devis.", "error");
          submitButton.disabled = false;
          return;
        }

        const payload = {
          nom: formData.get("nom"),
          telephone: formData.get("telephone"),
          width: formData.get("width"),
          height: formData.get("height"),
          glass_type: Number(formData.get("glass_type")),
          thickness: Number(formData.get("thickness")),
          work_types: selectedWorkTypes,
          options: formData.getAll("options").map((value) => Number(value)),
          holes: []
        };

        try {
          const response = await requestApi("/quote-request/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });

          const data = await response.json();
          if (!response.ok) {
            throw new Error(getErrorMessage(data));
          }

          renderResult(data);
          setStatus("Devis calculé et enregistré avec succès.", "success");
        } catch (error) {
          console.error(error);
          setStatus(error instanceof Error ? error.message : "Le calcul a échoué. Vérifiez les champs ou la disponibilité du backend.", "error");
        } finally {
          submitButton.disabled = false;
        }
      });

      loadConfig();
    })();
  </script> `, "  "], [" ", '<main class="home-shell" data-astro-cid-236iqep3> <section class="hero-card quote-page"', "", ' data-astro-cid-236iqep3> <div class="hero-main" data-astro-cid-236iqep3> <div class="hero-copy" data-astro-cid-236iqep3> <div class="hero-copy__bg" aria-hidden="true" data-astro-cid-236iqep3></div> ', ' <h1 class="hero-title" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>DEVIS</span> <span class="hero-title--accent" data-astro-cid-236iqep3>CLAIR ET</span> <span data-astro-cid-236iqep3>RAPIDE</span> </h1> <span class="hero-rule" aria-hidden="true" data-astro-cid-236iqep3></span> <p class="hero-description" data-astro-cid-236iqep3>\nRenseignez les dimensions, le vitrage, la prestation et les options\n            pour obtenir une estimation propre, lisible et directement utile.\n</p> <div class="feature-list" data-astro-cid-236iqep3> ', ' </div> <div class="hero-actions" data-astro-cid-236iqep3> <a class="hero-button hero-button--blue" href="#quote-workbench" data-astro-cid-236iqep3> <span class="hero-button__icon" data-astro-cid-236iqep3> ', ' </span> <span class="hero-button__copy" data-astro-cid-236iqep3> <small data-astro-cid-236iqep3>LANCER LE</small> <strong data-astro-cid-236iqep3>CALCUL DU DEVIS</strong> </span> </a> <a class="hero-button hero-button--red" href="/intervention-rapide" data-astro-cid-236iqep3> <span class="hero-button__icon" data-astro-cid-236iqep3> ', ` </span> <span class="hero-button__copy" data-astro-cid-236iqep3> <small data-astro-cid-236iqep3>BESOIN D'UNE</small> <strong data-astro-cid-236iqep3>INTERVENTION RAPIDE</strong> </span> </a> </div> </div> <div class="hero-media" data-astro-cid-236iqep3> <img src="/fonds.png" alt="Maison moderne avec large baie vitree" loading="eager" data-astro-cid-236iqep3> </div> </div> <div class="hero-bottom" data-astro-cid-236iqep3> <div class="hero-bottom__items" data-astro-cid-236iqep3> `, ' </div> <a class="contact-panel" href="#quote-workbench" data-astro-cid-236iqep3> <span class="contact-panel__icon" data-astro-cid-236iqep3> ', ` </span> <span class="contact-panel__copy" data-astro-cid-236iqep3> <strong data-astro-cid-236iqep3>CALCULER LE DEVIS</strong> <small data-astro-cid-236iqep3>Renseignez le formulaire et lancez l'estimation</small> </span> </a> </div> </section> <section class="showcase-section" data-animate="showcase" data-astro-cid-236iqep3> <div class="showcase-heading" data-astro-cid-236iqep3> <span class="section-kicker" data-astro-cid-236iqep3>DEMANDE PRÉPARÉE</span> <h2 data-astro-cid-236iqep3>De quoi lancer votre devis sans perdre de temps.</h2> <p data-astro-cid-236iqep3>
Avant le calcul, il suffit de poser les informations qui cadrent
          vraiment le besoin. Le reste suit dans le même esprit visuel que la
          page d'accueil.
</p> </div> <div class="quote-checklist-grid" data-astro-cid-236iqep3> `, ` </div> </section> <section class="signature-section" data-animate="signature" data-astro-cid-236iqep3> <div class="signature-copy" data-astro-cid-236iqep3> <span class="section-kicker" data-astro-cid-236iqep3>MÉTHODE DEVIS</span> <h2 data-astro-cid-236iqep3>Une logique simple pour passer du besoin à une estimation claire.</h2> <p data-astro-cid-236iqep3>
La page de devis reprend la même tenue que l'accueil et
          l'intervention rapide, tout en gardant un parcours facile à lire
          entre les choix techniques et le prix estimé.
</p> </div> <div class="signature-grid" data-astro-cid-236iqep3> `, ` </div> </section> <section class="showcase-section quote-workbench" id="quote-workbench" data-astro-cid-236iqep3> <div class="showcase-heading" data-astro-cid-236iqep3> <span class="section-kicker" data-astro-cid-236iqep3>CONFIGURATION</span> <h2 data-astro-cid-236iqep3>Renseignez le vitrage et obtenez une estimation lisible.</h2> <p data-astro-cid-236iqep3>
Le formulaire garde la logique de calcul existante, mais s'insère
          maintenant dans une mise en page alignée sur la home.
</p> </div> <div class="quote-layout" data-astro-cid-236iqep3> <section class="quote-form-surface" data-astro-cid-236iqep3> <div class="quote-panel__intro" data-astro-cid-236iqep3> <span class="section-kicker" data-astro-cid-236iqep3>FORMULAIRE</span> <h3 data-astro-cid-236iqep3>Caractéristiques du vitrage</h3> <p data-astro-cid-236iqep3>
Largeur, hauteur, type de vitrage, épaisseur, prestations et
              options.
</p> </div> <div class="quote-status" data-role="status" data-astro-cid-236iqep3>Chargement de la configuration...</div> <form class="quote-form" data-role="form" data-astro-cid-236iqep3> <div class="form-grid" data-astro-cid-236iqep3> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Largeur (cm)</span> <input name="width" type="number" min="1" step="0.01" value="120" required data-astro-cid-236iqep3> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Hauteur (cm)</span> <input name="height" type="number" min="1" step="0.01" value="150" required data-astro-cid-236iqep3> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Type de vitrage</span> <select name="glass_type" data-role="glass-type" required disabled data-astro-cid-236iqep3> <option data-astro-cid-236iqep3>Chargement...</option> </select> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Épaisseur</span> <select name="thickness" data-role="thickness" required disabled data-astro-cid-236iqep3> <option data-astro-cid-236iqep3>Chargement...</option> </select> </label> <div class="contact-fields" data-astro-cid-236iqep3> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Nom</span> <input name="nom" type="text" autocomplete="name" required data-astro-cid-236iqep3> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Numéro de téléphone</span> <input name="telephone" type="tel" inputmode="tel" autocomplete="tel" required data-astro-cid-236iqep3> </label> </div> </div> <fieldset class="options" data-role="work-types-group" disabled data-astro-cid-236iqep3> <legend data-astro-cid-236iqep3>Types de prestation</legend> <div class="options__grid" data-role="work-types" data-astro-cid-236iqep3></div> </fieldset> <fieldset class="options" data-role="options-group" disabled data-astro-cid-236iqep3> <legend data-astro-cid-236iqep3>Options</legend> <div class="options__grid" data-role="options" data-astro-cid-236iqep3></div> </fieldset> <div class="form-actions" data-astro-cid-236iqep3> <button class="quote-submit" type="submit" data-role="submit" disabled data-astro-cid-236iqep3>
Calculer le devis
</button> <a class="quote-link" href="/" data-astro-cid-236iqep3>Retour à l'accueil</a> </div> </form> </section> <aside class="quote-result-surface" data-astro-cid-236iqep3> <div class="quote-panel__intro quote-panel__intro--light" data-astro-cid-236iqep3> <span class="section-kicker section-kicker--light" data-astro-cid-236iqep3>RÉSULTAT</span> <h3 data-astro-cid-236iqep3>Votre estimation apparaît ici</h3> <p data-astro-cid-236iqep3>
Le détail du coût s'affiche après calcul avec une lecture simple
              de la surface, du vitrage, de la main-d'œuvre et des options.
</p> </div> <div class="result-empty" data-role="placeholder" data-astro-cid-236iqep3>
Lancez un calcul pour afficher le prix estimé et le détail du devis.
</div> <div class="result-panel" data-role="result" hidden data-astro-cid-236iqep3> <div class="result-total" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Total estimé</span> <strong data-role="total-price" data-astro-cid-236iqep3>-</strong> </div> <div class="result-summary" data-astro-cid-236iqep3> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Surface</span> <strong data-role="area" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Vitrage</span> <strong data-role="glass-cost" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Main-d'œuvre</span> <strong data-role="work-cost" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Options</span> <strong data-role="options-cost" data-astro-cid-236iqep3>-</strong> </div> </div> <div class="result-breakdown" data-astro-cid-236iqep3> <span class="section-kicker section-kicker--light" data-astro-cid-236iqep3>DÉTAIL</span> <ul class="simple-list" data-role="breakdown" data-astro-cid-236iqep3></ul> </div> </div> </aside> </div> </section> <section class="signature-section quote-cta-section" data-astro-cid-236iqep3> <div class="signature-copy" data-astro-cid-236iqep3> <span class="section-kicker" data-astro-cid-236iqep3>ALLER PLUS LOIN</span> <h2 data-astro-cid-236iqep3>Un devis pensé pour s'aligner naturellement avec le reste du site.</h2> <p data-astro-cid-236iqep3>
Une fois le calcul lancé, vous gardez la même ambiance que sur
          l'accueil et l'intervention rapide, avec des points d'entrée clairs
          pour continuer votre parcours.
</p> </div> <div class="quote-cta-layout" data-astro-cid-236iqep3> `, ' <div class="quote-cta-actions" data-astro-cid-236iqep3> <a class="hero-button hero-button--red" href="/intervention-rapide" data-astro-cid-236iqep3> <span class="hero-button__icon" data-astro-cid-236iqep3> ', ` </span> <span class="hero-button__copy" data-astro-cid-236iqep3> <small data-astro-cid-236iqep3>BESOIN D'UNE</small> <strong data-astro-cid-236iqep3>INTERVENTION RAPIDE</strong> </span> </a> <a class="hero-button hero-button--blue" href="/" data-astro-cid-236iqep3> <span class="hero-button__icon" data-astro-cid-236iqep3> `, ` </span> <span class="hero-button__copy" data-astro-cid-236iqep3> <small data-astro-cid-236iqep3>RETOUR A</small> <strong data-astro-cid-236iqep3>L'ACCUEIL</strong> </span> </a> </div> </div> </section> </main> <script>
    (() => {
      const quoteRoot = document.querySelector(".quote-page");
      if (!quoteRoot) return;

      const normalizeApiBase = (value) => value?.replace(/\\\\/$/, "") || "";
      const apiBase = normalizeApiBase(quoteRoot.dataset.apiBase);
      const apiFallbackBase = normalizeApiBase(quoteRoot.dataset.apiFallbackBase);
      const apiBases = Array.from(new Set([apiBase, apiFallbackBase].filter(Boolean)));
      let activeApiBase = apiBases[0] || "";
      const status = document.querySelector('[data-role="status"]');
      const form = document.querySelector('[data-role="form"]');
      const submitButton = document.querySelector('[data-role="submit"]');
      const glassTypeSelect = document.querySelector('[data-role="glass-type"]');
      const thicknessSelect = document.querySelector('[data-role="thickness"]');
      const workTypesWrapper = document.querySelector('[data-role="work-types"]');
      const workTypesGroup = document.querySelector('[data-role="work-types-group"]');
      const optionsWrapper = document.querySelector('[data-role="options"]');
      const optionsGroup = document.querySelector('[data-role="options-group"]');
      const placeholder = document.querySelector('[data-role="placeholder"]');
      const resultPanel = document.querySelector('[data-role="result"]');
      const totalPrice = document.querySelector('[data-role="total-price"]');
      const area = document.querySelector('[data-role="area"]');
      const glassCost = document.querySelector('[data-role="glass-cost"]');
      const workCost = document.querySelector('[data-role="work-cost"]');
      const optionsCost = document.querySelector('[data-role="options-cost"]');
      const breakdown = document.querySelector('[data-role="breakdown"]');

      const setStatus = (message, type = "info") => {
        if (!status) return;
        status.textContent = message;
        status.dataset.state = type;
      };

      const clearSelect = (select, placeholderText) => {
        if (!select) return;
        select.innerHTML = "";
        const option = document.createElement("option");
        option.value = "";
        option.textContent = placeholderText;
        select.appendChild(option);
      };

      const selectFirstAvailableOption = (select) => {
        if (!select || select.options.length < 2) return false;
        select.selectedIndex = 1;
        return true;
      };

      const createCheckboxItem = (name, value, labelText) => {
        const label = document.createElement("label");
        label.className = "option-item";

        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = name;
        input.value = String(value);

        const text = document.createElement("span");
        text.textContent = labelText;

        label.append(input, text);
        return label;
      };

      const money = (value, currency) => {
        const amount = Number.parseFloat(value);
        if (Number.isNaN(amount)) return \\\`\\\${value} \\\${currency}\\\`;
        return \\\`\\\${amount.toLocaleString("fr-FR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })} \\\${currency}\\\`;
      };

      const flattenErrors = (value) => {
        if (Array.isArray(value)) {
          return value.flatMap((item) => flattenErrors(item));
        }

        if (value && typeof value === "object") {
          return Object.values(value).flatMap((item) => flattenErrors(item));
        }

        if (typeof value === "string") {
          return [value];
        }

        return [];
      };

      const getErrorMessage = (payload) => {
        const messages = flattenErrors(payload).filter(Boolean);
        return messages[0] || "Le calcul a échoué. Vérifiez les champs ou la disponibilité du backend.";
      };

      const requestApi = async (path, options) => {
        const preferredBases = activeApiBase
          ? [activeApiBase, ...apiBases.filter((base) => base !== activeApiBase)]
          : apiBases;
        let lastResponse = null;
        let lastError = null;

        for (const base of preferredBases) {
          try {
            const response = await fetch(\\\`\\\${base}\\\${path}\\\`, options);
            if (response.ok) {
              activeApiBase = base;
              return response;
            }

            lastResponse = response;
            if (response.status !== 404 && response.status < 500) {
              return response;
            }
          } catch (error) {
            lastError = error;
          }
        }

        if (lastResponse) return lastResponse;
        throw lastError ?? new Error("Aucune route API disponible.");
      };

      const renderConfig = (config) => {
        clearSelect(glassTypeSelect, "Choisir un vitrage");
        clearSelect(thicknessSelect, "Choisir une epaisseur");

        config.glass_types.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.id;
          option.textContent = \\\`\\\${item.name} (\\\${money(item.price_per_m2, config.currency)}/m²)\\\`;
          glassTypeSelect.appendChild(option);
        });

        config.thicknesses.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.value;
          option.textContent = item.label;
          thicknessSelect.appendChild(option);
        });

        workTypesWrapper.innerHTML = "";
        config.work_types.forEach((item) => {
          workTypesWrapper.appendChild(
            createCheckboxItem(
              "work_types",
              item.id,
              \\\`\\\${item.name} (\\\${money(item.price, config.currency)})\\\`
            )
          );
        });

        optionsWrapper.innerHTML = "";
        config.options.forEach((item) => {
          optionsWrapper.appendChild(
            createCheckboxItem(
              "options",
              item.id,
              \\\`\\\${item.name} (\\\${money(item.price, config.currency)})\\\`
            )
          );
        });

        const hasGlassType = selectFirstAvailableOption(glassTypeSelect);
        const hasThickness = selectFirstAvailableOption(thicknessSelect);
        const hasWorkTypes = config.work_types.length > 0;
        const isReady = hasGlassType && hasThickness && hasWorkTypes;

        glassTypeSelect.disabled = false;
        thicknessSelect.disabled = false;
        workTypesGroup.disabled = false;
        optionsGroup.disabled = false;
        submitButton.disabled = !isReady;

        if (!isReady) {
          setStatus("Configuration incomplète : le backend ne renvoie pas toutes les valeurs nécessaires.", "error");
          return;
        }

        setStatus("Configuration chargée depuis le backend. Vous pouvez calculer un devis.", "success");
      };

      const renderResult = (result) => {
        placeholder.hidden = true;
        resultPanel.hidden = false;
        totalPrice.textContent = money(result.total_price, result.currency);
        area.textContent = \\\`\\\${result.area} m²\\\`;
        glassCost.textContent = money(result.glass_cost, result.currency);
        workCost.textContent = money(result.work_cost, result.currency);
        optionsCost.textContent = money(result.options_cost, result.currency);
        breakdown.innerHTML = "";

        result.details.breakdown.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = \\\`\\\${item.label}: \\\${money(item.amount, result.currency)}\\\`;
          breakdown.appendChild(li);
        });
      };

      const loadConfig = async () => {
        try {
          setStatus("Chargement de la configuration...", "info");
          const response = await requestApi("/config/");
          if (!response.ok) throw new Error(\\\`Erreur \\\${response.status}\\\`);
          const config = await response.json();
          renderConfig(config);
        } catch (error) {
          console.error(error);
          setStatus("Impossible de charger la configuration du devis. Vérifiez que le backend est disponible.", "error");
        }
      };

      form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        submitButton.disabled = true;
        setStatus("Calcul du devis en cours...", "info");

        const formData = new FormData(form);
        const selectedWorkTypes = formData
          .getAll("work_types")
          .map((value) => Number(value));

        if (!selectedWorkTypes.length) {
          setStatus("Sélectionnez au moins une prestation pour calculer le devis.", "error");
          submitButton.disabled = false;
          return;
        }

        const payload = {
          nom: formData.get("nom"),
          telephone: formData.get("telephone"),
          width: formData.get("width"),
          height: formData.get("height"),
          glass_type: Number(formData.get("glass_type")),
          thickness: Number(formData.get("thickness")),
          work_types: selectedWorkTypes,
          options: formData.getAll("options").map((value) => Number(value)),
          holes: []
        };

        try {
          const response = await requestApi("/quote-request/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });

          const data = await response.json();
          if (!response.ok) {
            throw new Error(getErrorMessage(data));
          }

          renderResult(data);
          setStatus("Devis calculé et enregistré avec succès.", "success");
        } catch (error) {
          console.error(error);
          setStatus(error instanceof Error ? error.message : "Le calcul a échoué. Vérifiez les champs ou la disponibilité du backend.", "error");
        } finally {
          submitButton.disabled = false;
        }
      });

      loadConfig();
    })();
  </script> `, "  "])), maybeRenderHead(), addAttribute(apiBaseUrl, "data-api-base"), addAttribute(apiFallbackBaseUrl, "data-api-fallback-base"), renderComponent($$result2, "BrandLockup", $$BrandLockup, { "size": "hero", "data-astro-cid-236iqep3": true }), quoteHighlights.map((feature) => renderTemplate`<div${addAttribute(`feature-item feature-item--${feature.tone}`, "class")} data-astro-cid-236iqep3> <span class="feature-item__icon" data-astro-cid-236iqep3> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": feature.icon, "data-astro-cid-236iqep3": true })} </span> <span class="feature-item__copy" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>${feature.title}</span> <span data-astro-cid-236iqep3>${feature.subtitle}</span> </span> </div>`), renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "quote", "data-astro-cid-236iqep3": true }), renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "arrow", "data-astro-cid-236iqep3": true }), quoteTrustItems.map((item) => renderTemplate`<div class="trust-item" data-astro-cid-236iqep3> <span class="trust-item__icon" data-astro-cid-236iqep3> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-236iqep3": true })} </span> <span class="trust-item__label" data-astro-cid-236iqep3>${item.label}</span> </div>`), renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "mail", "data-astro-cid-236iqep3": true }), quoteChecklist.map((item) => renderTemplate`<article class="quote-checklist-card" data-astro-cid-236iqep3> <span class="quote-checklist-card__icon" data-astro-cid-236iqep3> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "shield", "data-astro-cid-236iqep3": true })} </span> <p data-astro-cid-236iqep3>${item}</p> </article>`), quoteProcess.map((item) => renderTemplate`<article class="signature-card" data-astro-cid-236iqep3> <span class="signature-card__step" data-astro-cid-236iqep3>${item.step}</span> <h3 data-astro-cid-236iqep3>${item.title}</h3> <p data-astro-cid-236iqep3>${item.description}</p> </article>`), quoteBenefits.map((item) => renderTemplate`<article class="signature-card quote-cta-card" data-astro-cid-236iqep3> <span class="signature-card__icon" data-astro-cid-236iqep3> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-236iqep3": true })} </span> <h3 data-astro-cid-236iqep3>${item.title}</h3> <p data-astro-cid-236iqep3>${item.description}</p> </article>`), renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "arrow", "data-astro-cid-236iqep3": true }), renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "quote", "data-astro-cid-236iqep3": true }), renderScript($$result2, "C:/Users/EMMA/ug/ugfrontend/src/pages/devis/index.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "C:/Users/EMMA/ug/ugfrontend/src/pages/devis/index.astro", void 0);
const $$file = "C:/Users/EMMA/ug/ugfrontend/src/pages/devis/index.astro";
const $$url = "/devis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
