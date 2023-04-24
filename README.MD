# Instaclone

Instanclone Backend.

User
[x] Create Account
    1. Check if username or email are already on DB.
    2. Hash password
    3. Save and return the user
[x] See Profile
[x] Login
    1. Find user with args.username
    2. Check password with args.password
    3. Issue a token and send it to the user
[x] Edit Profile
    1. Retrieve the user ID by verifying the token in the context using jwt.verify. 
    2. Hash the new password upon request.
    3. Where the ID is, update the user's profile information.
    4. Passwords are stored as hashed passwords upon request.
    5. To retrieve user information, you can get the user by using the context and the token from the request header.
    6. Protectted Resolver 
        [protectedResolver = (ourResolver) => (root, args, context, info) =>  { 
            [Authentication and authorization checks code] 
            return ourResover(root, args, context, info)
        }]
        ; A protected resolver is typically applied to a resolver that can only be accessed by logged-in users. For example, a protected resolver can be applied to the profile editing feature or payment feature, which can only be accessed when the user is logged in.
        ; By using protected resolvers, you can consolidate common authentication and authorization logic into a single place instead of performing authentication and authorization checks in each individual resolver in the GraphQL schema. This allows for improved code reuse and maintainability, as well as enhanced security
    7. Add bio and avatar
[x] Change Avatar (Image Upload)
[x] Follow User
[x] Unfollow User
[x] See Followers w/ Pagination
[x] See Following w/ Pagination
[x] Computed Fields
[x] Search Users

Photos
[ ] Upload Photo (Parse #)
[ ] See Photo
[ ] See Hashtag
[ ] Search Photos
[ ] Edit Photo
[ ] Like / Unlike Photo
[ ] See Photo Likes
[ ] See Feed
[ ] See Photo Comments
[ ] Delete Photo

Comments
[ ] Comment on Photo
[ ] Delete Comment
[ ] Edit Comment

Refactor
[ ] Mutation Responses

Extras
[ ] S3 Image Upload

DMs
[] See Rooms
[] Send Message (Create Room)
[] See Room
[] Computed Fields
[] See (Read) Message
[] Realtime Messages