// Petits outils partagés par les trois tableaux de bord (SVG, infobulle, groupes de boutons).

export const NS = 'http://www.w3.org/2000/svg';
export const MONO = 'IBM Plex Mono, monospace';
export const fmt = new Intl.NumberFormat('fr-FR');

export function el(tag, attrs, parent, text) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (text != null) e.textContent = text;
  if (parent) parent.appendChild(e);
  return e;
}

// Infobulle positionnée dans la figure, retournée vers la gauche près du bord droit
export function infobulle(fig) {
  const tip = fig.querySelector('.tip');
  return {
    montrer(evt, html) {
      const r = fig.getBoundingClientRect();
      tip.innerHTML = html;
      tip.hidden = false;
      let x = evt.clientX - r.left + 14;
      const y = evt.clientY - r.top + 14;
      if (x + tip.offsetWidth > r.width - 8) x = evt.clientX - r.left - tip.offsetWidth - 14;
      tip.style.left = x + 'px';
      tip.style.top = y + 'px';
    },
    cacher() { tip.hidden = true; },
  };
}

export function boutons(conteneur, libelles, surClic, etiquettes) {
  libelles.forEach((l, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.innerHTML = l;
    if (etiquettes) b.setAttribute('aria-label', etiquettes[i]);
    b.addEventListener('click', () => surClic(i));
    conteneur.appendChild(b);
  });
  return Array.from(conteneur.children);
}

export function presser(liste, test) {
  liste.forEach((b, i) => b.setAttribute('aria-pressed', String(test(i))));
}

// Générateur pseudo-aléatoire déterministe : les données fictives sont les mêmes à chaque visite
export function aleatoire(graine) {
  let s = graine;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

export const pct = (v, d = 1) => v.toFixed(d).replace('.', ',');
