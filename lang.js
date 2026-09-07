let lang=localStorage.getItem('yz-lang')||'ar';
function applyLang(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';const b=document.getElementById('langToggle');if(b)b.textContent=lang==='ar'?'English':'العربية';document.querySelectorAll('[data-ar][data-en]').forEach(e=>e.textContent=lang==='ar'?e.dataset.ar:e.dataset.en)}
document.getElementById('langToggle')?.addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';localStorage.setItem('yz-lang',lang);applyLang()});applyLang();
