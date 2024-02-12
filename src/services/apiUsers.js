import { octokit } from "./octokit";

export async function getUsers() {

  try {
    const response = await octokit.request('GET /users', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28' //Specifying the Github REST API version
        }
      });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUser(username) {
  try {
    const response = await octokit.request('GET /users/{username}', {
        username:username,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28' //Specifying the Github REST API version
        }
      });
    return response.data;
} catch (error) {
    console.log(error);
    throw error;
}
}