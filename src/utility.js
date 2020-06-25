module.exports = {
    isStringValid(value) {
        if (value.trim().length === 0) {
            return false;
        }
        let stringRegex = '^[A-Za-z]+$'
        let regex = new RegExp(stringRegex);
        return regex.test(value);
    },
    isEmailValid(value) {
        if (value.trim().length === 0) {
            return false;
        }
        let stringRegex = '^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$'
        let regex = new RegExp(stringRegex);
        return regex.test(value);
    },
    isDataValid(value) {
        let dateRegex = '^(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).{4}$'
        let regex = new RegExp(dateRegex);
        return regex.test(value);
    },

    getFormateDate(date) {
      const  months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

        let newDate = new Date(date);
        let today = new Date();
        if (newDate.getFullYear() === today.getFullYear() && newDate.getMonth() === today.getMonth()) {
            if (newDate.getDate() === today.getDate()) {
                return 'today, ' + newDate.getHours() + ':' + newDate.getMinutes();
            }
            else if (newDate.getDate() === today.getDate() + 1) {
                return 'tomorrow, ' + newDate.getHours() + ':' + newDate.getMinutes();
            } else {
                return newDate.getDate() + ' ' + months[newDate.getMonth()] + ', ' + newDate.getHours() + ':' + newDate.getMinutes();

            }
        } else {
            return newDate.getDate() + ' ' + months[newDate.getMonth()] + ', ' + newDate.getHours() + ':' + newDate.getMinutes();
        }
    }
}