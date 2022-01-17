import Base from '../Base'

class IterativeSearch extends Base {
    get batmanIndex(){
        return $('li[data-suggestion-index="0"] a')
    }
    async clickBatmanIndex(){
        await this.batmanIndex.waitForClickable()
        await this.batmanIndex.click()
    }
}

export default new IterativeSearch()