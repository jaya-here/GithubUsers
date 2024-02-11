import { Octokit } from "@octokit/rest"



export async function getUsers() {

    const octokit = new Octokit()

    try {
        console.log("here2")

        const response = await octokit.request('GET /users', {
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })

        return response.data

    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function getUser(username) {

    const octokit = new Octokit()

    try {

        const response = await octokit.request('GET /users/{username}', {
            username:username,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })

        return response.data

    } catch (error) {
        console.log(error)
        throw error
    }
}

/*

avatar_url
: 
"https://avatars.githubusercontent.com/u/1?v=4"
events_url
: 
"https://api.github.com/users/mojombo/events{/privacy}"
followers_url
: 
"https://api.github.com/users/mojombo/followers"
following_url
: 
"https://api.github.com/users/mojombo/following{/other_user}"
gists_url
: 
"https://api.github.com/users/mojombo/gists{/gist_id}"
gravatar_id
: 
""
html_url
: 
"https://github.com/mojombo"
id
: 
1
login
: 
"mojombo"
node_id
: 
"MDQ6VXNlcjE="
organizations_url
: 
"https://api.github.com/users/mojombo/orgs"
received_events_url
: 
"https://api.github.com/users/mojombo/received_events"
repos_url
: 
"https://api.github.com/users/mojombo/repos"
site_admin
: 
false
starred_url
: 
"https://api.github.com/users/mojombo/starred{/owner}{/repo}"
subscriptions_url
: 
"https://api.github.com/users/mojombo/subscriptions"
type
: 
"User"
url
: 
"https://api.github.com/users/mojombo"
*/


/*

data
: 
avatar_url
: 
"https://avatars.githubusercontent.com/u/1?v=4"
bio
: 
null
blog
: 
"http://tom.preston-werner.com"
company
: 
"@chatterbugapp, @redwoodjs, @preston-werner-ventures "
created_at
: 
"2007-10-20T05:24:19Z"
email
: 
null
events_url
: 
"https://api.github.com/users/mojombo/events{/privacy}"
followers
: 
23778
followers_url
: 
"https://api.github.com/users/mojombo/followers"
following
: 
11
following_url
: 
"https://api.github.com/users/mojombo/following{/other_user}"
gists_url
: 
"https://api.github.com/users/mojombo/gists{/gist_id}"
gravatar_id
: 
""
hireable
: 
null
html_url
: 
"https://github.com/mojombo"
id
: 
1
location
: 
"San Francisco"
login
: 
"mojombo"
name
: 
"Tom Preston-Werner"
node_id
: 
"MDQ6VXNlcjE="
organizations_url
: 
"https://api.github.com/users/mojombo/orgs"
public_gists
: 
62
public_repos
: 
66
received_events_url
: 
"https://api.github.com/users/mojombo/received_events"
repos_url
: 
"https://api.github.com/users/mojombo/repos"
site_admin
: 
false
starred_url
: 
"https://api.github.com/users/mojombo/starred{/owner}{/repo}"
subscriptions_url
: 
"https://api.github.com/users/mojombo/subscriptions"
twitter_username
: 
"mojombo"
type
: 
"User"
updated_at
: 
"2024-02-08T04:58:15Z"
url
: 
"https://api.github.com/users/mojombo"
*/