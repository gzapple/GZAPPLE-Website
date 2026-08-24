async function loadFragment(url, target) {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not load ${url}`);
    }

    target.innerHTML = await response.text();

}

async function loadWebsite() {

    const layout = document.querySelector("#site-layout");
    const pieces = document.querySelector("#site-pieces");

    await loadFragment("pages/layout.html", layout);
    await loadFragment("pages/content.html", document.querySelector("#content-sections"));
    await loadFragment("pages/pieces.html", pieces);

    const bioBox = document.querySelector(".bio-box");
    const bioToggle = document.querySelector(".bio-toggle");

    if (bioBox && bioToggle) {

        bioToggle.addEventListener("click", () => {

            bioBox.classList.toggle("expanded");

            if (bioBox.classList.contains("expanded")) {
                bioToggle.textContent = "Read Less";
            } else {
                bioToggle.textContent = "Read More";
            }

        });

    }

}


loadWebsite().catch((error) => {
    console.error(error);
});
