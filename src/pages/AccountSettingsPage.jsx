export default function AccountSettingsPage() {
  return (
    <div className="settings-page">
      <h2>Account Settings</h2>

      <div className="profile-card">
        <div className="avatar-wrapper">
          <img
            src="https://i.pravatar.cc/112?img=47"
            alt="Marry Doe"
            className="avatar-img"
          />
          <div className="avatar-edit-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path
                d="M4 7a2 2 0 0 1 2-2h2l1.2-1.6A2 2 0 0 1 10.8 3h2.4a2 2 0 0 1 1.6.8L16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="profile-info">
          <p>Marry Doe</p>
          <span>Marry@Gmail.Com</span>
        </div>
      </div>

     

      <p className="settings-text">
        Lorem Ipsum Dolor Sit Amet, Consetatur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <hr className="dashed-divider" style={{ marginTop: "24px" }} />
    </div>
  );
}
