// =========================================
// LINKS DO BRASIL
// =========================================

const brasil = {

    privacy:
        "https://privacy.com.br/checkout/maah_franjudinha",

    bot:
        "https://t.me/maah_franjuda_bot"

};


// =========================================
// LINKS DOS ESTADOS UNIDOS
// =========================================

const estadosUnidos = {

    privacy:
        "https://privacy.com.br/checkout/maah_franjudinha",

    bot:
        "https://t.me/maahfranjuda_bot"

};


// =========================================
// SELECIONAR IDIOMA / PAÍS
// =========================================

function selectLanguage(country) {

    const languageBox =
        document.getElementById("languageBox");

    const links =
        document.getElementById("links");

    const countryTitle =
        document.getElementById("countryTitle");

    const privacyLink =
        document.getElementById("privacyLink");

    const botLink =
        document.getElementById("botLink");

    const privacyTitle =
        document.getElementById("privacyTitle");

    const privacyDescription =
        document.getElementById("privacyDescription");

    const botTitle =
        document.getElementById("botTitle");

    const botDescription =
        document.getElementById("botDescription");


    // =====================================
    // BRASIL 🇧🇷
    // =====================================

    if (country === "br") {

        privacyLink.href =
            brasil.privacy;

        botLink.href =
            brasil.bot;

        countryTitle.textContent =
            "🇧🇷 Conteúdos para o Brasil";

        privacyTitle.textContent =
            "Meu Privacy";

        privacyDescription.textContent =
            "Acesse meu conteúdo exclusivo";

        botTitle.textContent =
            "Grupo VIP";

        botDescription.textContent =
            "Entre para o meu grupo VIP";

    }


    // =====================================
    // ESTADOS UNIDOS 🇺🇸
    // =====================================

    if (country === "us") {

        privacyLink.href =
            estadosUnidos.privacy;

        botLink.href =
            estadosUnidos.bot;

        countryTitle.textContent =
            "🇺🇸 Exclusive Content";

        privacyTitle.textContent =
            "My Privacy";

        privacyDescription.textContent =
            "Access my exclusive content";

        botTitle.textContent =
            "VIP Group";

        botDescription.textContent =
            "Join my exclusive VIP group";

    }


    // ESCONDE ESCOLHA DE PAÍS

    languageBox.style.display =
        "none";


    // MOSTRA LINKS

    links.style.display =
        "block";

}


// =========================================
// ALTERAR PAÍS
// =========================================

function changeCountry() {

    document.getElementById("links").style.display =
        "none";

    document.getElementById("languageBox").style.display =
        "block";

}