import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"

describe ('Проверка авторизации', function () {
    beforeEach('Начало теста', function (){
        cy.visit ('/')
    })

    afterEach('Конец теста', function() {
        cy.get(result_page.close).should('be.visible');
    })

    it('Верный пароль и верный логин', function() {
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Авторизация прошла успешно');
    })

//describe ('Проверка авторизации, неверный пароль', function () {

    it('Неверный пароль и верный логин', function() {
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type('wrong_password');
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Такого логина или пароля нет');
    })

//describe ('Проверка авторизации, неверный логин', function () {

    it('Верный пароль и неверный логин', function() {
        cy.get(main_page.email).type('wrong@login.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Такого логина или пароля нет');
    })

//describe ('Проверка валидации', function () {

    it('Логин без @', function() {
        cy.get(main_page.email).type('userlogin.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');
    })

//describe ('Проверка кнопки "Забыли пароль?"', function () {

    it('Верный пароль и верный логин', function() {
        cy.get(main_page.fogot_pass_btn).click();
        cy.get(recovery_password_page.email).type(data.login);
        cy.get(recovery_password_page.send_button).click();
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
    })

//describe ('Проверка приведения к нижнему регистру', function () {

    it('Логин приводится к строчным буквам', function() {
        cy.get(main_page.email).type('uSeR@lOgIn.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Авторизация прошла успешно');
    })
})
