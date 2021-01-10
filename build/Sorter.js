"use strict";
// this class uses a generic bubble sort algorith to do the sorting.
// anything that can provide get length, compare method, and swap method between its elements can be used with this class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // abstract definition means the following variable names for functions and properties will be defined in the future by
    // the class that is extending the abstract class
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            // after each iteration rightmost element will be in the correct position
            // so no need to go over that again
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
