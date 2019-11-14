export var Procurements = (function () {
    var isInitialized = false

    var init = function() {
        if(isInitialized) {
            return
        }

        bindUiActions()

        isInitialized = true
    }

    var bindUiActions = function () {}
    
    return {
        init: init
    }
})()