export default function checkUserProfile(userData) {
    return userData.lastName && userData.firstName && userData.description && userData.profilePhoto
}