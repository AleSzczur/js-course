class Translator {

    constructor(word1) {
        this.word = word1;
    }

    english() {
        if (this.word == "cześć") {
            return "hello";
        } else if (this.word == "do widzenia") {
            return "bye";
        } else {
            return "";
        }

    }

    german() {
        if (this.word == "cześć") {
            return "Hallo"
        } else if (this.word == "do widzenia") {
            return "Auf wiedersehen"
        }
    }
}
const translate2 = new Translator("do widzenia");

console.log(translate2.english(), " ", translate2.german())
