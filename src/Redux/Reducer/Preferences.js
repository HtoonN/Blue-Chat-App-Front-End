import { createSlice } from "@reduxjs/toolkit";

export const preference = createSlice({
  name: "preference",
  initialState: {
    theme: {
      //zinc900
      backgroundColor: "#18181b",
      //gery500
      textColor: "#9ca3af",
    },
    language: {
      english: {
        search: "Search...",
        profileMenu: {
          profile: "Profile",
          blocklist: "Block List",
          waitinglist: "Waiting List",
          logout: "Log Out",
          deleteaccount: "Delete Account",
        },
        appBar: {
          notification: "Notification",
          friendrequest: "Friend Requests",
          profile: "Profile",
        },
        friendlistsidebar: {
          messagelist: "Messages List",
          total: "Total",
          friend: "Friends",
          group: "Groups",
          creategroup: "Create Group",
          grouplist: "Groups List",
        },
        friendbox: {
          nofriendmessage: "You have no friend",
        },
        friendbarMenu: {
          chatfriend: "Chat Friend",
          startmessage: "Start Message",
          unfriend: "UnFriend",
          block: "Block",
        },
        friendList: {
          online: "Online",
          offline: "Offline",
          nofriend: "No Messaged Friend",
        },
        groupListItem: {
          owner: "Owner",
          nogroup: "No Group",
        },
        chatBox: {
          plsSelectUser: "Select a friends or group to Chat!",
        },
        chatHeader: {
          member: "Members",
        },
        friendMenuBox: {
          unfriend: "Unfriend",
          block: "Block",
          deletechat: "Delete Chat",
        },
        groupMenuBox: {
          managemember: "Manage Members",
          editgroup: "Edit Group",
          deletegroup: "Delete Group",
          member: "Members",
          leavegroup: "Leave Group",
        },
        groupMessage: {
          seen: "Seen",
          delete: "Delete",
        },
        message: {
          seen: "Seen",
          delievered: "Delievered",
          send: "Send",
          delete: "Delete",
          nomessage: "There is no message",
        },
        seeMore: {
          thatisall: "That's all",
        },
        typeMessage: {
          typemessage: "Type Message",
        },
        notification: {
          notification: "Notification",
          unread: "Unread",
        },
        friendRequest: {
          nofriendrequest: "No friend request",
          title: "Friend Request",
          accept: "Accept",
          cancel: "Cancel",
          block: "Block",
        },
        searchFriend: {
          searchresult: "Search Result",
          people: "People",
          group: "Groups",
        },
      },
      myanmar: {
        search: "ရှာဖွေရန်...",
        profileMenu: {
          profile: "မိမိအချက်အလက်များ",
          blocklist: "ပိတ်ထားသောသူများ",
          waitinglist: "မိမိမိတ်ဖွဲ့ထားသောစရင်း",
          logout: "အကောင့်မှထွက်ရန်",
          deleteaccount: "အကောင့်အားဖျက်သိမ်းရန်",
        },
        appBar: {
          notification: "သတိပေးချက်များ",
          friendrequest: "မိမိအားမိတ်လာဖွဲ့ထားသောစရင်း",
          profile: "မိမိအချက်အလက်များ",
        },
        friendlistsidebar: {
          messagelist: "စကားပြောထားသောမိတ်ဆွေများ",
          total: "အားလုံးပေါင်း",
          friend: "မိတ်ဆွေများ",
          group: "အဖွဲ့များ",
          creategroup: "အဖွဲ့အသစ်ပြုလုပ်ရန်",
          grouplist: "အဖွဲ့ဝင်ထားသောအဖွဲ့များ",
        },
        friendbox: {
          nofriendmessage: "သင့်တွင်သူငယ်ချင်းမရှိသေးပါ",
        },
        friendbarMenu: {
          chatfriend: "စကားပြောရန်",
          startmessage: "စတင်စကားပြောရန်",
          unfriend: "မိတ်ဆွေအဖြစ်မှပယ်ဖျက်ရန်",
          block: "ပိတ်ပင်တားဆီးရန်",
        },
        friendList: {
          online: "အသုံးပြုနေပါသည်",
          offline: "အသုံးပြုနေခြင်းမရှိပါ",
          nofriend: "စကားပြောထားသောမိတ်ဆွေများမရှိ့ပါ",
        },
        groupListItem: {
          owner: "သင်ပိုင်သောအဖွဲ့",
          nogroup: "အဖွဲ့များမရှိပါ",
        },
        chatBox: {
          plsSelectUser:
            "စကားပြောရန် မိတ်ဆွေသို့မဟုတ်အဖွဲ့တစ်ခုအား ရွေးချယ်နိုင်ပါသည်",
        },
        chatHeader: {
          member: "အဖွဲ့ဝင်များ",
        },
        friendMenuBox: {
          unfriend: "မိတ်ဆွေမဖြစ်မှပယ်ဖျက်ရန်",
          block: "ပိတ်ပင်တားဆီးရန်",
          deletechat: "ပြောစကားများအားလုံးဖျက်ပြစ်ရန်",
        },
        groupMenuBox: {
          managemember: "အဖွဲ့ဝင်များအားစီမံရန်",
          editgroup: "အဖွဲ့အားပြင်ဆင်ရန်",
          deletegroup: "အဖွဲ့အားဖျက်သိမ်းရန်",
          member: "အဖွဲ့ဝင်များ",
          leavegroup: "အဖွဲ့မှထွက်ရန်",
        },
        groupMessage: {
          seen: "မြင်ပြီး",
          delete: "ဖျက်ပြစ်ရန်",
        },
        message: {
          seen: "မြင်ပြီး",
          delievered: "ရောက်ရှိသွားပြီး",
          send: "ပို့ပြီး",
          delete: "ဖျက်ပြစ်ရန်",
          nomessage: "ပြောစကားများမရှိပါ",
        },
        seeMore: {
          thatisall: "အားလုံး",
        },
        typeMessage: {
          typemessage: "စာရိုက်ရန်",
        },
        notification: {
          notification: "သတိပေးချက်များ",
          unread: "မဖတ်ရသေး",
        },
        friendRequest: {
          nofriendrequest: "မိတ်ဆွေဖြစ်ရန်တောင်းဆိုမှုများမရှိပါ",
          title: "မိတ်ဆွေဖြစ်ရန်တောင်းဆိုမှုများ",
          accept: "လက်ခံပါသည်",
          cancel: "လက်မခံပါ",
          block: "ပိတ်ပင်ရန်",
        },
        searchFriend: {
          searchresult: "ရှာဖွေမှုရလဒ်များ",
          people: "လူပုဂ္ဂိုလ်များ",
          group: "အဖွဲ့များ",
        },
      },
    },
    activePreference: {
      language: {},
    },
  },
  reducers: {
    setActiveLanguage: (state, action) => {
      if (action.payload === "burmese") {
        state.activePreference.language = state.language.myanmar;
      } else {
        state.activePreference.language = state.language.myanmar;
      }
    },
  },
});
export const { setActiveLanguage } = preference.actions;
export default preference.reducer;
