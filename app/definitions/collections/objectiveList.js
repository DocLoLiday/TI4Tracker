//Models
import ObjectiveModel from '../../models/objectiveModel';
//Definitions
import ObjectiveTypes from '../objectiveTypes';
import ActionTypes from '../actionTypes';

var ObjectiveArray = [
    new ObjectiveModel("Erect A Monument", "Spend 8 resources", ObjectiveTypes.Public1),
    new ObjectiveModel("Sway The Council", "Spend 8 influence", ObjectiveTypes.Public1),
    new ObjectiveModel("Found Research Outposts", "Control 3 planets that have technology specialties", ObjectiveTypes.Public1),
    new ObjectiveModel("Negotiate Trade Routes", "Spend 5 trade goods", ObjectiveTypes.Public1),
    new ObjectiveModel("Intimidate Council", "Have 1 or more ships in 2 systems that are adjacent to Mecatol Rex's System", ObjectiveTypes.Public1),
    new ObjectiveModel("Expand Borders", "Control 6 planets in non-home systems", ObjectiveTypes.Public1),
    new ObjectiveModel("Diversify Research", "Own 2 technologies in each of 2 colors", ObjectiveTypes.Public1),
    new ObjectiveModel("Corner The Market", "Control 4 planets that each have the same planet trait", ObjectiveTypes.Public1),
    new ObjectiveModel("Develop Weaponry", "Own 2 unit upgrade technologies", ObjectiveTypes.Public1),
    new ObjectiveModel("Lead From The Front", "Spend a total of 3 tokens from your tactic and/or strategy pools", ObjectiveTypes.Public1),
    new ObjectiveModel("Manipulate Galactic Law", "Spend 16 influence", ObjectiveTypes.Public2),
    new ObjectiveModel("Galvanize The People", "Spend a total of 6 tokens from your tactic and/or strategy pools", ObjectiveTypes.Public2),
    new ObjectiveModel("Revolutionize Warfare", "Own 3 unit upgrade technologies", ObjectiveTypes.Public2),
    new ObjectiveModel("Unify The Colonies", "Control 6 planets that each have the same planet trait", ObjectiveTypes.Public2),
    new ObjectiveModel("Centralize Galactic Trade", "Spend 10 trade goods", ObjectiveTypes.Public2),
    new ObjectiveModel("Form Galactic Brain Trust", "Control 5 planets that have technology specialties", ObjectiveTypes.Public2),
    new ObjectiveModel("Conquer The Weak", "Control 1 planet that is in another player's home system", ObjectiveTypes.Public2),
    new ObjectiveModel("Subdue The Galaxy", "Control 11 planets in non-home systems", ObjectiveTypes.Public2),
    new ObjectiveModel("Found A Golden Age", "Spend 16 resources", ObjectiveTypes.Public2),
    new ObjectiveModel("Master The Sciences", "Own 2 technologies in each of 4 colors", ObjectiveTypes.Public2),
    new ObjectiveModel("Unveil Flagship", "Action Phase: Win a space combat in a system that contains your flagship. You cannot score this objective if your flagship is destroyed in combat", ObjectiveTypes.Secret, [ActionTypes.Attack, ActionTypes.Defend]),
    new ObjectiveModel("Turn Their Fleets To Dust", "Action Phase: Use Space Cannon to destroy the last of a player's ships in a system", ObjectiveTypes.Secret, [ActionTypes.Attack, ActionTypes.Defend]),
    new ObjectiveModel("Form A Spy Network", "Discard 5 action cards", ObjectiveTypes.Secret),
    new ObjectiveModel("Become The Gatekeeper", "Have 1 or more ships in a system that contains an alpha wormhole and 1 or more ships in a system that contains a beta wormhole", ObjectiveTypes.Secret),
    new ObjectiveModel("Gather A Mighty Fleet", "Have 5 dreadnaughts on the game board", ObjectiveTypes.Secret),
    new ObjectiveModel("Fuel The War Machine", "Have 3 space docks on the game board", ObjectiveTypes.Secret),
    new ObjectiveModel("Master The Laws Of Physics", "Own 4 technologies of the same color", ObjectiveTypes.Secret),
    new ObjectiveModel("Learn The Secrets Of The Cosmos", "Have 1 or more ships in 3 systems that are each adjacent to an anomaly", ObjectiveTypes.Secret),
    new ObjectiveModel("Control The Region", "Have 1 or more ships in 6 systems", ObjectiveTypes.Secret),
    new ObjectiveModel("Establish A Perimeter", "Have 4 PDS units on the game board", ObjectiveTypes.Secret),
    new ObjectiveModel("Threaten Enemies", "Have 1 or more ships in a system that is adjacent to another player's home system", ObjectiveTypes.Secret),
    new ObjectiveModel("Mine Rare Metals", "Control 4 hazardous planets", ObjectiveTypes.Secret),
    new ObjectiveModel("Spark A Rebellion", "Action Phase: Win a combat against a player who has the most victory points", ObjectiveTypes.Secret, [ActionTypes.Attack, ActionTypes.Defend]),
    new ObjectiveModel("Monopolize Production", "Control 4 industrial planets", ObjectiveTypes.Secret),
    new ObjectiveModel("Adapt New Strategies", "Own 2 faction technologies \"Valefar Assimilator\" technologies do not count toward this objective", ObjectiveTypes.Secret),
    new ObjectiveModel("Occupy The Seat Of The Empire", "Control Mecatol Rex and have 3 or more ships in its system", ObjectiveTypes.Secret),
    new ObjectiveModel("Make An Example Of Their World", "Actin Phase: Use Bombardment to destroy the last of a player's ground forces on a planet", ObjectiveTypes.Secret, [ActionTypes.Attack, ActionTypes.Defend]),
    new ObjectiveModel("Cut Supply Lines", "Have 1 or more ships in the same system as another player's space dock", ObjectiveTypes.Secret),
    new ObjectiveModel("Destroy Their Greatest Ship", "Action Phase: Destroy another player's war sun or flagship", ObjectiveTypes.Secret, [ActionTypes.Attack, ActionTypes.Defend]),
    new ObjectiveModel("Forge An Alliance", "Control 4 cultural planets", ObjectiveTypes.Secret),
];
var ObjectiveList = {
    ObjectiveArray: ObjectiveArray,
    get: function(objName) {
        return ObjectiveArray.find(f => f.Name === objName);
    }
}

module.exports = ObjectiveList;