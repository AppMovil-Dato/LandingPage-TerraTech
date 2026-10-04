"use strict";

// All visitor-facing copy, including errors and accessible names, lives here.
const translations = {
  "es": {
    "meta.title": "TerraTech | Monitorea tu parcela con datos del suelo",
    "meta.description": "Gestiona parcelas y sensores, consulta indicadores del suelo y revisa el histórico de humedad con TerraTech. Plan Pro por S/ 50 al mes.",
    "skip": "Ir al contenido",
    "nav.label": "Navegación principal",
    "nav.home": "Inicio",
    "nav.benefits": "Beneficios",
    "nav.solutions": "Soluciones",
    "nav.plans": "Planes",
    "nav.team": "Equipo",
    "nav.contact": "Contacto",
    "nav.menuOpen": "Abrir menú",
    "nav.menuClose": "Cerrar menú",
    "lang.label": "Seleccionar idioma",
    "lang.es": "Español",
    "lang.en": "Inglés",
    "cta.demo": "Solicitar demostración",
    "cta.features": "Conocer funcionalidades",
    "cta.contact": "Contactar con nosotros",
    "hero.title": "Monitorea tu parcela con datos del suelo.",
    "hero.description": "Gestiona tus parcelas y sensores, consulta humedad, temperatura y nutrientes, y revisa el histórico de humedad desde la app Android.",
    "hero.note": "Tu parcela, sus mediciones y su historial en un solo lugar.",
    "hero.photoAlt": "Hileras de cultivos verdes en un campo al atardecer",
    "hero.photoCaption": "Datos del suelo para entender mejor tu campo.",
    "screen.dashboardAlt": "Captura original en español del dashboard de TerraTech con indicadores de humedad, temperatura y nutrientes",
    "screen.historyAlt": "Captura original en español del histórico de humedad de TerraTech",
    "screen.offlineAlt": "Captura original en español del modo sin conexión de TerraTech con datos descargados y su antigüedad",
    "benefits.title": "Beneficios y características",
    "benefits.description": "Todo lo que necesitas para gestionar tus parcelas y consultar la información del suelo desde una experiencia sencilla.",
    "benefit.accessTitle": "Registro e inicio de sesión",
    "benefit.accessText": "Crea tu cuenta y accede a la información de tus propias parcelas.",
    "benefit.profileTitle": "Perfil y parcelas",
    "benefit.profileText": "Consulta y actualiza tus datos personales y la información de tu terreno.",
    "benefit.sensorTitle": "Registro de sensor",
    "benefit.sensorText": "Asocia un dispositivo válido a tu parcela para consultar sus mediciones.",
    "benefit.plotTitle": "Selección de parcela",
    "benefit.plotText": "Elige la parcela que quieres consultar y revisa sus dispositivos asociados.",
    "benefit.indicatorsTitle": "Indicadores del suelo",
    "benefit.indicatorsText": "Consulta las últimas mediciones de humedad, temperatura y nutrientes, con su fecha de actualización.",
    "benefit.historyTitle": "Historial de mediciones",
    "benefit.historyText": "Revisa la humedad de los últimos 7 o 30 días y el detalle de cada lectura.",
    "benefit.offlineTitle": "Consulta sin conexión",
    "benefit.offlineText": "Accede a parcelas, sensores y mediciones descargadas, sabiendo cuándo se actualizaron.",
    "solutions.title": "Tecnología para conocer mejor tu suelo",
    "solutions.description": "TerraTech conecta la información de tus sensores con una app Android. Elige una parcela, revisa sus mediciones y consulta cómo cambia la humedad a lo largo del tiempo.",
    "solutions.subheading": "De tu parcela a la información que necesitas",
    "solution.access": "Acceso seguro",
    "solution.plots": "Parcelas y perfil",
    "solution.sensors": "Sensores asociados",
    "solution.indicators": "Últimas mediciones",
    "solution.history": "Histórico de 7 y 30 días",
    "solution.offline": "Información descargada",
    "gallery.label": "Explorar pantallas de la aplicación",
    "gallery.dashboard": "Indicadores",
    "gallery.history": "Histórico",
    "gallery.offline": "Sin conexión",
    "gallery.dashboardText": "Consulta los indicadores de tu parcela y la fecha de actualización de las mediciones.",
    "gallery.historyText": "Explora el histórico de humedad en periodos de 7 y 30 días y consulta una lectura.",
    "gallery.offlineText": "Consulta la información previamente descargada. La app muestra su antigüedad para ayudarte a interpretarla.",
    "gallery.original": "Capturas originales de la app en español.",
    "plans.title": "Elige cómo empezar con TerraTech",
    "plans.description": "Conoce el plan Pro o conversemos sobre las necesidades de tu organización.",
    "plans.pro": "Pro",
    "plans.proDescription": "Para gestionar tus parcelas y consultar la información del suelo.",
    "plans.period": "al mes",
    "plans.proPlots": "Gestión de parcelas y sensores",
    "plans.proIndicators": "Humedad, temperatura y nutrientes",
    "plans.proHistory": "Histórico de humedad de 7 y 30 días",
    "plans.proOffline": "Consulta de información descargada",
    "plans.enterprise": "Empresarial",
    "plans.enterpriseDescription": "Cuéntanos sobre tu organización y las necesidades de tus parcelas.",
    "plans.enterprisePrice": "Conversemos",
    "plans.enterpriseDetail": "Contacta con nuestro equipo para conversar sobre las opciones de contratación.",
    "team.title": "Equipo NovaTech",
    "team.description": "Somos estudiantes de Ingeniería de Software que desarrollamos TerraTech para acercar la información del suelo a la experiencia del agricultor.",
    "team.specialty": "Ingeniería de Software",
    "team.bryan": "Requisitos y validación",
    "team.fitzgerald": "Arquitectura de software",
    "team.james": "Presentación y documentación",
    "team.angel": "Investigación y diseño móvil",
    "team.jorge": "Desarrollo de backend",
    "contact.title": "Solicita una demostración",
    "contact.description": "Cuéntanos sobre tu parcela y explora cómo TerraTech puede ayudarte a consultar la información de tu suelo.",
    "contact.note": "Información clara para tus decisiones en el campo.",
    "form.title": "Hablemos de tu parcela",
    "form.requiredNote": "Nombre y correo son obligatorios.",
    "form.name": "Nombre completo",
    "form.email": "Correo electrónico",
    "form.phone": "Teléfono",
    "form.area": "Tamaño del terreno (ha)",
    "form.optional": "Opcional",
    "form.phoneHint": "Puedes incluir tu código de país.",
    "form.areaHint": "Ingresa el tamaño en hectáreas.",
    "form.simulation": "Formulario de prueba. No envía solicitudes ni correos.",
    "form.loading": "Validando solicitud…",
    "form.success": "Prueba completada. No se ha enviado ninguna solicitud.",
    "form.errorSummary": "Revisa los campos indicados antes de continuar.",
    "form.nameError": "Ingresa tu nombre completo.",
    "form.emailRequired": "Ingresa tu correo electrónico.",
    "form.emailInvalid": "Ingresa un correo electrónico válido.",
    "form.areaError": "Ingresa un tamaño de terreno mayor que cero.",
    "form.noJs": "Activa JavaScript para probar el formulario. No se enviarán datos.",
    "footer.description": "Tecnología agrícola para consultar tu suelo, tus parcelas y sus mediciones.",
    "footer.links": "Explora TerraTech",
    "footer.project": "El proyecto",
    "footer.report": "Informe del proyecto",
    "footer.developed": "Desarrollado por NovaTech.",
    "footer.photo": "Fotografía agrícola: Dan Meyers / Unsplash.",
    "soil.moisture": "Humedad",
    "soil.temperature": "Temperatura",
    "soil.nutrients": "Nutrientes"
  },
  "en": {
    "meta.title": "TerraTech | Monitor your plot with soil data",
    "meta.description": "Manage plots and sensors, view soil indicators and review moisture history with TerraTech. Pro plan for S/ 50 per month.",
    "skip": "Skip to content",
    "nav.label": "Main navigation",
    "nav.home": "Home",
    "nav.benefits": "Benefits",
    "nav.solutions": "Solutions",
    "nav.plans": "Plans",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.menuOpen": "Open menu",
    "nav.menuClose": "Close menu",
    "lang.label": "Choose language",
    "lang.es": "Spanish",
    "lang.en": "English",
    "cta.demo": "Request a demo",
    "cta.features": "Explore features",
    "cta.contact": "Contact us",
    "hero.title": "Monitor your plot with soil data.",
    "hero.description": "Manage your plots and sensors, check moisture, temperature and nutrients, and review moisture history in the Android app.",
    "hero.note": "Your plot, its readings and its history in one place.",
    "hero.photoAlt": "Rows of green crops in a field at sunset",
    "hero.photoCaption": "Soil data to better understand your field.",
    "screen.dashboardAlt": "Original Spanish TerraTech dashboard showing soil moisture, temperature and nutrient indicators",
    "screen.historyAlt": "Original Spanish TerraTech moisture history screen",
    "screen.offlineAlt": "Original Spanish TerraTech offline screen with downloaded data and its age",
    "benefits.title": "Benefits and features",
    "benefits.description": "Everything you need to manage your plots and check soil information through a simple experience.",
    "benefit.accessTitle": "Registration and sign-in",
    "benefit.accessText": "Create your account and access information about your own plots.",
    "benefit.profileTitle": "Profile and plots",
    "benefit.profileText": "View and update your personal details and land information.",
    "benefit.sensorTitle": "Sensor registration",
    "benefit.sensorText": "Link a valid device to your plot to view its readings.",
    "benefit.plotTitle": "Plot selection",
    "benefit.plotText": "Choose the plot you want to view and check its linked devices.",
    "benefit.indicatorsTitle": "Soil indicators",
    "benefit.indicatorsText": "View the latest moisture, temperature and nutrient readings, with their update time.",
    "benefit.historyTitle": "Measurement history",
    "benefit.historyText": "Review moisture from the last 7 or 30 days and the details of each reading.",
    "benefit.offlineTitle": "Offline access",
    "benefit.offlineText": "Access downloaded plots, sensors and readings, knowing when they were updated.",
    "solutions.title": "Technology to better understand your soil",
    "solutions.description": "TerraTech connects information from your sensors to an Android app. Choose a plot, review its readings and see how moisture changes over time.",
    "solutions.subheading": "From your plot to the information you need",
    "solution.access": "Secure access",
    "solution.plots": "Plots and profile",
    "solution.sensors": "Linked sensors",
    "solution.indicators": "Latest readings",
    "solution.history": "7- and 30-day history",
    "solution.offline": "Downloaded information",
    "gallery.label": "Explore app screens",
    "gallery.dashboard": "Indicators",
    "gallery.history": "History",
    "gallery.offline": "Offline",
    "gallery.dashboardText": "Check your plot's indicators and the time the readings were updated.",
    "gallery.historyText": "Explore moisture history over 7 and 30 days and view an individual reading.",
    "gallery.offlineText": "View previously downloaded information. The app shows its age to help you interpret it.",
    "gallery.original": "Original app screenshots in Spanish.",
    "plans.title": "Choose how to get started with TerraTech",
    "plans.description": "Explore Pro or talk to us about your organization's needs.",
    "plans.pro": "Pro",
    "plans.proDescription": "For managing your plots and viewing soil information.",
    "plans.period": "per month",
    "plans.proPlots": "Plot and sensor management",
    "plans.proIndicators": "Moisture, temperature and nutrients",
    "plans.proHistory": "7- and 30-day moisture history",
    "plans.proOffline": "Access to downloaded information",
    "plans.enterprise": "Enterprise",
    "plans.enterpriseDescription": "Tell us about your organization and the needs of your plots.",
    "plans.enterprisePrice": "Let's talk",
    "plans.enterpriseDetail": "Contact our team to discuss subscription options.",
    "team.title": "The NovaTech team",
    "team.description": "We are Software Engineering students building TerraTech to bring soil information closer to the farmer's experience.",
    "team.specialty": "Software Engineering",
    "team.bryan": "Requirements and validation",
    "team.fitzgerald": "Software architecture",
    "team.james": "Project presentation and documentation",
    "team.angel": "Research and mobile design",
    "team.jorge": "Backend development",
    "contact.title": "Request a demo",
    "contact.description": "Tell us about your plot and explore how TerraTech can help you view your soil information.",
    "contact.note": "Clear information for your decisions in the field.",
    "form.title": "Let's talk about your plot",
    "form.requiredNote": "Name and email are required.",
    "form.name": "Full name",
    "form.email": "Email address",
    "form.phone": "Phone number",
    "form.area": "Land area (ha)",
    "form.optional": "Optional",
    "form.phoneHint": "You can include your country code.",
    "form.areaHint": "Enter the area in hectares.",
    "form.simulation": "Test form. No requests or emails are sent.",
    "form.loading": "Validating request…",
    "form.success": "Test completed. No request has been sent.",
    "form.errorSummary": "Review the indicated fields before continuing.",
    "form.nameError": "Enter your full name.",
    "form.emailRequired": "Enter your email address.",
    "form.emailInvalid": "Enter a valid email address.",
    "form.areaError": "Enter a land area greater than zero.",
    "form.noJs": "Enable JavaScript to try the form. No data will be sent.",
    "footer.description": "Agricultural technology to view your soil, your plots and their readings.",
    "footer.links": "Explore TerraTech",
    "footer.project": "The project",
    "footer.report": "Project report",
    "footer.developed": "Developed by NovaTech.",
    "footer.photo": "Agricultural photograph: Dan Meyers / Unsplash.",
    "soil.moisture": "Moisture",
    "soil.temperature": "Temperature",
    "soil.nutrients": "Nutrients"
  }
};

const state = { language: "es", screen: "dashboard", loading: false, status: null, errors: new Map() };
const form = document.querySelector("#demo-form");
const submitButton = form.querySelector('[type="submit"]');
const submitLabel = document.querySelector("#submit-label");
const formStatus = document.querySelector("#form-status");
const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const screenImage = document.querySelector("#gallery-screen");
const screenDescription = document.querySelector("#gallery-description");
const screenButtons = [...document.querySelectorAll("[data-screen]")];
const fields = {
  name: { input: document.querySelector("#full-name"), error: document.querySelector("#name-error") },
  email: { input: document.querySelector("#email"), error: document.querySelector("#email-error") },
  area: { input: document.querySelector("#land-area"), error: document.querySelector("#area-error") }
};

function translate(key) { return translations[state.language][key]; }

function setLanguage(language, persist = false) {
  if (!Object.hasOwn(translations, language)) return;
  state.language = language;
  document.documentElement.lang = language;
  document.title = translate("meta.title");
  document.querySelector('meta[name="description"]').content = translate("meta.description");
  document.querySelector('meta[property="og:title"]').content = translate("meta.title");
  document.querySelector('meta[property="og:description"]').content = translate("meta.description");
  document.querySelector('meta[property="og:locale"]').content = language === "es" ? "es_PE" : "en_US";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = translate(element.dataset.i18n);
    if (value !== undefined) element.textContent = value;
  });
  for (const attribute of ["aria-label", "alt"]) {
    document.querySelectorAll("[data-i18n-" + attribute + "]").forEach(element => {
      const key = element.getAttribute("data-i18n-" + attribute);
      element.setAttribute(attribute, translate(key));
    });
  }
  document.querySelectorAll("[data-lang]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });
  state.errors.forEach((key, field) => { fields[field].error.textContent = translate(key); });
  updateMenuLabel();
  renderFormStatus();
  if (persist) {
    try { localStorage.setItem("terratech-language", language); } catch { /* Language still works when storage is unavailable. */ }
  }
}

function updateMenuLabel() {
  const key = menuButton.getAttribute("aria-expanded") === "true" ? "nav.menuClose" : "nav.menuOpen";
  menuButton.setAttribute("data-i18n-aria-label", key);
  menuButton.setAttribute("aria-label", translate(key));
}

function setMenu(open, returnFocus = false) {
  mainNav.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  updateMenuLabel();
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    const wasOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenu(false);
    if (wasOpen) {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    }
  });
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") setMenu(false, true);
});
document.addEventListener("click", event => {
  if (!event.target.closest(".site-header")) setMenu(false);
});
window.matchMedia("(min-width: 1151px)").addEventListener("change", event => {
  if (event.matches) setMenu(false);
});
document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang, true));
});

function selectScreen(name, moveFocus = false) {
  if (!["dashboard", "history", "offline"].includes(name)) return;
  state.screen = name;
  screenImage.src = "assets/screens/" + name + ".png";
  screenImage.dataset.i18nAlt = "screen." + name + "Alt";
  screenImage.alt = translate(screenImage.dataset.i18nAlt);
  screenDescription.dataset.i18n = "gallery." + name + "Text";
  screenDescription.textContent = translate(screenDescription.dataset.i18n);
  document.querySelector("#product-panel").setAttribute("aria-labelledby", "tab-" + name);
  screenButtons.forEach(button => {
    const selected = button.dataset.screen === name;
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
    if (selected && moveFocus) button.focus();
  });
}
screenButtons.forEach((button, index) => {
  button.addEventListener("click", () => selectScreen(button.dataset.screen));
  button.addEventListener("keydown", event => {
    let targetIndex;
    if (event.key === "ArrowRight") targetIndex = (index + 1) % screenButtons.length;
    else if (event.key === "ArrowLeft") targetIndex = (index - 1 + screenButtons.length) % screenButtons.length;
    else if (event.key === "Home") targetIndex = 0;
    else if (event.key === "End") targetIndex = screenButtons.length - 1;
    else return;
    event.preventDefault();
    selectScreen(screenButtons[targetIndex].dataset.screen, true);
  });
});

function validateField(field) {
  const input = fields[field].input;
  if (field === "name" && !input.value.trim()) return "form.nameError";
  if (field === "email") {
    if (!input.value.trim()) return "form.emailRequired";
    if (input.validity.typeMismatch) return "form.emailInvalid";
  }
  if (field === "area" && (input.validity.badInput ||
      (input.value !== "" && (!Number.isFinite(Number(input.value)) || Number(input.value) <= 0)))) {
    return "form.areaError";
  }
  return null;
}

function setFieldError(field, key) {
  const { input, error } = fields[field];
  if (key) {
    state.errors.set(field, key);
    input.setAttribute("aria-invalid", "true");
    error.textContent = translate(key);
    error.hidden = false;
  } else {
    state.errors.delete(field);
    input.removeAttribute("aria-invalid");
    error.textContent = "";
    error.hidden = true;
  }
}

function renderFormStatus() {
  submitLabel.dataset.i18n = state.loading ? "form.loading" : "cta.demo";
  submitLabel.textContent = translate(submitLabel.dataset.i18n);
  submitButton.disabled = state.loading;
  form.setAttribute("aria-busy", String(state.loading));
  form.querySelector(".spinner").hidden = !state.loading;
  formStatus.hidden = !state.status;
  formStatus.classList.toggle("is-error", state.status === "form.errorSummary");
  formStatus.textContent = state.status ? translate(state.status) : "";
}

form.addEventListener("submit", event => {
  event.preventDefault();
  if (state.loading) return;
  Object.keys(fields).forEach(field => setFieldError(field, validateField(field)));
  if (state.errors.size) {
    state.status = "form.errorSummary";
    renderFormStatus();
    fields[state.errors.keys().next().value].input.focus();
    return;
  }
  state.status = null;
  state.loading = true;
  renderFormStatus();
  // Intentional local simulation. No request, mailto, analytics or personal-data storage.
  window.setTimeout(() => {
    state.loading = false;
    state.status = "form.success";
    renderFormStatus();
  }, 2000);
});

Object.entries(fields).forEach(([field, { input }]) => {
  input.addEventListener("input", () => {
    if (state.errors.has(field)) setFieldError(field, validateField(field));
    if (!state.loading && (state.status === "form.success" || !state.errors.size)) {
      state.status = null;
      renderFormStatus();
    }
  });
});

const navLinks = [...mainNav.querySelectorAll("[data-nav-link]")];
let scrollScheduled = false;
function updateActiveLink() {
  let active = navLinks[0];
  for (const link of navLinks) {
    if (document.querySelector(link.hash).getBoundingClientRect().top <= window.innerHeight * .3) active = link;
  }
  navLinks.forEach(link => {
    if (link === active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollScheduled = false;
}
window.addEventListener("scroll", () => {
  if (!scrollScheduled) { scrollScheduled = true; window.requestAnimationFrame(updateActiveLink); }
}, { passive: true });
window.addEventListener("resize", updateActiveLink);

let initialLanguage = "es";
try {
  const stored = localStorage.getItem("terratech-language");
  if (stored === "es" || stored === "en") initialLanguage = stored;
} catch { /* Use Spanish when storage is unavailable. */ }
setLanguage(initialLanguage);
updateActiveLink();
