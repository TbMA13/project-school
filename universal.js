window.onload = function () {

    let headerHeight = document.getElementById('header').offsetHeight;
    const marginTop = 50;
    document.getElementsByClassName('article')[0].style.marginTop = (headerHeight + marginTop + "px");
    document.getElementsByClassName('nav-menu-container')[0].innerHTML += '<img id="closeButton" class="iconJS open_close_icon" src="/test/icons8-удалить-50.png">
    <div class="nav-menu-block">
        <a class="nav-menu-link" href="">Автобусы. Подвоз детей</a>
        <a class="nav-menu-link" href="">Адаптированные основные общеобразовательные программы на 2020-2021
            учебный год</a>
        <a class="nav-menu-link" href="">Аннотации к рабочим программам 2020-2021</a>
        <a class="nav-menu-link" href="">Архив</a>
        <a class="nav-menu-link" href="">Аттестация ГИА, ОГЭ 2020</a>
        <a class="nav-menu-link" href="">Безопасность</a>
        <a class="nav-menu-link" href="">Бессмертный полк</a>
        <a class="nav-menu-link" href="">Воспитательная работа</a>
        <a class="nav-menu-link" href="">Всероссийская олимпиада школьников</a>
        <a class="nav-menu-link" href="">Горячая линия</a>
        <a class="nav-menu-link" href="">Дистанционное обучение</a>
        <a class="nav-menu-link" href="">Документы по ведению сайта</a>
        <a class="nav-menu-link" href="">Дополнительное образование</a>
        <a class="nav-menu-link" href="">Информация для родителей</a>
        <a class="nav-menu-link" href="">Информация для учащихся</a>
        <a class="nav-menu-link" href="">Информация для учителей</a>
        <a class="nav-menu-link" href="">Информация по ФГОС</a>
        <a class="nav-menu-link" href="">История школы</a>
        <a class="nav-menu-link" href="">Карта сайта</a>
        <a class="nav-menu-link" href="">Клуб "Импульс"</a>
    </div>
    <div class="nav-menu-block">
        <a class="nav-menu-link" href="">Методическая работа</a>
        <a class="nav-menu-link" href="">Независимая оценка качества образования</a>
        <a class="nav-menu-link" href="/pages/news/news.html">Новости</a>
        <a class="nav-menu-link" href="">Обратная связь, контакты</a>
        <a class="nav-menu-link" href="">Обучение лиц с ОВЗ и инвалидов</a>
        <a class="nav-menu-link" href="">Основные общеобразовательные программы на 2020-2021 учебный год</a>
        <a class="nav-menu-link" href="">Отчет о самообследовании</a>
        <a class="nav-menu-link" href="">Охрана здоровья обучающихся</a>
        <a class="nav-menu-link" href="">Персональные данные</a>
        <a class="nav-menu-link" href="">Пожарная безопасность</a>
        <a class="nav-menu-link" href="">Портал персонифицированного дополнительного образования области</a>
        <a class="nav-menu-link" href="">Прием в 1 и 10 классы</a>
        <a class="nav-menu-link" href="">Прием детей в школу</a>
        <a class="nav-menu-link" href="">Профилактика коррупции</a>
        <a class="nav-menu-link" href="">Сведения об образовательной организации</a>
        <a class="nav-menu-link" href="/pages/tochka_rosta/tochka-rosta.html">Точка Роста</a>
        <a class="nav-menu-link" href="">Управляющий Совет школы</a>
        <a class="nav-menu-link" href="">Школьная служба медиации "Контакт"</a>
        <a class="nav-menu-link" href="">Электронный журнал</a>
    </div>';



    openButton.onclick = openNavMenu;
    closeButton.onclick = closeNavMenu;

    document.getElementById('invalid_image').onclick = invalid;
}