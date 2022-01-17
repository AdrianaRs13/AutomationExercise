
import Base from '../Base'

class DarkKnightPage extends Base {
    get videoInWindow(){
        return $(`//body/div[@id='__next']/main[1]/div[1]/section[1]/section[1]/div[3]/section[1]/section[1]/div[3]/div[1]/div[1]/div[2]/div[2]/a[1]`)
    }
    
    get playButton(){
        return $('#iconContext-play-circle-outline-large-inline')
    }
    
    async validateVideoDisplayed(){
        const videoW = this.videoInWindow
        await videoW.scrollIntoView()
        await this.pauseShort()
    }

    async clickPlayButton(){
        await this.playButton.waitForClickable()
        await this.playButton.click()
    }

}
export default new DarkKnightPage()