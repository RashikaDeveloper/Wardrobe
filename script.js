document.addEventListener("DOMContentLoaded", () => {
    // Side navbar functionality
    const sidenav = document.querySelector(".side_navbar");
    const sideclosenav = document.querySelector(".side_navbar_close i");
    const menubar = document.querySelector(".menu_bar_icon");

    if (sideclosenav && sidenav) {
        sideclosenav.addEventListener("click", () => {
            sidenav.classList.remove("active");  // Hide the navbar
        });
    }

    if (menubar && sidenav) {
        menubar.addEventListener("click", () => {
            sidenav.classList.add("active");   // Show the navbar
        });
    }

    // New arrival scrolling
    const newarrivalcontainer = document.querySelector(".newarrival");
    const leftbutton = document.querySelector(".arrival_btn_left");
    const rightbutton = document.querySelector(".arrival_btn_right");

    if (newarrivalcontainer && leftbutton && rightbutton) {
        leftbutton.addEventListener("click", () => {
            newarrivalcontainer.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        });
        rightbutton.addEventListener("click", () => {
            newarrivalcontainer.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        });
    }

    // Product search functionality
    const searchinput = document.querySelector(".search");
    const productsection = document.querySelector(".collection_item");
    const productitems = document.querySelectorAll(".collection_list_item");

    if (searchinput) {
        searchinput.addEventListener("input", (event) => {
            const searchValue = event.target.value.toLowerCase();
            let matchfound = false;

            productitems.forEach((item) => {
                const productname = item.querySelector(".collection_name").textContent.toLowerCase();
                if (productname.includes(searchValue)) {
                    item.style.display = "block";
                    matchfound = true;
                } else {
                    item.style.display = "none";
                }
            });

            // Check if any match was found
            let nomatchmessage = document.querySelector(".no_match_message");
            if (!matchfound) {
                if (!nomatchmessage) {
                    nomatchmessage = document.createElement("p");
                    nomatchmessage.classList.add("no_match_message");
                    nomatchmessage.textContent = "Oops, no products found.";
                    productsection.appendChild(nomatchmessage);
                }
            } else if (nomatchmessage) {
                nomatchmessage.remove();
            }
        });
    }
});


