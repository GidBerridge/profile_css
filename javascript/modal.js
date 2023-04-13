export function modal() {
    const modalButtons = document.getElementsByClassName("modal-button");
    const modalContainer = document.getElementById("modal-container");
    const closeModalButton = document.getElementById("close-modal-button");

    const removeShow = () => {
        modalContainer.classList.remove("show");
        setTimeout(function () {
            modalContainer.style.display = "none";
        }, 210);
        showButtons();
    }

    const showModal = (event) => {
        event.preventDefault();
        if (modalContainer.style.display == "block") {
            removeShow();
        } else {
            modalContainer.style.display = "block";
            setTimeout(function () {
                modalContainer.classList.add("show");
            }, 20);
        }
        hideButtons();
    };

    const hideButtons = () => {
        const buttons = document.getElementsByClassName("modal-button");
        Array.from(buttons).forEach((button) => {
            button.style.opacity = 0;
        });
    }
    const showButtons = () => {
        const buttons = document.getElementsByClassName("modal-button");
        Array.from(buttons).forEach((button) => {
            button.style.opacity = 1;
        });
    }

    Array.from(modalButtons).forEach((modalButton) => {
        modalButton.addEventListener("click", showModal, false);
    });

    closeModalButton.addEventListener("click", function () {
        removeShow();
    });

    window.addEventListener("click", function (event) {
        if (event.target == modalContainer) {
            removeShow();
        }
    });

}