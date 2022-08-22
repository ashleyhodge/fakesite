// Showing off my tailwind css skills
function Directory() {
  return (
    <div className="grid grid-cols-4 mx-[40px] my-[40px] wrapper font-SourceSans">
      <div className="space-y-3 ">
        <h2 className="text-[22px] text-redish mx-[30px]">Fakesite</h2>
        <ul className="text-blueish text-[22px] ">
          <li className="hover:text-blackish cursor-pointer">
            About us
          </li>
          <li className="hover:text-blackish cursor-pointer">
            Press
          </li>
          <li className="hover:text-blackish cursor-pointer">
            Policies
          </li>
          <li className="hover:text-blackish cursor-pointer">
            Help
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h2 className="text-[22px] text-redish mx-[30px] ">Account</h2>
        <ul className="text-blueish text-[22px]">
          <li className="hover:text-blackish cursor-pointer">
            Edit Profile
          </li>
          <li className="hover:text-blackish cursor-pointer">
            Friends
          </li>
          <li className="hover:text-blackish cursor-pointer">
            Social
          </li>
          <li className="hover:text-blackish cursor-pointer">
            Delete Profile
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Directory;