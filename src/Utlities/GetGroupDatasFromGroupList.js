const getGroupDatasFromGroupList = (groupId, groupsList) => {
  if (groupId && groupsList) {
    let get = false;
    let i = 0;

    while (!get && i < groupsList.length) {
      if (groupsList[i].groupId === groupId) {
        get = groupsList[i];
      } else {
        i++;
      }
    }

    return get;
  }
};

export default getGroupDatasFromGroupList;
