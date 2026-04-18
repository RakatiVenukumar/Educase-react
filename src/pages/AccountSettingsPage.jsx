import PropTypes from "prop-types";
AccountSettingsPage.propTypes = {};
export default function AccountSettingsPage() {
  // In a real app, this would come from context or API
  const user = {
    name: "John Doe",
    email: "user@example.com",
    avatar: "https://i.pravatar.cc/112?img=47",
    bio: "Welcome to your PopX account! Manage your profile and settings below.",
  };
  return (
    <div className="settings-page">
      <h2 tabIndex={0}>Account Settings</h2>
      <div className="profile-card">
        <div className="avatar-wrapper">
          <img
            src={user.avatar}
            alt={user.name}
            className="avatar-img"
          />
          <div className="avatar-edit-badge" title="Edit profile photo" tabIndex={0} role="button" aria-label="Edit profile photo">
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
          <p tabIndex={0}>{user.name}</p>
          <span tabIndex={0}>{user.email}</span>
        </div>
      </div>
      <p className="settings-text" tabIndex={0}>
        {user.bio}
      </p>
      <hr className="dashed-divider" style={{ marginTop: "24px" }} />
    </div>
  );
}
