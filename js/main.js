document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header"),
          menu = document.querySelector(".header__menu"),
          logo = document.querySelector(".header__logo"),
          menuItem1 = document.querySelector(".menu-item1"),
          menuItem2 = document.querySelector(".menu-item2"),
          mainPage = document.querySelector(".main__categories-list"),
          mainMenu = document.querySelector(".main__menu"),
          menuTitleItem = document.querySelectorAll(".menu__title-item"),
          categoryItem = document.querySelectorAll(".category__list-item"),
          categoryPages = document.querySelectorAll(".categories__page"),
          productsPages = document.querySelectorAll(".product__page"),
          categoriesRowItems = document.querySelectorAll(".categories__row-item"),
          productsItem = document.querySelectorAll(".product__item"),
          modalWindow = document.querySelector(".modal__window"),
          modalOpacity = document.querySelector(".modal__opacity"),
          modalWindowImg = document.querySelector(".modal__window-img"),
          modalWindowTitle = document.querySelector(".modal__window-title"),
          modalWindowNewprice = document.querySelector(".window__newprice-price"),
          modalWindowdDuration = document.querySelector(".window__newprice-duration"),
          modalWindowOldprice = document.querySelector(".window__price-oldprice"),
          modalWindowDesc = document.querySelector(".modal__window-desc");
    let activePage, imgBlock, modalImgSrc, modalTitle, modalNewPrice, modalDuration, modalOldPrice, modalDesc;
    menu.addEventListener("click", function () {
        if (!menuItem1.classList.contains("active")) {
            menuItem1.classList.add("active");
            menuItem2.classList.add("active");
            header.classList.add("active");
            logo.classList.add("active");
            mainMenu.classList.remove("hide");
            mainMenu.classList.add("active");
            mainPage.classList.remove("active");
            mainPage.classList.add("hide");
            for (let n = 0; n < categoryPages.length; n++) {
                if (categoryPages[n].classList.contains("active")) {
                    categoryPages[n].classList.remove("active");
                    categoryPages[n].classList.add("hide");
                    activePage = categoryPages[n];
                } 
            }
            for (let m = 0; m < productsPages.length; m++) {
                if (productsPages[m].classList.contains("active")) {
                    productsPages[m].classList.remove("active");
                    productsPages[m].classList.add("hide");
                    activePage = productsPages[m];
                }
            }
        } else {
            menuItem1.classList.remove("active");
            menuItem2.classList.remove("active");
            header.classList.remove("active");
            logo.classList.remove("active");
            mainMenu.classList.remove("active");
            mainMenu.classList.add("hide");
            if (activePage) {
                activePage.classList.add("active");
                activePage.classList.remove("hide");
            } else {
                mainPage.classList.add("active");
                mainPage.classList.remove("hide");
            }
        }
    });

    for (let i = 0; i < menuTitleItem.length; i++) {
        menuTitleItem[i].addEventListener("click", function () {
            mainMenu.classList.remove("active");
            mainMenu.classList.add("hide");
            categoryPages[i].classList.remove("hide");
            categoryPages[i].classList.add("active");
            header.classList.remove("active");
            logo.classList.remove("active");
            menuItem1.classList.remove("active");
            menuItem2.classList.remove("active");
        });
    }
    for (let j = 0; j < categoryItem.length; j++) {
        categoryItem[j].addEventListener("click", function () {
            mainPage.classList.remove("active");
            mainPage.classList.add("hide");
            categoryPages[j].classList.remove("hide");
            categoryPages[j].classList.add("active");
        });
    }
    for (let b = 0; b < categoriesRowItems.length; b++) {
        categoriesRowItems[b].addEventListener("click", function () {
            for (let c = 0; c < categoryPages.length; c++) {
                categoryPages[c].classList.remove("active");
                categoryPages[c].classList.add("hide");
            }
            productsPages[b].classList.remove("hide");
            productsPages[b].classList.add("active");
        });
    }
    for (let k = 0; k < productsItem.length; k++) {
        productsItem[k].addEventListener("click", function () {
            modalWindow.style.top = (window.pageYOffset - 20) + "px";
            document.body.style.overflow = "hidden";
            modalWindow.classList.remove("hide");
            modalWindow.classList.add("active");
            imgBlock = productsItem[k].querySelector(".product__item-img");
            modalImgSrc = imgBlock.children[0].getAttribute("src");
            modalTitle = productsItem[k].querySelector(".product__item-title").textContent;
            modalNewPrice = productsItem[k].querySelector(".newprice__price").textContent;
            if (productsItem[k].children[1].children[0].children[0].children[1]) {
                modalDuration = productsItem[k].children[1].children[0].children[0].children[1].textContent;
                modalOldPrice = productsItem[k].children[1].children[0].children[1].textContent;
            } else {
                modalDuration = "";
                modalOldPrice = "";
            }
            modalDesc = productsItem[k].querySelector(".product__item-descr").textContent;
            modalWindowImg.innerHTML = `<img src=\"${modalImgSrc}\" alt=\"modal-img\">`;
            modalWindowTitle.innerHTML = modalTitle;
            modalWindowNewprice.innerHTML = modalNewPrice;
            if (modalDuration) {
                modalWindowdDuration.innerHTML = modalDuration;
                modalWindowOldprice.innerHTML = modalOldPrice;
            } else {
                modalWindowdDuration.innerHTML = "";
                modalWindowOldprice.innerHTML = "";
            }
            modalWindowDesc.innerHTML = modalDesc;
            modalOpacity.classList.remove("hide");
            modalOpacity.classList.add("active");
        });
    }
    modalOpacity.addEventListener("click", function () {
        document.body.style.overflow = "";
        modalWindow.classList.remove("active");
        modalWindow.classList.add("hide");
        modalOpacity.classList.remove("active");
        modalOpacity.classList.add("hide");
    });
});