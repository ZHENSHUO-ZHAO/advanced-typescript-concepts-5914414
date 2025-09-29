"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMethod = LogMethod;
exports.Role = Role;
exports.RoleCheck = RoleCheck;
// Add decorators here
require("reflect-metadata");
function LogMethod(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`The "${key}" method is called.`);
        originalMethod.apply(this, args);
    };
}
function Role(role) {
    return function (target, key) {
        Reflect.defineMetadata("Role", role, target, key);
    };
}
function RoleCheck(roleRequired) {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const role = Reflect.getMetadata("Role", target, key);
            if (role !== roleRequired) {
                console.error(`The caller "${role}" is not authorized to call the "${key}" method.`);
            }
            else {
                console.log(`The caller "${role}" is authorized to call "${key}" method.`);
                originalMethod.apply(this, args);
            }
        };
    };
}
