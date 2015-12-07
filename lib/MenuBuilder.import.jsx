export class MenuBuilder {
    constructor (definition = {}) {
        this.import(definition);
    }

    add (item) {
        if (item instanceof MenuBuilder) {
            item = item.export();
        }

        if (this.definition.items) {
            this.definition.items.push(item);
        } else {
            this.definition.items = [item];
        }
    }

    export () {
        return this.definition;
    }

    import (definition) {
        this.definition = definition;

        if (this.definition.type === undefined) {
            this.definition.type = 'menu';
        }

        if (this.definition.items === undefined) {
            this.definition.items = [];
        }
    }
}

export default MenuBuilder;
