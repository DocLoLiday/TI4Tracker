import ObjectiveTypes from '../definitions/objectiveTypes';

class ObjectiveModel {
    constructor(name, text, type, actionTypes) {
        this.Name = name;
        this.Text = text;
        this.Type = type;
        this.ActionTypes = actionTypes;
        this.Points = type === ObjectiveTypes.Public2 ? 2 : 1;
    }
}

module.exports = ObjectiveModel;