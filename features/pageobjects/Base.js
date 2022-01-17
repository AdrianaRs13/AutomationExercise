class Base {
    async pauseShort(){
        return browser.pause(2000)
    }
    async pauseMedium(){
        return browser.pause(5000)
    }
    async pauseLong(){
        return browser.pause(8000)
    }
}

export default Base