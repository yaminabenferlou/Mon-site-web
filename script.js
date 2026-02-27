<script>
    const langBtn = document.getElementById('lang-switch');
    let currentLang = 'fr';

    langBtn.addEventListener('click', () => {
        // 1. On change de langue
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        
        // 2. On change le texte du bouton (FR ou EN)
        langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';

        // 3. On traduit tous les éléments qui ont "data-fr"
        document.querySelectorAll('[data-fr]').forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });
    });
</script>