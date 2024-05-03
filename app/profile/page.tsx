"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import styles from "./Profile.module.scss";

export default function Profile() {
  const [user, setUser] = useState({
    profilePicture:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "John Doe",
    email: "john@example.com",
    department: "Computer Science",
    semester: "3rd",
  });

  const [formData, setFormData] = useState({
    name: user.name,
    department: user.department,
    semester: user.semester,
    newPassword: "",
    confirmPassword: "",
    newProfilePicture: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfilePictureChange = (e) => {
    setFormData({ ...formData, newProfilePicture: e.target.files[0] });
  };

  const handleSubmitUserInfo = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      name: formData.name,
      department: formData.department,
      semester: formData.semester,
      profilePicture: formData.newProfilePicture
        ? URL.createObjectURL(formData.newProfilePicture)
        : user.profilePicture,
    });

    setFormData({
      ...formData,
      newPassword: "",
      confirmPassword: "",
      newProfilePicture: null,
    });
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    console.log("Updating password...");
    setFormData({
      ...formData,
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <Navigation />
      <main className={styles.profilePage}>
        <div className={styles.container}>
          <div className={styles.profileInfoContainer}>
            <div className={styles.profileInfo}>
              <div className={styles.profilePictureContainer}>
                {formData.newProfilePicture ? (
                  <img
                    src={URL.createObjectURL(formData.newProfilePicture)}
                    alt="Profile Picture"
                    className={styles.profilePicture}
                  />
                ) : (
                  <img
                    src={user.profilePicture}
                    alt="Profile Picture"
                    className={styles.profilePicture}
                  />
                )}
              </div>
              <div className={styles.userInfo}>
                <h2 className={styles.userName}>{user.name}</h2>
                <p className={styles.userEmail}>{user.email}</p>
                <p className={styles.userDetails}>
                  {user.department}, {user.semester} Semester
                </p>
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <form
              onSubmit={handleSubmitUserInfo}
              className={styles.profileForm}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="semester">Semester</label>
                <input
                  type="text"
                  id="semester"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="profilePicture">Update Image</label>
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
              </div>
              <button type="submit" className={styles.btnPrimary}>
                Update
              </button>
            </form>
            <form
              onSubmit={handleSubmitPassword}
              className={styles.profileForm}
            >
              <div className={styles.formGroup}>
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <button type="submit" className={styles.btnPrimary}>
                Change Password
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
