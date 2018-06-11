import { SourceBasedExpression } from '../Expression';
import { OclExecutionContext } from '../../OclExecutionContext';

/**
 * Tries to convert a string to a number.
 *
 * @oclExpression toInteger() : Number
 * @oclExample "3.414"->toInteger()
 */
export class ToIntegerExpression extends SourceBasedExpression {
    evaluate(visitor: OclExecutionContext): any {
        const source = this.getSource()
            .evaluate(visitor);

        return Number.parseInt(source);
    }
}
