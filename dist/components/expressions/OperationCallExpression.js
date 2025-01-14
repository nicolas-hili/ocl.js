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
exports.Operator = exports.OperationCallExpression = void 0;
var LeftRightBasedExpression_1 = require("./LeftRightBasedExpression");
/**
 */
var OperationCallExpression = /** @class */ (function (_super) {
    __extends(OperationCallExpression, _super);
    function OperationCallExpression(operator, left, right) {
        var _this = _super.call(this, left, right) || this;
        _this.operator = operator;
        return _this;
    }
    OperationCallExpression.prototype.evaluate = function (visitor, localVariables) {
        var _a = this._evaluateLeftRightExpression(visitor, localVariables), left = _a.left, right = _a.right;
        // tslint:disable-next-line:switch-default
        switch (this.operator) {
            case Operator.NOT_EQUAL: return left !== right;
            case Operator.EQUAL: return left === right;
            case Operator.LESS_EQUAL_THAN: return left <= right;
            case Operator.GREATER_EQUAL_THAN: return left >= right;
            case Operator.GREATER_THAN: return left > right;
            case Operator.LESS_THAN: return left < right;
        }
    };
    OperationCallExpression.prototype.isOperator = function (operator) {
        return this.operator === operator;
    };
    return OperationCallExpression;
}(LeftRightBasedExpression_1.LeftRightBasedExpression));
exports.OperationCallExpression = OperationCallExpression;
var Operator;
(function (Operator) {
    Operator["NOT_EQUAL"] = "<>";
    Operator["LESS_EQUAL_THAN"] = "<=";
    Operator["GREATER_EQUAL_THAN"] = ">=";
    Operator["GREATER_THAN"] = ">";
    Operator["LESS_THAN"] = "<";
    Operator["EQUAL"] = "=";
})(Operator = exports.Operator || (exports.Operator = {}));
//# sourceMappingURL=OperationCallExpression.js.map