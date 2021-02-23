
const NewPostPage = () => {
  return (
    <div className="container">
      <h2>Create a new Post</h2>
      <form>
        <select name="city-menu" id="city-menu">
          <option value="city">       City       </option>
          <option value="city">City</option>
          <option value="city">City</option>
          <option value="city">City</option>
        </select> <br/>
        <label htmlFor="title">Title</label> <br/>
        <input type="text" id="title" name="title"/> <br/>
        <label htmlFor="body">Body</label> <br/>
        <textarea name="body" id="body" cols="19" rows="5"></textarea>
        <br/>
        <button type="submit" >Submit</button>
      </form>

    </div>
  )
}

export default NewPostPage;