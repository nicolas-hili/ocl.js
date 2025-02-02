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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectExpression = void 0;
var Expression_1 = require("../Expression");
var Utils_1 = require("../../Utils");
/**
 * @oclSpecification
 * The select operation specifies a subset of a collection.
 * A select is an operation on a collection and is specified using the arrow-syntax.
 * This results in a collection that contains all the elements from collection for which the boolean-expression evaluates to true.
 * To find the result of this expression, for each element in collection the expression boolean-expression is evaluated.
 * If this evaluates to true, the element is included in the result collection, otherwise not.
 *
 * @oclExpression select(expr : oclExpression) : Collection
 * @oclExample self.collection->select(item | item.name = "random")
 */
var SelectExpression = /** @class */ (function (_super) {
    __extends(SelectExpression, _super);
    function SelectExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectExpression.prototype.evaluate = function (visitor, localVariables) {
        var _this = this;
        var collection = this.getSource()
            .evaluate(visitor);
        if (collection instanceof Array) {
            return collection.filter(function (c) {
                var variables = {};
                if (_this.getIterators()) {
                    variables[_this.getIterators()[0]] = c;
                }
                else {
                    var variableName = Utils_1.Utils.getVariableName(_this);
                    variables[variableName.getVariable()] = c;
                }
                return _this.getBody()
                    .evaluate(visitor, __assign(__assign({}, localVariables), variables));
            });
        }
        else {
            return [];
        }
    };
    return SelectExpression;
}(Expression_1.IteratorExpression));
exports.SelectExpression = SelectExpression;
//# sourceMappingURL=SelectExpression.js.map