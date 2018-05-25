class FactionModel {
    constructor(name, abilities, startingTech, factionTech, excludeTech) {
        this.Name = name;
        this.Abilities = abilities;
        this.StartingTech = startingTech;
        this.FactionTech = factionTech;
        this.ExcludeTech = excludeTech;
    }
}

module.exports = FactionModel;