//Models
import FactionModel from '../../models/factionModel';
import AbilityModel from '../../models/abilityModel';
//Definitions
import AbilityTypes from '../abilityTypes';
//Collections
import TechList from './techList';

var FactionList = {
    Arborec: new FactionModel("The Arborec", 
    [],
    ["MagenDefenseGrid"],
    ["LetaniWarrior2", "Bioplasmosis"],
    ["Infantry2"]),
    Letnev: new FactionModel("The Barony of Letnev", 
    [],
    ["AntiMassDeflectors", "PlasmaScoring"],
    ["NonEuclidianShielding", "L4Disruptors"],
    []),
    Saar: new FactionModel("The Clan of Saar", 
    [],
    ["AntiMassDeflectors"],
    ["ChaosMapping", "FloatingFactory2"],
    ["SpaceDock2"]),
    Muatt: new FactionModel("The Embers of Muatt", 
    [],
    ["PlasmaScoring"],
    ["PrototypeWarSun2", "MagmusReactor"],
    ["WarSun"]),
    Hacan: new FactionModel("The Emirates of Hacan", 
    [],
    ["AntiMassDeflectors", "SarweenTools"],
    ["QuantumDatahubNode", "ProductionBiomes"],
    []),
    Creuss: new FactionModel("The Ghosts of Creuss", 
    [],
    ["GravityDrive"],
    ["WormholeGenerator", "DimensionalSplicer"],
    []),
    L1z1x: new FactionModel("The L1z1x Mindnet", 
    [],
    ["NeuralMotivator", "PlasmaScoring"],
    ["SuperDreadnaught2", "InheritanceSystems"],
    ["Dreadnaught2"]),
    Mentak: new FactionModel("The Mentak Coalition", 
    [],
    ["SarweenTools", "PlasmaScoring"],
    ["MirrorComputing", "SalvageOperations"],
    []),
    Naalu: new FactionModel("The Naalu Collective", 
    [],
    ["SarweenTools", "NeuralMotivator"],
    ["HybridCrystalFighter2", "Neuroglaive"],
    ["Fighter2"]),
    Nekro: new FactionModel("The Nekro Virus", 
    [],
    ["DacxiveAnimators"],
    [],
    []),
    SardakkNorr: new FactionModel("The Sardakk N'orr", 
    [],
    [],
    ["Exotrireme2", "ValkyrieParticleWeave"],
    ["Dreadnaught2"]),
    Sol: new FactionModel("The Federation of Sol", 
    [],
    ["NeuralMotivator", "AntimasssDeflector"],
    ["SpecOps2", "AdvancedCarrior2"],
    ["Infantry2", "Carrier2"]),
    JolNar: new FactionModel("The Universities of Jol-Nar", 
    [],
    ["NeuralMotivator", "AntiMassDeflectors", "SarweenTools", "PlasmaScoring"],
    ["SpacialConduitCylinder", "EResSiphons"],
    []),
    Winnu: new FactionModel("The Winnu", 
    [],
    [],
    ["LazaxGateFolding", "HegemonicTradePolicy"],
    []),
    Xxcha: new FactionModel("The Xxcha Kingdom", 
    [],
    ["GravitonLaserSystem"],
    ["InstinctTraining", "NullificationField"],
    []),
    Yin: new FactionModel("The Yin Brotherhood", 
    [],
    ["SarweenTools"],
    ["YinSpinner", "ImpulseCore"],
    []),
    Yssaril: new FactionModel("The Yssaril Tribes", 
    [],
    ["NeuralMotivator"],
    ["MageonImplants", "TransparasteelPlating"],
    []),
};

module.exports = FactionList;