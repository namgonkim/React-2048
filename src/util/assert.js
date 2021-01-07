export const assert = function (condition, message) { // 컨디션 만족 x 에러 throw
    if(!condition) {
        throw new Error(`Assertion Failed: ${message}`);
    }
};