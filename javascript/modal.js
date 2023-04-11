export function modal() {
    const modalButtons = document.getElementsByClassName("modal-button");
    const modalContainer = document.getElementById("modal-container");
    // const closeModal = document.getElementById("close-modal-X");
    const closeModalButton = document.getElementById("close-modal-button");

    const removeShow = () => {
        modalContainer.classList.remove("show");
        setTimeout(function () {
            modalContainer.style.display = "none";
        }, 210);
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
    };

    Array.from(modalButtons).forEach((modalButton) => {
        modalButton.addEventListener("click", showModal, false);
    });

    // closeModal.addEventListener("click", function () {
        
    //     removeShow();
    // });

    closeModalButton.addEventListener("click", function () {
        console.log("clicked");
        removeShow();
    });

    window.addEventListener("click", function (event) {
        if (event.target == modalContainer) {
            removeShow();
        }
    });

}