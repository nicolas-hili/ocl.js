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
exports.AndExpression = void 0;
var LeftRightBasedExpression_1 = require("../LeftRightBasedExpression");
/**
 * | A     | B     | A and B |
 * | ----- | ----- | ------- |
 * | false | false | false   |
 * | false | true  | false   |
 * | true  | false | false   |
 * | true  | true  | true    |
 *
 * @oclExample false and true
 */
var AndExpression = /** @class */ (function (_super) {
    __extends(AndExpression, _super);
    function AndExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndExpression.prototype.evaluate = function (visitor, localVariables) {
        var _a = this._evaluateLeftRightExpression(visitor, localVariables), left = _a.left, right = _a.right;
        return left && right;
    };
    return AndExpression;
}(LeftRightBasedExpression_1.LeftRightBasedExpression));
exports.AndExpression = AndExpression;
//# sourceMappingURL=AndExpression.js.map