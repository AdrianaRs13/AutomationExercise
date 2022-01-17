import Base from '../Base'

class MenuPage extends Base {
    get top250Movies(){
        return $(`//span[contains(text(),'Top 250 Movies')]`)
    }
    get moviesTitle(){
        return $(`//body[1]/div[2]/nav[1]/div[2]/aside[1]/div[1]/div[2]/div[1]/div[1]/span[1]/div[1]/div[1]/ul[1]/a[3]`)
    }
    async validateMenuDisplayed(){
        const title = this.top250Movies
        await expect(title).toHaveText('Top 250 Movies')
    }
    async clickTop250Movies(){
        await this.moviesTitle.waitForClickable()
        await this.moviesTitle.click()
    }
}
export default new MenuPage()