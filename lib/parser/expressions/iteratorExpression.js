import Expression from './expression';

class IteratorExpression extends Expression {
    constructor(source, iterators, body) {
        super();
        this.source = source;
        this.iterators = iterators;
        this.body = body;
    }

    evaluate(obj) {
        const source = this.source.evaluate(obj);
        if (source instanceof Array) {
            if(!this.iterators || this.iterators.length === 0) {
                return this._evaluateNoIterator(obj);
            } else if (this.iterators.length <= 1) {
                return this._evaluateOneIterator(obj);
            } else if (this.iterators.length === 2) {
                return this._evaluateTwoIterators(obj);
            }
        } else {
            return false;
        }
    }

    _evaluateNoIterator(obj) {
        const source = this.source.evaluate(obj);
        return !source.map(c => this.body.evaluate(obj)).some(r => r === false)
    }

    _evaluateOneIterator(obj) {
        const source = this.source.evaluate(obj);
        return !source
            .map(c => {
                let variables = {};
                if(this.iterators[0]) {
                    variables[this.iterators[0]] = c;
                } else {
                    variables = c;
                }
                return this.body.evaluate(obj, variables);
            })
            .some(r => r === false);
    }

    _evaluateTwoIterators(obj) {
        const source = this.source.evaluate(obj);
        const result = [];

        for (let i = 0; i < source.length; i++) {
            let variables = {};
            variables[this.iterators[0]] = source[i];

            for (let j = i + 1; j < source.length; j++) {
                variables[this.iterators[1]] = source[j];
                result.push(this.body.evaluate(obj, variables));
            }
        }

        return !result.some(r => r === false);
    }
}

export default IteratorExpression;