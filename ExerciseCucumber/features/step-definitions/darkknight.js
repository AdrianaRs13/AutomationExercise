const { Given, When, Then, } = require('@wdio/cucumber-framework');
import App from '../pageobjects/App'
import Top250MoviesPage from '../pageobjects/pages/Top250MoviesPage'
import DarkKnightPage from '../pageobjects/pages/DarkKnightPage'
import DarkKnightPageTrailer from '../pageobjects/pages/DarkKnightTrailerPage'
import Navbar from '../pageobjects/components/Navbar'
import MenuPage from '../pageobjects/pages/MenuPage'

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

Then(/^I should validate I am on the Top 250 Movies Page$/, async () => {
    await Top250MoviesPage.validateTop250MoviesPage()
});

Then(/^I wait until the movie The Dark Knight is shown in the Page$/, async () => {
    await Top250MoviesPage.scrollUntilMovieShown('Batman: El Caballero de la Noche')
    await Top250MoviesPage.pauseShort()
});

Then(/^I click on the The Dark Knight movie$/, async () => {
    await Top250MoviesPage.clickMovieShown('Batman: El Caballero de la Noche')
});

Then(/^I should validate that the player state is idle$/, async () => {

    try {
        // browser.waitUntil(() =>{
        //     return jwplayer() !== 'undefined'
        // })
        const playerState = await browser.execute(() =>{
            return jwplayer().getState()
        })
        expect(playerState).toEqual('idle')
        //console.log(playerState)     
    } catch (error) {
        console.error(error)
    }
    
    
});

Then(/^I should scroll until see the video$/, async () => {
    await DarkKnightPage.validateVideoDisplayed()
});

When(/^I click on the play button$/, async () => {
    await DarkKnightPage.clickPlayButton()
});

Then(/^I should be on the Dark Knight Trailer Page$/, async () => {
    await DarkKnightPageTrailer.validateVideoShown()
});

Then(/^I should validate that the player state is playing$/, async () => {
    const playerState = await browser.execute(() =>{
        return jwplayer().getState()
    })
    //console.log(playerState)
    expect(playerState).toEqual('playing')
});
