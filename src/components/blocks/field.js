import { ProcessSchema } from '../../processSchema.js';

class Field extends ProcessSchema {

    constructor(name, label, schema, description = '', isRequired = false, isOutput = false, isExperimental = false, isDeprecated = false) {
        super(schema);

        this.description = description || '';
        this.isRequired = isRequired || false;
        this.isDeprecated = isDeprecated || false;
        this.isExperimental = isExperimental || false;
    
        // Setting attributes
        this.type = isOutput ? "output" : "input";
    
        // Field name
        this.name = name;
        this.label = label;

        // Edges
        this.edges = [];
    
        // Value
        this.hasValue = false;
        if (this.hasDefaultValue()) {
            this.value = this.defaultValue();
            this.hasValue = true;
            return;
        }
        
        if (this.nullable()) {
            this.value = null;
        }
        else {
            var dataType = this.dataType(true);
            switch(dataType) {
                case 'array':
                    this.value = [];
                    break;
                case 'string':
                    this.value = '';
                    break;
                case 'integer':
                case 'number':
                    this.value = 0;
                    break;
                case 'boolean':
                    this.value = false;
                    break;
                default:
                    this.value = null;
            }
        }
    }

    isDefaultValue() {
        return !this.hasValue || this.hasDefaultValue() && this.defaultValue() == this.getValue(); // Don't do ===, otherwise empty objects are not recognized as the same.
    }
    
    isEditable() {
        return this.isInput() && super.isEditable();
    }

    isOutput() {
        return this.type === 'output';
    }

    isInput() {
        return this.type === 'input';
    }

    addEdge(edge) {
        this.edges.push(edge);
    }

    eraseEdge(edge) {
        for (var k in this.edges) {
            if (this.edges[k] == edge) {
                this.edges.splice(k, 1);
                return true;
            }
        }
        return false;
    }

    getEdgeCount() {
        return this.edges.length;
    }

    getEdges() {
        return this.edges;
    }

    /**
     * Return the (value) HTML rendering
     */
    getValue() {
        return this.value;
    }

    /**
     * Getting the label
     */
    getLabel() {
        return this.label;
    }

    /**
     * Setting the value of the field
     */
    setValue(value) {
        if (this.dataType(true) == 'boolean') {
            value = !!value;
        }

        this.value = value;
        this.hasValue = true;
        return this; // Allow chaining
    }

}

export default Field;