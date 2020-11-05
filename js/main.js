document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header"),
          menu = document.querySelector(".header__menu"),
          logo = document.querySelector(".header__logo"),
          menuItem1 = document.querySelector(".menu-item1"),
          menuItem2 = document.querySelector(".menu-item2"),
          mainPage = document.querySelector(".main__categories"),
          mainMenu = document.querySelector(".main__menu"),
          menuTitleItem = document.querySelectorAll(".menu__title-item");

    menu.addEventListener("click", function () {
        if (menuItem1.classList.contains("active")) {
            menuItem1.classList.remove("active");
            menuItem2.classList.remove("active");
            header.classList.remove("active");
            logo.classList.remove("active");
        } else {
            menuItem1.classList.add("active");
            menuItem2.classList.add("active");
            header.classList.add("active");
            logo.classList.add("active");
        }
        // if (header.classList.contains("active")) {
            
        //     menuItem1.classList.remove("active");
        //     menuItem2.classList.remove("active");
        // } else {
        //     header.classList.add("active");
        //     logo.classList.add("active");
        //     menuItem1.classList.add("active");
        //     menuItem2.classList.add("active");
        // }
        if (mainPage.classList.contains("active")) {
            mainPage.classList.remove("active");
            mainPage.classList.add("hide");
            mainMenu.classList.remove("hide");
            mainMenu.classList.add("active");
        } else {
            mainPage.classList.remove("hide");
            mainPage.classList.add("active");
            mainMenu.classList.remove("active");
            mainMenu.classList.add("hide");
        }
    });

    for (let i = 0; i < menuTitleItem.length; i++) {
        menuTitleItem[i].addEventListener("click", function () {
            mainMenu.classList.remove("active");
            mainMenu.classList.add("hide");
            header.classList.remove("active");
            logo.classList.remove("active");
            menuItem1.classList.remove("active");
            menuItem2.classList.remove("active");
        });
    }
});