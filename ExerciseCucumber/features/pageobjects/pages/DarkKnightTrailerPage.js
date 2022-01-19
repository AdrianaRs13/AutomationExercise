import Base from '../Base'

class DarkKnightPageTrailer extends Base {
    get videoInWindow(){
        return $('#imdb-jw-video-1')
    }
    
    async validateVideoShown(){
        await this.videoInWindow.waitForDisplayed()
        await this.pauseShort()
    }

}
export default new DarkKnightPageTrailer()