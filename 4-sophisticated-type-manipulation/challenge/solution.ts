function IsNumber(data: unknown): data is number {
  return typeof data === "number";
}

function IsString(data: unknown): data is string {
  return typeof data === "string";
}

function IsArray(data: unknown): data is [] {
  return Array.isArray(data);
}

function IsObject(data: unknown): data is Object {
  return typeof data === "object";
}

function processData(data: unknown): void {
  // Implement type checks and log data appropriately
  if (IsNumber(data)) {
    console.log("The data is a number.");
  } else if (IsString(data)) {
    console.log("The data is a string.");
  } else if (IsArray(data)) {
    console.log("The data is an array.");
  } else if (IsObject(data)) {
    console.log("The data is an object.");
  } else {
    console.log("The data type is not supported.");
  }
}

processData(1);
processData("1");
processData([1, 3, 4]);
processData({});
processData(true);
