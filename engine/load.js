// Loads procedure files into the page. Each file pushes its procedure onto window.PROCEDURES.
// The files arrive in any order, so once all are in, window.PROCEDURES is put in the order of ids.
(function (root) {
  'use strict';

  function procedures(ids, base = '') {
    return Promise.all(ids.map((id) => new Promise((ok, no) => {
      const s = document.createElement('script');
      s.src = `${base}${id}.js`;
      s.onload = ok;
      s.onerror = () => no(new Error(`${base}${id}.js did not load`));
      document.body.appendChild(s);
    }))).then(() => {
      const loaded = root.PROCEDURES || [];
      const byId = new Map(loaded.map((p) => [p.id, p]));
      if (loaded.length !== ids.length || byId.size !== ids.length) {
        throw new Error(`${ids.length} procedure files loaded but window.PROCEDURES holds ${loaded.length} procedures with ${byId.size} different ids`);
      }
      root.PROCEDURES = ids.map((id) => {
        if (!byId.has(id)) throw new Error(`${base}${id}.js loaded but added no procedure with the id "${id}"`);
        return byId.get(id);
      });
    });
  }

  root.ProcLoad = { procedures };
})(this);
