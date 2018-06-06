import { Expression } from "./Expression";

export class DeriveExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    visit(visitor) {
        return visitor.visitDeriveExpression(this);
    }
}