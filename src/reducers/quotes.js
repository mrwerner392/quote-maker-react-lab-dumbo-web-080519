
export default (state = [], action) => {
  let id;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [
                ...state,
                {
                  content: action.quote.content,
                  author: action.quote.author,
                  id: action.quote.id,
                  votes: action.quote.votes
                }
              ]
    case 'REMOVE_QUOTE':
      id = action.quoteId
      console.log(id);
      return [
        ...state.filter(quote => quote.id !== id)
      ]
    case 'UPVOTE_QUOTE':
      id = action.quoteId
      return [
        ...state.map(quote => {
          if (quote.id === id) {
            return {
              ...quote,
              votes: quote.votes + 1
            }
          } else {
            return quote
          }
        })
      ]
    case 'DOWNVOTE_QUOTE':
      id = action.quoteId
      return [
        ...state.map(quote => {
          if (quote.id === id) {
            return {
              ...quote,
              votes: quote.votes > 0 ? quote.votes - 1 : quote.votes
            }
          } else {
            return quote
          }
        })
      ]
    default:
      return state;
  }

}
