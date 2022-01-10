module.exports = {
     get() {
        let now = new Date(),
            onejan = new Date(now.getFullYear(), 0, 1)
        return Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7)-1
    },
    dayToNum(day) {
        // need to use include since days sometimes include whitespace or other random character
        switch (true) {
            case /Montag/.test(day):
                return 1
                break
            case /Dienstag/.test(day):
                return 2
                break
            case /Mittwoch/.test(day):
                return 3
                break
            case /Donnerstag/.test(day):
                return 4
                break
            case /Freitag/.test(day):
                return 5
                break
            case /Samstag/.test(day):
                return 6
                break
            case /Sonntag/.test(day):
                return 7
                break
            default:
                return 1
        }
    }
};