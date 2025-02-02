"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppendExpression = void 0;
var Expression_1 = require("../Expression");
/**
 * Appends the given element to the given collection and returns the extended collection.
 *
 * @oclExpression append(elem : T) : Collection<T>
 * @oclExample self.collection->append("string")
 */
var AppendExpression = /** @class */ (function (_super) {
    __extends(AppendExpression, _super);
    function AppendExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppendExpression.prototype.evaluate = function (visitor, localVariables) {
        var source = this.getSource()
            .evaluate(visitor, localVariables);
        var body = this.getBody() ? this.getBody()
            .evaluate(visitor, localVariables) : undefined;
        if (Array.isArray(source) && !!body) {
            source.push(body);
        }
        return source;
    };
    return AppendExpression;
}(Expression_1.BodyBasedExpression));
exports.AppendExpression = AppendExpression;
//# sourceMappingURL=AppendExpression.js.map