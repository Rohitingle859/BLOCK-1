

function fetchData() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; 
    setTimeout(() => {
      if (success) {
        resolve("✅ Data fetched successfully!");
      } else {
        reject("❌ Failed to fetch data.");
      }
    }, 1000); 
  });
}


fetchData()
  .then((result) => {
    console.log("Promise resolved with:", result);
  })
  .catch((error) => {
    console.log("Promise rejected with:", error);
  });


async function handleFetch() {
  try {
    const data = await fetchData();
    console.log("Async/Await Result:", data);
  } catch (err) {
    console.log("Async/Await Error:", err);
  }
}
handleFetch();


function getUser(callback) {
  setTimeout(() => {
    console.log("👤 Got user");
    callback({ id: 1 });
  }, 500);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("📝 Got posts for user", userId);
    callback(["Post 1", "Post 2"]);
  }, 500);
}

function getComments(post, callback) {
  setTimeout(() => {
    console.log("💬 Got comments for", post);
    callback(["Nice!", "Great!"]);
  }, 500);
}


getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0], (comments) => {
      console.log("Comments:", comments);
    });
  });
});


function getUserPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1 }), 500);
  });
}
function getPostsPromise(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 500);
  });
}
function getCommentsPromise(post) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Nice!", "Great!"]), 500);
  });
}


getUserPromise()
  .then(user => getPostsPromise(user.id))
  .then(posts => getCommentsPromise(posts[0]))
  .then(comments => console.log("✅ Final Comments with Promises:", comments));


async function getAllData() {
  const user = await getUserPromise();
  const posts = await getPostsPromise(user.id);
  const comments = await getCommentsPromise(posts[0]);
  console.log("✅ Final Comments with async/await:", comments);
}
getAllData();
