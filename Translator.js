class Translator {

    english(word1) {
        if (word1 == "cześć") {
            return "hello";
        } else if (word1 == "do widzenia") {
            return "bye";
        } else {
            return "";
        }

    }
    german(word1) {
        if (word1 == "cześć") {
            return "Hallo"
        } else if (word1 == "do widzenia") {
            return "auf wiedersehen"
        } else {
            return ""
        }
    }
}
const translate = new Translator();

console.log(translate.english("cześć"), "", translate.german("cześć"))