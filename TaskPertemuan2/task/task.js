/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
// var users;
const users = [
  { name: 'Bruce Wayne', age:30, major: 'Management' },
  { name: 'Steve Rogers', age:85, major: 'Soldier' },
  { name: 'Tony Stark', age:30, major: 'Computer Science' },
  { name: 'Peter Parker', age:30, major: 'Science' },
  { name: 'Barry Allen', age:30, major: 'Computer Science' }
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
// function all() {}
const all = () => {
  for (let i = 0; i < users.length; i++) {
    console.log(`
      Name: ${users[i].name}
      Age: ${users[i].age}
      Major: ${users[i].major}
    `);
  }
};

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
// function store(user) {}
const store = (user) => {
  users.push(user);
  all();
};

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
// function update(index, user) {}
const update = (index, user) => {
  users[index] = user;
  all();
};

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
// function destroy(index) {}
const destroy = (index) => {
  users.splice(index, 1);
  all();
};

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Robin");
  const newUser = {
    name: "Robin",
    age: 18,
    major: "Army",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Doctor Strange");
  const editedIndex = 1;
  const editedUser = {
    name: "Doctor Strange",
    age: 45,
    major: "Doctor",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Doctor Banner");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
