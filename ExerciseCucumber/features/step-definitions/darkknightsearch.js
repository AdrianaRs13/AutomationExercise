const { Given, When, Then, } = require('@wdio/cucumber-framework');

import App from '../pageobjects/App'
import DarkKnightPage from '../pageobjects/pages/DarkKnightPage'
import DarkKnightPageTrailer from '../pageobjects/pages/DarkKnightTrailerPage'
import Navbar from '../pageobjects/components/Navbar'
import IterativeSearch from '../pageobjects/components/IteractiveSearch'

Given(/^I am on the home page$/, async () => {
    await App.openHomePage()
});

When(/^I search on SearchBox the Dark Knight$/, async () => {
   await Navbar.searchValue('Dark Knight')
});

Then(/^I should click on the Dark Knight option$/, async () => {
    await IterativeSearch.clickBatmanIndex()
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
    console.log(playerState)
    expect(playerState).toEqual('playing')
});
