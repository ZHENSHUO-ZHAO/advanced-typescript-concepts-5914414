import { LogMethod, Role, RoleCheck } from "./decorators";

export class ProductManagement {
  @Role("Admin")
  @RoleCheck("Admin")
  @LogMethod
  createProduct(name: string, price: number) {
    console.log(`Product created: ${name}, Price: ${price}`);
  }

  @Role("Admin")
  @RoleCheck("Admin")
  @LogMethod
  deleteProduct(name: string) {
    console.log(`Product deleted: ${name}`);
  }
}
