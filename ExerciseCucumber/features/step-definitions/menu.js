const { Given, When, Then, } = require('@wdio/cucumber-framework');
import App from '../pageobjects/App'
import MenuPage from '../pageobjects/pages/MenuPage'
import Top250MoviesPage from '../pageobjects/pages/Top250MoviesPage'
import Navbar from '../pageobjects/components/Navbar'

Given(/^I am on the home page$/, async () => {
    await App.openHomePage()
});

When(/^I wait until the Menu Icon is clickable$/, async () => {
    await Navbar.menuButton.waitForClickable()
});

Then(/^I should click on the menu icon$/, async () => {
    await Navbar.clickMenuButton()
});

Then(/^I should validate the menu is displayed$/, async () => {
    await MenuPage.moviesTitle.waitForDisplayed()
});

When(/^I verificate that I can see the Top 250 Movies option$/, async () => {
    await MenuPage.validateMenuDisplayed()
});

Then(/^I should click on the Top 250 Movies option$/, async () => {
    await MenuPage.clickTop250Movies()
});

Then(/^I validate I am on the Top 250 Movies Page$/, async () => {
    await Top250MoviesPage.validateTop250MoviesPage()
});

Then(/^I should validate El padrino is on second place$/, async () => {
    await Top250MoviesPage.validateMoviePlace(2,'El padrino')
});

Then(/^I validate El padrino has a rating of 9.1$/, async () => {
    await Top250MoviesPage.validateMovieRanking(2,'9,1')
});




