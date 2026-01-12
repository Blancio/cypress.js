import * as data from "../helpers/pokemons_default_data.json"

describe ('Проверка покупки аватара', function () {

    it('Покупка аватара', function() {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('#k_email').type(data.login);
        cy.get('#k_password').type(data.login);
        cy.get('.MuiButton-root').click();
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="shop"] > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').click();
        cy.get('.available > button').first().click();
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type(data.card_number);
        cy.get(':nth-child(1) > .style_1_base_input').type(data.card_date);
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type(data.cvv);
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type(data.user_name);
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.style_1_base_input').type(data.sms_code);
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.payment_status_top').contains('Покупка прошла успешно').should('be.visible');
    })
})

/* 
зайти на сайт
найти поле логин 
ввести правильный логин
найти поле пароль
ввести правильный пароль
нажать войти
зайти в профиль своего тренера
нажать смена аватара
выбрать доступный аватар
нажать купить
ввести номер карты
ввести CVV карты
ввести срок действия карты
ввести имя владельца действия карты
нажать кнопку оплатить
ввести код смс
нажать оплатить
проверить текст сообщения 
*/
