function dezimal2binary(dezimal) {
    var result = "";
    while (dezimal > 0)
    {
        reminder = dezimal % 2
        dezimal = Math.floor(dezimal / 2)

        if (reminder == 1) {
            result = "1" + result
        } else {
            result = "0" + result

        }
    }

    return result;
}