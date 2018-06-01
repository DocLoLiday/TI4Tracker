//Models
import ActionModel from '../../models/actionModel';
//Definitions
import ActionTypes from '../actionTypes';

var ActionArray = [
    new ActionModel("Cripple Defenses", "Action: Choose a planet. Destroy each PDS on that planet", [ActionTypes.Action]),
    new ActionModel("Economic Initiative", "Action: Ready each cultural planet you control", [ActionTypes.Action]),
    new ActionModel("Focused Research", "Action: Spend 4 trade goods to research a technology", [ActionTypes.Tech, ActionTypes.Action]),
    new ActionModel("Frontline Deployment", "Action: Place 3 infantry on a planet you control", [ActionTypes.Action]),
    new ActionModel("Ghost Ship", "Action: Place a destroyer in a non-home system that contains a wormhole and does not contain other players' ships", [ActionTypes.Action]),
    new ActionModel("Industrial Initiative", "Action: Gain 1 trade good for each industrial planet you control", [ActionTypes.Action]),
    new ActionModel("Insubordination", "Action: Remove 1 token from another player's tactic pool", [ActionTypes.Action]),
    new ActionModel("Lucky Shot", "Action: Destroy a dreadnaught, cruiser, or destroyer in a system that contains a planet you control", [ActionTypes.Action]),
    new ActionModel("Mining Initiative", "Action: Gain trade goods equal to the resource value of a planet you control", [ActionTypes.Action]),
    new ActionModel("Plague", "Action: Choose a planet that is controlled by another player. Roll 1 die for each infantry on that planet. For each result of 6 or greater destroy 1 of those units", [ActionTypes.Action]),
    new ActionModel("Reactor Meltdown", "Action: Destroy a spacedock in a non-home system", [ActionTypes.Action]),
    new ActionModel("Repeal Law", "Action: Discard a law from play", [ActionTypes.Action]),
    new ActionModel("Rise of a Messiah", "Action: Place one infantry on each planet you control", [ActionTypes.Action]),
    new ActionModel("Signal Jamming", "Action: Choose a non-home system that contains or is adjacent to one of your ships. Place a command token from another player's reinforcements in that system", [ActionTypes.Action]),
    new ActionModel("Spy", "Action: Another player gives you a random action card from their hand", [ActionTypes.Action]),
    new ActionModel("Tactical Bombardment", "Action: Choose a system that contains one or more of you units that have Bombardment. Exhaust each planet controlled by other players in that system", [ActionTypes.Action]),
    new ActionModel("Unexpected Action", "Action: Remove one of your command tokens from the board", [ActionTypes.Action]),
    new ActionModel("Unstable Planet", "Action: Choose a hazardous planet. Exhaust that planet and destroy 3 infantry on it", [ActionTypes.Action]),
    new ActionModel("Uprising", "Action: Exhaust a non-home planet controlled by another player. Then, gain trade goods equal to its resource value", [ActionTypes.Action]),
    new ActionModel("War Effort", "Action: Place a cruiser in a system that contains your ships", [ActionTypes.Action]),
    new ActionModel("Bunker", "During this invasion apply -4 to the result of each Bombardment roll against planets you control", [ActionTypes.Defend]),
    new ActionModel("Courageous to the End", "After one of your ships is destroyed in space combat roll 2 dice. For each result equal to or great then that ships combat value, your opponent must choose and destroy one of their ships", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Direct Hit", "After another player's ship uses Sustain Damage to cancel a hit produced by your units: Destroy that ship", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Disable", "Your opponent's PDS units lose Planetary Shield and Space Cannon during this invasion", [ActionTypes.Attack]),
    new ActionModel("Emergency Repairs", "At the start or end of a combat round repair all of your units that have Sustain Damage in the active system", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Fighter Prototype", "Your fighters have +2 to combat rolls during the first round of combat", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Fire Team", "Reroll any number of your ground combat dice", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Infiltrate", "When you gain control of a planet replace each PDS and space dock on that planet instead of destroying them", [ActionTypes.Attack]),
    new ActionModel("Intercept", "After your opponent declares a retreat during space combat that retreat is cancelled. (They may retreat in future rounds)", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Maneuvering Jets", "Before you assign hits produced by another player's Space Cannon roll: Cancel 1 hit", [ActionTypes.Attack]),
    new ActionModel("Morale Boost", "At the start of a combat round: Apply +1 to the result of each of your unit's combat rolls during this combat round", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Parley", "After another player commits units to land on a planet you control, return the committed units to the space area", [ActionTypes.Defend]),
    new ActionModel("Salvage", "After you win a space combat your opponent gives you all of his commodities", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Shields Holding", "Before you assign hits to your ships during a space combat: Cancel up to 2 hits", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Skilled Retreat", "At the start of a combat round: Move all of your ships from the active system into an adjacent system that does not contain another player's ships; the space combat ends in a draw. Then, place a command token from your reinforcements in that system", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Sabotage", "When another player plays an action card other than Sabotage: Cancel that action card", [ActionTypes.Attack, ActionTypes.Defend, ActionTypes.Action]),
    new ActionModel("Political Stability", "You do not return your strategy card(s) during this phase and do not choose new strategy cards in the next strategy phase", [ActionTypes.StatusPhase]),
    new ActionModel("Public Disgrace", "When another player chooses a strategy card: That player must choose a different strategy card instead if able", [ActionTypes.StrategyPhase]),
    new ActionModel("Summit", "Gain 2 command tokens", [ActionTypes.StrategyPhase]),
    new ActionModel("Experimental Battlestation", "Choose 1 of your space docks either in or adjacent to the activated system. That space dock uses Space Cannon 5 (x3) against ships in the active system", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Flank Speed", "After you activate a system: Apply +1 to the move value of each of your ships during this tactical action", [ActionTypes.Attack]),
    new ActionModel("In The Silence Of Space", "Choose a system. During this action your ships in that system can move through systems that contain other players' ships", [ActionTypes.Attack]),
    new ActionModel("Lost Star Chart", "During this action, systems that contain alpha and beta wormholes are adjacent to each other", [ActionTypes.Attack, ActionTypes.Defend]),
    new ActionModel("Reparations", "After another player gains control of a planet you control exhaust a planet they control and ready a planet you control", [ActionTypes.Defend]),
    new ActionModel("Upgrade", "Replace a cruiser in the activated system with a dreadnaught", [ActionTypes.Attack, ActionTypes.Defend, ActionTypes.Produce]),
    new ActionModel("Ancient Burial Sites", "Exhaust all of one player's cultural planets", [ActionTypes.AgendaPhase]),
    new ActionModel("Assassinate Representative", "Choose a player. That player cannot vote on this agenda", [ActionTypes.AgendaPhase]),
    new ActionModel("Bribery", "After the speaker votes on an agenda: Spend any number of trade goods. For each trade good spent, cast 1 additional vote for any outcome", [ActionTypes.AgendaPhase]),
    new ActionModel("Confusing Legal Text", "When you are elected as the outcome of an agenda: Choose a player to be the elected player instead", [ActionTypes.AgendaPhase]),
    new ActionModel("Construction Rider", "After an agenda is revealed: You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, place 1 space dock on a planet you control", [ActionTypes.AgendaPhase]),
    new ActionModel("Diplomacy Rider", "After an agenda is revealed: You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, choose 1 system that contains a planet you control. Each other player places a command token from their reinforcements in that system", [ActionTypes.AgendaPhase]),
    new ActionModel("Distinguished Councilor", "After you cast votes on an outcome of an agenda cast 5 additional votes", [ActionTypes.AgendaPhase]),
    new ActionModel("Imperial Rider", "After an agenda is revealed: You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, gain 1 victory point", [ActionTypes.AgendaPhase]),
    new ActionModel("Leadership Rider", "After an agenda is revealed: You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, gain 3 command tokens", [ActionTypes.StrategyPhase]),
    new ActionModel("Politics Rider", " After an agenda is revealed: You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, draw 3 action cards and gain the speaker token", [ActionTypes.StrategyPhase]),
    new ActionModel("Technology Rider", "After an agenda is revealed: You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, research a technology", [ActionTypes.StrategyPhase, ActionTypes.Tech]),
    new ActionModel("Trade Rider", "After an agenda is revealed: You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, gain 5 trade goods", [ActionTypes.StrategyPhase]),
    new ActionModel("Veto", "Discard an agenda that was just revealed and reveal an agenda from the top of the deck. Players vote on this agenda instead", [ActionTypes.StrategyPhase]),
    new ActionModel("Warfare Rider", "After an agenda is revealed: You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, place 1 dreadnought in a system that contains your ships", [ActionTypes.StrategyPhase]),
];
var ActionList = {
    ActionArray: ActionArray,
    get: function(actionName) {
        return ActionArray.find(f => f.Name === actionName);
    }
}

module.exports = ActionList;