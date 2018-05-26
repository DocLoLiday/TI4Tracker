//Models
import TechModel from '../../models/techModel';
import PrereqModel from '../../models/prereqModel';
import AbilityModel from '../../models/abilityModel';
//Definitions
import ActionTypes from '../actionTypes';
import TechTypes from '../techTypes';


 var TechArray = [
		new TechModel("AntiMassDeflectors", "AntiMass Deflectors", 
		[
            new AbilityModel("Move into and through asteroid fields", [ActionTypes.Move]),
            new AbilityModel("(-1) to Space Cannon rolls against you", [ActionTypes.Defend])
        ],
        [], 
        TechTypes.Propulsion),
		new TechModel("GravityDrive", "Gravity Drive", 
		[
			new AbilityModel("After activating a system. +1 to the movement of 1 ship during this tactical action", [ActionTypes.Move])
		], 
		[
			new PrereqModel(TechTypes.Propulsion, 1)
		],
		TechTypes.Propulsion),
		new TechModel("FleetLogistics", "Fleet Logistics",
		[
			new AbilityModel("Take two actions per turn instead of 1", [ActionTypes.Attack])
		],
		[
			new PrereqModel(TechTypes.Propulsion, 2)
		],
		TechTypes.Propulsion),
		new TechModel("LightWaveDeflector", "Light/Wave Deflector",
		[
			new AbilityModel("Your ships may move through systems that contain other players' ships", [ActionTypes.Move])
		],
		[
			new PrereqModel(TechTypes.Propulsion, 3)
		],
		TechTypes.Propulsion),
		new TechModel("SarweenTools", "Sarween Tools",
		[
			new AbilityModel("When 1 or more units use Production, reduce total combined cost by 1", [ActionTypes.Produce])
		],
		[],
		TechTypes.Cybernetic),
		new TechModel("GravitonLaserSystem", "Graviton Laser System",
		[
			new AbilityModel("When 1 or more units uses Space Cannon, hits produced must be assigned to non-fighter ships if able", [ActionTypes.Attack])
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 1)
		],
		TechTypes.Cybernetic,
		true),
		new TechModel("TransitDiodes", "Transit Diodes",
		[
			new AbilityModel("At the start of your turn during the action phase, remove up to 4 of your ground forces from the board and place them on 1 or more planets you control", [ActionTypes.Move])
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 2)
		],
		TechTypes.Cybernetic,
		true),
		new TechModel("IntegratedEconomy", "Integrated Economy",
		[
			new AbilityModel("After winning a planet, produce any number of units on that planet (combined cost up to planet's resource value)", [ActionTypes.Attack])
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 3)
		],
		TechTypes.Cybernetic),
		new TechModel("NeuralMotivator", "Neural Motivator",
		[
			new AbilityModel("Draw 2 action cards (instead of 1) during status phase", [ActionTypes.StatusPhase])
		],
		[],
		TechTypes.Biotic),
		new TechModel("DacxiveAnimators", "Dacxive Animators",
		[
			new AbilityModel("After ground combat victory, place 1 infantry from reinforcements on that planet", [ActionTypes.Attack])
		],
		[
			new PrereqModel(TechTypes.Biotic, 1)
		],
		TechTypes.Biotic),
		new TechModel("HyperMetabolism", "Hyper Metabolism",
		[
			new AbilityModel("Gain 3 command tokens (instead of 2) during status phase", [ActionTypes.StatusPhase])
		],
		[
			new PrereqModel(TechTypes.Biotic, 2)
		],
		TechTypes.Biotic),
		new TechModel("X89BacterialWeapon", "X-89 Bacterial Weapon",
		[
			new AbilityModel("ACTION: Ship with Bombard may destroy all infantry on 1 planet in its system", [ActionTypes.Attack])
		],
		[
			new PrereqModel(TechTypes.Biotic, 3)
		],
		TechTypes.Biotic,
		true),
		new TechModel("PlasmaScoring", "Plasma Scoring",
		[
			new AbilityModel("When 1 or more units uses Bombard or Space Cannon, 1 unit may roll +1 die", [ActionTypes.Attack, ActionTypes.Defend])
		],
		[],
		TechTypes.Warfare),
		new TechModel("MagenDefenseGrid", "Magen Defense Grid",
		[
			new AbilityModel("If you have Planetary Shield, opponent cannot roll dice during this round of ground combat", [ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Warfare, 1)
		],
		TechTypes.Warfare,
		true),
		new TechModel("DuraniumArmor", "Duranium Armor",
		[
			new AbilityModel("Each combat round, after hits assigned, repair 1 unit that didn't use Sustain Damage this round", [ActionTypes.Attack, ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Warfare, 2)
		],
		TechTypes.Warfare),
		new TechModel("AssaultCannon", "Assault Cannon",
		[
			new AbilityModel("During the start of space combat, if you have 3 non-fighter ships, opponent must destroy 1 non-fighter ship", [ActionTypes.Attack, ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Warfare, 3)
		],
		TechTypes.Warfare,
		true),
		new TechModel("Fighter2", "Fighter II",
		[
			new AbilityModel("(No transport needed) Count against fleet limit if in excess of capacity", [ActionTypes.Produce]),
		],
		[
			new PrereqModel(TechTypes.Propulsion, 1),
			new PrereqModel(TechTypes.Biotic, 1)
		],
		TechTypes.Unit),
		new TechModel("Carrier2", "Carrier II",
		[],
		[
			new PrereqModel(TechTypes.Propulsion, 2)
		],
		TechTypes.Unit),
		new TechModel("Dreadnaught2", "Dreadnaught II",
		[
			new AbilityModel("Unit cannot be destroyed by Direct Hit", [ActionTypes.Attack, ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Propulsion, 2),
			new PrereqModel(TechTypes.Cybernetic, 1)
		],
		TechTypes.Unit),
		new TechModel("SpaceDock2", "Space Dock II",
		[
			new AbilityModel("4 Production Capacity", [ActionTypes.Produce])
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 2)
		],
		TechTypes.Unit),
		new TechModel("PDS2", "PDS II",
		[],
		[
			new PrereqModel(TechTypes.Cybernetic, 1),
			new PrereqModel(TechTypes.Warfare, 1)
		],
		TechTypes.Unit),
		new TechModel("Infantry2", "Infantry II",
		[
			new AbilityModel("After this unit is destroyed, roll 1 die. Place on planet you control in home system on 6 or greater", [ActionTypes.Attack, ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Biotic, 2)
		],
		TechTypes.Unit),
		new TechModel("Cruiser2", "Cruiser II",
		[],
		[
			new PrereqModel(TechTypes.Biotic, 1),
			new PrereqModel(TechTypes.Cybernetic, 1),
			new PrereqModel(TechTypes.Warfare, 1),
		],
		TechTypes.Unit),
		new TechModel("Destroyer2", "Destroyer II",
		[],
		[
			new PrereqModel(TechTypes.Warfare, 2)
		],
		TechTypes.Unit),
		new TechModel("WarSun", "War Sun",
		[],
		[
			new PrereqModel(TechTypes.Warfare, 3),
			new PrereqModel(TechTypes.Cybernetic, 1),
		],
		TechTypes.Unit),
	//Arborec
		new TechModel("Bioplasmosis", "Bioplasmosis",
		[
			new AbilityModel("End: Remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems", [ActionTypes.StatusPhase])
		],
		[
			new PrereqModel(TechTypes.Biotic, 2)
		],
		TechTypes.Biotic,
		false,
		true),
		new TechModel("LetaniWarrior2", "Letani Warrior II",
		[
			new AbilityModel("After this unit is destroyed, roll 1 die. Place on planet you control in home system on 6 or greater", [ActionTypes.Attack, ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Biotic, 2)
		],
		TechTypes.Unit,
		false,
		true),
	//Letnev
		new TechModel("L4Disruptors", "L4 Disruptors",
		[
			new AbilityModel("During an invasion, units cannot use Space Cannon against your units", [ActionTypes.Attack])
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 1)
		],
		TechTypes.Cybernetic,
		false,
		true),
		new TechModel("NonEuclidianShielding", "Non-Euclidian Shielding",
		[
			new AbilityModel("When 1 of your units uses Sustain Damage, cancel 2 hits instead of 1", [ActionTypes.Attack, ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Warfare, 2)
		],
		TechTypes.Warfare,
		false,
		true),
	//Saar
		new TechModel("ChaosMapping", "Chaos Mapping",
		[
			new AbilityModel("Other players cannot activate asteroid fields that contain your ships", [ActionTypes.Defend]),
			new AbilityModel("During your action phase, you may produce 1 unit in a system that has at least one unit with Production", [ActionTypes.Attack])
		],
		[
			new PrereqModel(TechTypes.Propulsion, 1)
		],
		TechTypes.Propulsion,
		false,
		true),
		new TechModel("FloatingFactory2", "Floating Factory 2",
		[],
		[
			new PrereqModel(TechTypes.Cybernetic, 2)
		],
		TechTypes.Unit,
		false,
		true),
	//Muatt
		new TechModel("MagmusReactor", "Magmus Reactor",
		[
			new AbilityModel("Your ships can move into supernovas", [ActionTypes.Move]),
			new AbilityModel("After 1 or more of your units uses Production in a system that either contains a War Sun or is adjacent to a supernova, gain 1 trade good", [ActionTypes.Produce])
		],
		[
			new PrereqModel(TechTypes.Warfare, 2)
		],
		TechTypes.Warfare,
		false,
		true),
		new TechModel("PrototypeWarSun2", "Prototype War Sun II",
		[],
		[
			new PrereqModel(TechTypes.Warfare, 3),
			new PrereqModel(TechTypes.Cybernetic, 1)
		],
		TechTypes.Unit,
		false,
		true),
	//Hacan
		new TechModel("ProductionBiomes", "Production Biomes",
		[
			new AbilityModel("ACTION: Spend 1 token from your strategy pool to gain 4 trade goods and choose 1 other player to gain 2 trade goods", [ActionTypes.Action]),
		],
		[
			new PrereqModel(TechTypes.Biotic, 2)
		],
		TechTypes.Biotic,
		true,
		true),
		new TechModel("QuantumDataHubNode", "Quantum Datahub Node",
		[
			new AbilityModel("You may spend 1 token from your strategy pool and give another player 3 of your trade goods. If you do, give 1 of your strategy cards to that player and take on of their strategy cards", [ActionTypes.StrategyPhase]),
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 3)
		],
		TechTypes.Cybernetic,
		false,
		true),
	//Creuss
		new TechModel("DimensionalSplicer", "Dimensional Splicer",
		[
			new AbilityModel("At the start of space combat in a system that contains a wormhole and your ship(s), you may produce 1 hit and assign it to one of your opponent's ships", [ActionTypes.Attack, ActionTypes.Defend]),
		],
		[
			new PrereqModel(TechTypes.Warfare, 1)
		],
		TechTypes.Warfare,
		false,
		true),
		new TechModel("WormholeGenerator", "Wormhole Generator",
		[
			new AbilityModel("Start: Place or move a wormhole token into a system with a planet you control or a non-home system that does not contain another player's ships", [ActionTypes.StatusPhase]),
		],
		[
			new PrereqModel(TechTypes.Propulsion, 2)
		],
		TechTypes.Propulsion,
		false,
		true),
	//L1z1x
		new TechModel("InheritanceSystems", "Inheritance Systems",
		[
			new AbilityModel("Spend 2 reesources when you research a technology; ignore all of that technology's prerequisites", [ActionTypes.Tech]),
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 2)
		],
		TechTypes.Cybernetic,
		true,
		true),
		new TechModel("SuperDreadnaught2", "Super-Dreadnaught II",
		[
			new AbilityModel("Unit cannot be destroyed by Direct Hit", [ActionTypes.Attack, ActionTypes.Defend]),
		],
		[
			new PrereqModel(TechTypes.Propulsion, 2),
			new PrereqModel(TechTypes.Cybernetic, 1)
		],
		TechTypes.Unit,
		false,
		true),
	//Mentak
		new TechModel("MirrorComputing", "Mirror Computing",
		[
			new AbilityModel("When you spend trade goods, each good is worth 2 resources or influence instead of 1", [ActionTypes.Produce]),
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 3)
		],
		TechTypes.Cybernetic,
		false,
		true),
		new TechModel("SalvageOperations", "Salvage Operations",
		[
			new AbilityModel("After space combat (win or lose) gain 1 trade good. If you won, you may also produce 1 ship in that system of any ship type that was destroyed during combat", [ActionTypes.Attack, ActionTypes.Defend]),
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 2)
		],
		TechTypes.Cybernetic,
		false,
		true),
	//Naalu
		new TechModel("HybridCrystalFighter", "Hybrid Crystal Fighter II",
		[
			new AbilityModel("(No transport needed) Count against fleet limit if in excess of capacity (1 fighter = 1/2 ship)", [ActionTypes.Produce]),
		],
		[
			new PrereqModel(TechTypes.Biotic, 1),
			new PrereqModel(TechTypes.Propulsion, 1)
		],
		TechTypes.Unit,
		false,
		true),
		new TechModel("Neuroglaive", "Neuroglaive",
		[
			new AbilityModel("After another player activates a system with your ship(s), that player removes 1 token from their fleet pool and returns it to reinforcements", [ActionTypes.Defend]),
		],
		[
			new PrereqModel(TechTypes.Biotic, 3)
		],
		TechTypes.Biotic,
		false,
		true),
	//SardakkNorr
		new TechModel("Exotrireme2", "Exotrireme II",
		[
			new AbilityModel("Unit cannot be destroyed by Direct Hit, After a round of space combat, you may destroy this unit to destroy up to 2 ships in this system", [ActionTypes.Attack, ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 1),
			new PrereqModel(TechTypes.Propulsion, 2)
		],
		TechTypes.Unit,
		false,
		true),
		new TechModel("ValkyrieParticleWeave", "Valkyrie Particle Weave",
		[
			new AbilityModel("After combat rolls during ground combaat, if opponent produced hit(s), you produce 1 additional hit", [ActionTypes.Attack, ActionTypes.Defend]),
		],
		[
			new PrereqModel(TechTypes.Warfare, 2)
		],
		TechTypes.Warfare,
		false,
		true),
	//Sol
		new TechModel("AdvancedCarrier2", "Advanced Carrier II",
		[],
		[
			new PrereqModel(TechTypes.Propulsion, 2)
		],
		TechTypes.Unit,
		false,
		true),
		new TechModel("SpecOps2", "Spec Ops II",
		[
			new AbilityModel("After this unit is destroyed, roll 1 die. Place on planet you control in home system on 5 or greater", [ActionTypes.Attack, ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Biotic, 2)
		],
		TechTypes.Unit,
		false,
		true),
	//JolNar
		new TechModel("EResSiphons", "E-Res Siphons",
		[
			new AbilityModel("After another player activates a system that contains one or more of your ships, gain 4 trade goods", [ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 2)
		],
		TechTypes.Cybernetic,
		false,
		true),
		new TechModel("SpacialConduitCylinder", "Spacial Conduit Cylinder",
		[
			new AbilityModel("After you activate a system that contains your unit(s), that system is now adjacent to all other systems that contain your unit(s)", [ActionTypes.Attack])
		],
		[
			new PrereqModel(TechTypes.Propulsion, 2)
		],
		TechTypes.Propulsion,
		true,
		true),
	//Winnu
		new TechModel("HegemonicTradePolicy", "Hegemonic Trade Policy",
		[
			new AbilityModel("When 1 or more of your units uses Production, swap the resource and influence values of 1 planet you control until the end of your turn", [ActionTypes.Produce])
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 2)
		],
		TechTypes.Cybernetic,
		true,
		true),
		new TechModel("LazaxGateFolding", "Lazax Gate Folding",
		[
			new AbilityModel("During your tactical actions if you do not control Mecatol Rex, treat its systems as if it has both a & b wormholes", [ActionTypes.Move]),
			new AbilityModel("DIf you control Mecatol Rex, place 1 infantry from reinforcements on it", [ActionTypes.Action])
		],
		[
			new PrereqModel(TechTypes.Propulsion, 2)
		],
		TechTypes.Propulsion,
		true,
		true),
	//Xxcha
		new TechModel("InstinctTraining", "Instinct Training",
		[
			new AbilityModel("Spend 1 token from your strategy pool when another player activates an action card; cancel that action card", [ActionTypes.Action, ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Biotic, 1)
		],
		TechTypes.Biotic,
		true,
		true),
		new TechModel("NullificationField", "Nullification Field",
		[
			new AbilityModel("After another player activates a system that contains your ship(s), spend 1 token from your strategy pool, immediately end that players turn", [ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 2)
		],
		TechTypes.Cybernetic,
		true,
		true),
	//Yin
		new TechModel("ImpulseCore", "Impulse Core",
		[
			new AbilityModel("At the start of space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned to a non-fighter ship if able", [ActionTypes.Action, ActionTypes.Defend])
		],
		[
			new PrereqModel(TechTypes.Cybernetic, 2)
		],
		TechTypes.Cybernetic,
		false,
		true),
		new TechModel("YinSpinner", "Yin Spinner",
		[
			new AbilityModel("After 1 or more of your units uses Production, place 1 infantry from your reinforcements on a planet you control in that system", [ActionTypes.Produce])
		],
		[
			new PrereqModel(TechTypes.Biotic, 2)
		],
		TechTypes.Biotic,
		false,
		true),
	//Yssaril
		new TechModel("MageonImplants", "Mageon Implants",
		[
			new AbilityModel("ACTION: Look at another player's hand of action cards. Choose one of those cards and add it to your hand", [ActionTypes.Action])
		],
		[
			new PrereqModel(TechTypes.Biotic, 3)
		],
		TechTypes.Biotic,
		true,
		true),
		new TechModel("TransparasteelPlating", "Transparasteel Plating",
		[
			new AbilityModel("During your turn of the Action phase, players that have passed cannot play action cards", [ActionTypes.Action])
		],
		[
			new PrereqModel(TechTypes.Biotic, 1)
		],
		TechTypes.Biotic,
		false,
		true),
	]

	var TechList = {
		TechArray: TechArray,
		get: function(techName) {
			return TechArray.find(f => f.Name === techName);
		}
	}
module.exports = TechList;