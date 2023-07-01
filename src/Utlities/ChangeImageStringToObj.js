const changeImageStringToObj = (imgStr) => {
  let profileimage = JSON.parse(imgStr);
  profileimage.public_id = profileimage.public_id.toString().replace("/", "_");
  return profileimage;
};

module.exports = changeImageStringToObj;
