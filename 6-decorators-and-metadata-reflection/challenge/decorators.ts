// Add decorators here
import "reflect-metadata";

export function LogMethod(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`The "${key}" method is called.`);
    originalMethod.apply(this, args);
  };
}

export function Role(role: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata("Role", role, target, key);
  };
}

export function RoleCheck(roleRequired: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const role: string = Reflect.getMetadata("Role", target, key);
      if (role !== roleRequired) {
        console.error(
          `The caller "${role}" is not authorized to call the "${key}" method.`
        );
      } else {
        console.log(
          `The caller "${role}" is authorized to call "${key}" method.`
        );
        originalMethod.apply(this, args);
      }
    };
  };
}
