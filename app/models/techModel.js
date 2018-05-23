class TechModel {
    constructor(name, displayName, abilities, prereqs, type, exhaust, faction) {
        this.Name = name;
        this.DisplayName = displayName,
        this.Abilities = abilities;
        this.Prereqs = prereqs;
        this.Type = type;
        this.Exhaust = exhaust;
        this.Faction = faction;
    }
}

module.exports = TechModel;