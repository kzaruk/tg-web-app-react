const tg = window.Telegram.WebApp

export const useTelegram =() => {
    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisiable){
            tg.MainButton.hide()
        }else {
            tg.MainButton.show()
        }
    }
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        onClose,
        onToggleButton
    }
}