export function addGym(postId, author, comment) {
    return {
        type: 'ADD_GYM',
        postId,
        author,
        comment
    }
}
