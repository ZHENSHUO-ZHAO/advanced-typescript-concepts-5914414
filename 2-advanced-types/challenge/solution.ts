type UserType = "Admin" | "Guest" | "Member";

type UserBase = {
  id: number;
  username: string;
};

type User<T extends UserType> = UserBase &
  (T extends "Admin"
    ? { adminPermissions: string[] }
    : T extends "Guest"
    ? { expirationDate: Date }
    : { memberSince: Date });

// Replace the three interfaces with a generic interface that can be used to define the three types of users.
// interface Admin {
//   id: number;
//   username: string;
//   adminPermissions: string[];
// }

// interface Guest {
//   id: number;
//   username: string;
//   expirationDate: Date;
// }

// interface Member {
//   id: number;
//   username: string;
//   memberSince: Date;
// }

// Update the function to accept the new generic user type.
function updateUser<T extends UserType>(user: User<T>) {
  console.log(`Updating user ${user.username}`);
  // Simulate updating user in the database
}

// Update the function calls to use the new generic user type.
const admin: User<"Admin"> = {
  id: 1,
  username: "adminUser",
  adminPermissions: ["manage_system", "modify_users"],
};

const guest: User<"Guest"> = {
  id: 2,
  username: "guestUser",
  expirationDate: new Date(),
};

const member: User<"Member"> = {
  id: 3,
  username: "memberUser",
  memberSince: new Date(),
};

updateUser(admin);
updateUser(guest);
updateUser(member);
