
(() => {
    "use strict";

    const products = [
        {
            id: "ps1",
            name: "PlayStation 1",
            description: "Console clássico da Sony.",
            price: 199,
            image: "imagen/ps1.jpg"
        },
        {
            id: "ps2",
            name: "PlayStation 2",
            description: "Um dos consoles mais famosos.",
            price: 450,
            image: "imagen/ps2.jpg"
        },
        {
            id: "snes",
            name: "Super Nintendo",
            description: "Clássico dos anos 90.",
            price: 799,
            image: "imagen/supernintendo.jpg"
        },
        {
            id: "gameboy",
            name: "Game Boy",
            description: "O portátil que fez história.",
            price: 1399,
            image: "imagen/gameboy.jpg"
        },
        {
            id: "arcade",
            name: "Fliperama",
            description: "Clássico para os fãs de jogos retrô.",
            price: 2999,
            image: "imagen/fiplerama.jpg"
        },
        {
            id: "psp",
            name: "PSP",
            description: "O portátil clássico da Sony.",
            price: 599,
            image: "imagen/psp.jpg"
        }
    ];

    const productById = new Map(
        products.map(product => [product.id, product])
    );

    const money = value =>
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value);

    const $ = selector => document.querySelector(selector);

    const searchInput = $("#product-search");
    const clearSearchButton = $("#clear-search");
    const categoryFilter = $("#category-filter");
    const priceFilter = $("#price-filter");
    const sortFilter = $("#sort-filter");
    const productGrid = $("#product-grid");
    const emptyResults = $("#empty-results");
    const resultsCount = $("#results-count");

    const cartPanel = $("#cart-panel");
    const cartOverlay = $("#cart-overlay");
    const cartItemsContainer = $("#cart-items");
    const cartCount = $("#cart-count");
    const cartTotal = $("#cart-total");
    const checkoutButton = $("#checkout-button");

    const toast = $("#toast");
    const menuToggle = $("#menu-toggle");
    const mainNav = $("#main-nav");

    if (
        !searchInput ||
        !categoryFilter ||
        !priceFilter ||
        !sortFilter ||
        !productGrid ||
        !cartPanel ||
        !cartItemsContainer
    ) {
        console.error(
            "Ray Retro: verifique se o HTML contém os IDs necessários para o JavaScript."
        );
        return;
    }

    let cart = loadCart();
    let toastTimeout;

    function loadCart() {
        try {
            const saved = JSON.parse(
                localStorage.getItem("rayretro-cart") || "[]"
            );

            if (!Array.isArray(saved)) {
                return [];
            }

            return saved
                .filter(item => item && productById.has(item.id))
                .map(item => ({
                    id: item.id,
                    quantity: Math.max(
                        1,
                        Math.min(
                            99,
                            Number.parseInt(item.quantity, 10) || 1
                        )
                    )
                }));
        } catch {
            return [];
        }
    }

    function saveCart() {
        try {
            localStorage.setItem(
                "rayretro-cart",
                JSON.stringify(cart)
            );
        } catch {
            showToast("Não foi possível salvar o carrinho neste navegador.");
        }
    }

    function showToast(message) {
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("is-visible");

        window.clearTimeout(toastTimeout);

        toastTimeout = window.setTimeout(() => {
            toast.classList.remove("is-visible");
        }, 2600);
    }

    function applyFilters() {
        const query = searchInput.value
            .trim()
            .toLocaleLowerCase("pt-BR");

        const category = categoryFilter.value;

        const maxPrice =
            priceFilter.value === "todos"
                ? Infinity
                : Number(priceFilter.value);

        const sort = sortFilter.value;

        const cards = Array.from(
            productGrid.querySelectorAll(".card")
        );

        let visibleCards = cards.filter(card => {
            const name = (card.dataset.name || "")
                .toLocaleLowerCase("pt-BR");

            const description = (card.dataset.description || "")
                .toLocaleLowerCase("pt-BR");

            const cardCategory = card.dataset.category;
            const isPortable = card.dataset.portable === "sim";
            const price = Number(card.dataset.price);

            const matchesQuery =
                name.includes(query) ||
                description.includes(query);

            const matchesCategory =
                category === "todos" ||
                cardCategory === category ||
                (category === "portatil" && isPortable);

            return matchesQuery && matchesCategory && price <= maxPrice;
        });

        if (sort === "price-asc") {
            visibleCards.sort(
                (a, b) =>
                    Number(a.dataset.price) -
                    Number(b.dataset.price)
            );
        }

        if (sort === "price-desc") {
            visibleCards.sort(
                (a, b) =>
                    Number(b.dataset.price) -
                    Number(a.dataset.price)
            );
        }

        if (sort === "name-asc") {
            visibleCards.sort((a, b) =>
                (a.dataset.name || "").localeCompare(
                    b.dataset.name || "",
                    "pt-BR"
                )
            );
        }

        cards.forEach(card => {
            card.hidden = !visibleCards.includes(card);
        });

        visibleCards.forEach(card => {
            productGrid.appendChild(card);
        });

        if (resultsCount) {
            resultsCount.textContent =
                `${visibleCards.length} ${
                    visibleCards.length === 1
                        ? "produto encontrado"
                        : "produtos encontrados"
                }`;
        }

        if (emptyResults) {
            emptyResults.hidden = visibleCards.length !== 0;
        }

        productGrid.hidden = visibleCards.length === 0;

        if (clearSearchButton) {
            clearSearchButton.hidden = searchInput.value.length === 0;
        }
    }

    function addToCart(id) {
        const product = productById.get(id);

        if (!product) return;

        const existing = cart.find(item => item.id === id);

        if (existing) {
            if (existing.quantity >= 99) {
                showToast("Limite de 99 unidades por produto.");
                return;
            }

            existing.quantity += 1;
        } else {
            cart.push({
                id,
                quantity: 1
            });
        }

        saveCart();
        renderCart();

        showToast(`${product.name} adicionado ao carrinho.`);
    }

    function changeQuantity(id, amount) {
        const item = cart.find(entry => entry.id === id);

        if (!item) return;

        item.quantity += amount;

        if (item.quantity <= 0) {
            cart = cart.filter(entry => entry.id !== id);
        }

        if (item.quantity > 99) {
            item.quantity = 99;
        }

        saveCart();
        renderCart();
    }

    function removeFromCart(id) {
        const product = productById.get(id);

        cart = cart.filter(item => item.id !== id);

        saveCart();
        renderCart();

        if (product) {
            showToast(`${product.name} removido do carrinho.`);
        }
    }

    function renderCart() {
        const totalQuantity = cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

        const totalPrice = cart.reduce((sum, item) => {
            const product = productById.get(item.id);

            return sum + (product ? product.price * item.quantity : 0);
        }, 0);

        if (cartCount) {
            cartCount.textContent = String(totalQuantity);
        }

        if (cartTotal) {
            cartTotal.textContent = money(totalPrice);
        }

        if (checkoutButton) {
            checkoutButton.disabled = cart.length === 0;
        }

        cartItemsContainer.replaceChildren();

        if (cart.length === 0) {
            const emptyMessage = document.createElement("p");

            emptyMessage.className = "cart-empty";
            emptyMessage.textContent = "Seu carrinho está vazio.";

            cartItemsContainer.appendChild(emptyMessage);
            return;
        }

        cart.forEach(item => {
            const product = productById.get(item.id);

            if (!product) return;

            const row = document.createElement("article");
            row.className = "cart-item";

            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.name;
            image.loading = "lazy";

            image.addEventListener("error", () => {
                image.style.visibility = "hidden";
            }, { once: true });

            const info = document.createElement("div");
            info.className = "cart-item-info";

            const title = document.createElement("h3");
            title.textContent = product.name;

            const price = document.createElement("p");
            price.className = "cart-item-price";
            price.textContent = money(
                product.price * item.quantity
            );

            const controls = document.createElement("div");
            controls.className = "quantity-controls";

            const decrease = document.createElement("button");
            decrease.type = "button";
            decrease.textContent = "−";
            decrease.setAttribute(
                "aria-label",
                `Diminuir quantidade de ${product.name}`
            );

            decrease.addEventListener("click", () => {
                changeQuantity(item.id, -1);
            });

            const quantity = document.createElement("span");
            quantity.textContent = String(item.quantity);
            quantity.setAttribute("aria-label", "Quantidade");

            const increase = document.createElement("button");
            increase.type = "button";
            increase.textContent = "+";
            increase.setAttribute(
                "aria-label",
                `Aumentar quantidade de ${product.name}`
            );

            increase.addEventListener("click", () => {
                changeQuantity(item.id, 1);
            });

            controls.append(decrease, quantity, increase);
            info.append(title, price, controls);

            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "remove-item";
            remove.textContent = "Remover";

            remove.addEventListener("click", () => {
                removeFromCart(item.id);
            });

            row.append(image, info, remove);
            cartItemsContainer.appendChild(row);
        });
    }

    function openCart() {
        if (!cartOverlay) return;

        cartOverlay.hidden = false;
        cartPanel.classList.add("is-open");
        cartPanel.setAttribute("aria-hidden", "false");

        document.body.classList.add("cart-open");

        const closeButton = $("#close-cart");

        if (closeButton) {
            closeButton.focus();
        }
    }

    function closeCart() {
        cartPanel.classList.remove("is-open");
        cartPanel.setAttribute("aria-hidden", "true");

        if (cartOverlay) {
            cartOverlay.hidden = true;
        }

        document.body.classList.remove("cart-open");

        const openButton = $("#open-cart");

        if (openButton) {
            openButton.focus();
        }
    }

    function prepareOrder() {
        if (cart.length === 0) return;

        const lines = cart.map(item => {
            const product = productById.get(item.id);

            return `${item.quantity}x ${product.name} — ${money(
                product.price * item.quantity
            )}`;
        });

        const total = cart.reduce((sum, item) => {
            const product = productById.get(item.id);

            return sum + product.price * item.quantity;
        }, 0);

        const summary = [
            "Pedido Ray Retro",
            ...lines,
            `Total: ${money(total)}`,
            "",
            "Pedido demonstrativo; confirme disponibilidade e condições com a loja."
        ].join("\n");

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(summary)
                .then(() => {
                    showToast("Resumo do pedido copiado!");
                })
                .catch(() => {
                    window.prompt(
                        "Copie o resumo do seu pedido:",
                        summary
                    );
                });
        } else {
            window.prompt(
                "Copie o resumo do seu pedido:",
                summary
            );
        }
    }

    searchInput.addEventListener("input", applyFilters);
    categoryFilter.addEventListener("change", applyFilters);
    priceFilter.addEventListener("change", applyFilters);
    sortFilter.addEventListener("change", applyFilters);

    if (clearSearchButton) {
        clearSearchButton.addEventListener("click", () => {
            searchInput.value = "";
            applyFilters();
            searchInput.focus();
        });
    }

    const resetFiltersButton = $("#reset-filters");

    if (resetFiltersButton) {
        resetFiltersButton.addEventListener("click", () => {
            searchInput.value = "";
            categoryFilter.value = "todos";
            priceFilter.value = "todos";
            sortFilter.value = "default";

            applyFilters();
        });
    }

    productGrid.addEventListener("click", event => {
        const button = event.target.closest("[data-add]");

        if (button) {
            addToCart(button.dataset.add);
        }
    });

    const openCartButton = $("#open-cart");
    const closeCartButton = $("#close-cart");

    if (openCartButton) {
        openCartButton.addEventListener("click", openCart);
    }

    if (closeCartButton) {
        closeCartButton.addEventListener("click", closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeCart);
    }

    if (checkoutButton) {
        checkoutButton.addEventListener("click", prepareOrder);
    }

    document.addEventListener("keydown", event => {
        if (
            event.key === "Escape" &&
            cartPanel.classList.contains("is-open")
        ) {
            closeCart();
        }

        if (
            event.key === "Escape" &&
            mainNav &&
            mainNav.classList.contains("is-open")
        ) {
            mainNav.classList.remove("is-open");

            if (menuToggle) {
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menu");
                menuToggle.focus();
            }
        }
    });

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Fechar menu" : "Abrir menu"
            );
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("is-open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menu");
            });
        });
    }

    const currentYear = $("#current-year");

    if (currentYear) {
        currentYear.textContent = String(new Date().getFullYear());
    }

    applyFilters();
    renderCart();
})();
