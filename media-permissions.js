(function(){
  'use strict';

  const MEDIA_PERMISSION_KEY = 'mediaPermission';
  const LEGACY_MEDIA_PERMISSION_KEY = 'micPermission';

  function remember(value) {
    localStorage.setItem(MEDIA_PERMISSION_KEY, value);
    // Legacy key used by earlier sessions.
    localStorage.setItem(LEGACY_MEDIA_PERMISSION_KEY, value);
  }

  function getStored() {
    return localStorage.getItem(MEDIA_PERMISSION_KEY) || localStorage.getItem(LEGACY_MEDIA_PERMISSION_KEY);
  }

  async function query(name) {
    if (!navigator.permissions?.query) return null;
    try { return (await navigator.permissions.query({ name })).state; }
    catch(e) { console.warn('Permission query failed:', name, e); return null; }
  }

  async function getBrowserState() {
    const states = await Promise.all([query('camera'), query('microphone')]);
    if (states.includes('denied')) return 'denied';
    if (states.every(s => s === 'granted')) return 'granted';
    if (states.includes('prompt')) return 'prompt';
    return null;
  }

  window.NextStepMediaPermissions = { remember, getStored, query, getBrowserState };
})();
