import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img src="images/p7761829.jpg" alt="" className="writeImg" />
      <form className="writeForm">
          <div className="writeformGroup">
            <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus">
            </i>
            </label>
            <input type="file" id="fileInput" name="fileInput"/>
            <input className="writeInput" type="text" name="fileText" id="fileText" placeholder="Title" autoFocus={true} />
          </div>
          <div className="writeformGroup">
              <textarea placeholder="Tell your story" type="text" className="writeInput writeText" ></textarea>
          </div>
          <button className="writeSubmit">
              Publish
          </button>
      </form>
    </div>
  )
}
