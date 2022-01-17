class App{
    async openHomePage() {
        await browser.url('https://www.imdb.com/')
    }
    async openTop250MoviesPage(){
        await browser.url('https://www.imdb.com/chart/top/?ref_=nv_mv_250')
    }
}
export default new App()
