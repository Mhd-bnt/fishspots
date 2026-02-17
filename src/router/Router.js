class Router {
  constructor({ rootId = "app", linkSelector = "a[data-link]" } = {}) {
    this.routes = [];
    this.notFoundView = () => "<h1>404 - Page not found</h1>";

    this.rootId = rootId;
    this.linkSelector = linkSelector;

    this.appElement = null;
  }

  addRoute(pathPattern, viewFn) {
    const { regex, paramKeys } = compilePathPattern(pathPattern);
    this.routes.push({ regex, paramKeys, viewFn });
    return this; // chaining
  }

  setNotFound(viewFn) {
    this.notFoundView = viewFn;
    return this;
  }

  navigateTo(targetPath) {
    const normalizedPath = normalizePath(targetPath);

    history.pushState(null, "", normalizedPath);

    // CUSTOM
    this.renderRoute(normalizedPath);
  }

  renderRoute(path = location.pathname) {
    const normalizedPath = normalizePath(path);

    const appElement =
      this.appElement ||
      (this.appElement = document.getElementById(this.rootId));
    if (!appElement) return;

    for (const routeEntry of this.routes) {
      const matchResult = routeEntry.regex.exec(normalizedPath);
      if (!matchResult) continue;

      const params = routeEntry.paramKeys.reduce((acc, key, index) => {
        acc[key] = matchResult[index + 1]; // index+1 car 0 = match complet
        return acc;
      }, {});

      appElement.innerHTML = routeEntry.viewFn(params);
      return;
    }

    appElement.innerHTML = this.notFoundView();
  }

  start() {
    this.renderRoute();

    addEventListener("popstate", () => this.renderRoute());

    document.body.addEventListener("click", (e) => {
      const isModifiedClick =
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey;

      if (isModifiedClick) return;

      const clickedLink = e.target.closest(this.linkSelector);
      if (!clickedLink) return;

      const linkUrl = new URL(
        clickedLink.getAttribute("href"),
        location.origin,
      );
      if (linkUrl.origin !== location.origin) return;

      e.preventDefault();

      this.navigateTo(linkUrl.pathname);
    });
  }
}

// ------------------ Helpers (CUSTOM) ------------------

function normalizePath(path) {
  // CUSTOM util, mais utilise des NATIFS JS (String, regex)
  const rawPath = String(path || "/");
  const withLeadingSlash = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  return withLeadingSlash !== "/" ? withLeadingSlash.replace(/\/+$/, "") : "/";
}

function escapeRegex(text) {
  // CUSTOM util
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function compilePathPattern(pathPattern) {
  // CUSTOM: transforme "/spots/:id" en regex + ["id"]
  if (pathPattern === "/") return { regex: /^\/$/, paramKeys: [] };

  const paramKeys = [];

  const pathParts = normalizePath(pathPattern)
    .slice(1) // retire le premier "/"
    .split("/")
    .map((segment) => {
      // NATIF JS: RegExp.exec
      const paramMatch = /^:(\w+)(?:\((.+)\))?$/.exec(segment);

      // segment normal → on l’échappe
      if (!paramMatch) return escapeRegex(segment);

      // segment param → on le capture
      const [, paramName, customPattern] = paramMatch;
      paramKeys.push(paramName);
      return `(${customPattern || "[^/]+"})`;
    });

  const regex = new RegExp(`^\\/${pathParts.join("\\/")}$`);
  return { regex, paramKeys };
}

export const router = new Router();
