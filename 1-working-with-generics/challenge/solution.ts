// Create a type-safe, generic sorting function for an array of objects
// based on a property key of the object provided at runtime.

// The function must maintain type safety for property keys.

// Complete this function
function sortArray<T extends {}, U extends keyof T>(
  list: T[],
  sortKey: U
): T[] {
  return list.sort((a: T, b: T) => (a[sortKey] < b[sortKey] ? -1 : 1));
}

// Test your sorting function with the following array
let tasks = [
  { id: 2, title: "Write Code" },
  { id: 1, title: "Compile" },
];
let sortedTasks = sortArray(tasks, "id");
console.log(sortedTasks);
