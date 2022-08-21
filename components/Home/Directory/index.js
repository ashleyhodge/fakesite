function Directory() {
  return (
    <div className="grid grid-cols-4 border-black border-2">
      <div className="border-2">
        <h2 className="text-[22px] text-redish ">Fakesite</h2>
        <ul>
          <li>
            About us
          </li>
          <li>
            Press
          </li>
          <li>
            Policies
          </li>
          <li>
            Help
          </li>
        </ul>
      </div>
      <div className="border-2">
        <h2 className="text-[22px] text-redish ">Account</h2>
        <ul>
          <li>
            Edit Profile
          </li>
          <li>
            Friends
          </li>
          <li>
            Social
          </li>
          <li>
            Delete Profile
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Directory;