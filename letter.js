class Letter {
    constructor(character) {
      this.character = character;
      this.guessed = false;
      this.toString = function () {
        return this.guessed ? this.character : "_";
      };
    }
  }
