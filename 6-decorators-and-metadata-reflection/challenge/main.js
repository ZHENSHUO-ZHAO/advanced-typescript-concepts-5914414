"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const productManagement_1 = require("./productManagement");
const pm = new productManagement_1.ProductManagement();
pm.createProduct("Laptop", 1200); // Should log and then execute if authorized
pm.deleteProduct("Laptop"); // Should just log the call
