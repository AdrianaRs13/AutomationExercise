import Base from '../Base'

class Navbar extends Base {
    get menuButton(){
        return $('#imdbHeader-navDrawerOpen--desktop')
    }
    get searchSection(){
        return $('#suggestion-search')
    }
    
    async clickMenuButton(){
        await this.menuButton.click()
    }
    async searchValue(movie){
        await this.searchSection.waitForDisplayed()
        await this.searchSection.setValue(movie)
    }
}

export default new Navbar()