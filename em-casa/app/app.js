// Star Kids em Casa — app logic
// Access gating, progress tracking (localStorage), nav helpers.

(function () {
  'use strict';

  const LS_KEY = 'starkids_em_casa_progress_v1';
  const LS_ACCESS = 'starkids_em_casa_access_v1';

  // --- URL / query helpers ---
  function qs(name) {
    return new URL(window.location.href).searchParams.get(name);
  }

  // --- Access control ---
  // Access is granted by:
  //   1. URL ?access=TOKEN (persisted to localStorage on first visit)
  //   2. The literal "demo" token (anyone can preview — unlocks nothing extra)
  // The TOKEN itself is validated server-side after purchase. For now, any
  // non-demo value unlocks everything (stub).
  function readAccess() {
    const fromUrl = qs('access');
    if (fromUrl) {
      try { localStorage.setItem(LS_ACCESS, fromUrl); } catch (e) {}
      return fromUrl;
    }
    try { return localStorage.getItem(LS_ACCESS); } catch (e) { return null; }
  }

  function hasFullAccess() {
    const token = readAccess();
    return !!token && token !== 'demo';
  }

  function isLessonUnlocked(moduleN, lessonN) {
    // Free preview: Module 1, Lesson 1
    if (moduleN === 1 && lessonN === 1) return true;
    return hasFullAccess();
  }

  // --- Progress tracking ---
  function readProgress() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function writeProgress(p) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(p)); } catch (e) {}
  }

  function key(m, l) { return 'm' + m + 'l' + l; }

  function isCompleted(m, l) {
    const p = readProgress();
    return !!p[key(m, l)];
  }

  function markCompleted(m, l) {
    const p = readProgress();
    p[key(m, l)] = { completedAt: Date.now() };
    writeProgress(p);
  }

  function moduleProgress(m) {
    const p = readProgress();
    let done = 0;
    for (let i = 1; i <= 12; i++) {
      if (p[key(m, i)]) done++;
    }
    return { done, total: 12, pct: Math.round((done / 12) * 100) };
  }

  function totalProgress() {
    const p = readProgress();
    const total = 72;
    const done = Object.keys(p).length;
    return { done, total, pct: Math.round((done / total) * 100) };
  }

  // --- Export ---
  window.StarKids = {
    hasFullAccess,
    isLessonUnlocked,
    isCompleted,
    markCompleted,
    moduleProgress,
    totalProgress,
    readAccess
  };
})();
