import { Stats } from "./config";
var adventurer = /** @class */ (function () {
    function adventurer(level, species, name, type, move) {
        this.level = level;
        this.species = species;
        this.name = name;
        this.stats = new Stats();
        this.type = type;
        this.moves = [];
        this.element = "null";
    }
    return adventurer;
}());
export { adventurer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbGF5ZXIvYWR2ZW50dXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWpDO0lBU0Usb0JBQ0UsS0FBYSxFQUNiLE9BQWUsRUFDZixJQUFZLEVBQ1osSUFBWSxFQUNaLElBQVk7UUFFWixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQyJ9