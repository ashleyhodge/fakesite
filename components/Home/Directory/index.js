// Showing off my tailwind css skills
function Directory() {
  return (
    <div className="grid grid-cols-4 mx-[40px] my-[40px] wrapper">
      <div className="space-y-3">
        <h2 className="text-[22px] text-redish mx-[30px]">Fakesite</h2>
        <ul className="text-blueish text-[22px]">
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
      <div className="space-y-3">
        <h2 className="text-[22px] text-redish mx-[30px] ">Account</h2>
        <ul className="text-blueish text-[22px]">
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