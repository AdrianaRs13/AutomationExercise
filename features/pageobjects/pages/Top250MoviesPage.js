import Base from '../Base'

class Top250MoviesPage extends Base {
    
    get titleMovies(){
        return $(`//h1[contains(text(),'IMDb Top 250 Movies')]`)
    }
    
    async validateTop250MoviesPage(){
        const title = this.titleMovies
        //console.log(title)
        await expect(title).toHaveText('IMDb Top 250 Movies')
    }

    async validateMoviePlace(place,movie){
        const titleMP = $(`//tbody/tr[${place}]/td[2]/a[1]`)
        await expect(titleMP).toHaveText(movie)
    }

    async validateMovieRanking(place, ranking){
        const rankingMP = $(`//tbody/tr[${place}]/td[3]`)
        await expect(rankingMP).toHaveText(ranking)
    }

    async scrollUntilMovieShown(title){
        const titleMovie = $(`//a[contains(text(),'${title}')]`)
        await titleMovie.scrollIntoView()
        this.pauseShort()
        //await expect(titleMovie).scrollIntoView()
    }
    
    async clickMovieShown(title){
        const titleMovie = $(`//a[contains(text(),'${title}')]`)
        await titleMovie.click()
        //await this.pauseMedium()
    }

}
export default new Top250MoviesPage()
