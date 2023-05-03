export interface Post
{
    user: {
        id?: string;
        firstName: string;
        lastName: string;
        profilePicture: string;


    },
    content: string;
    media: string[];
    likes: number;
    comments: {
        username: string,
        comment: string,
    }[];

}

export interface FriendSuggestion
{
    name: string;
    profilePicture: string;
    accountType: "Farmer" | "Supplier" | "Seller" | String;
}