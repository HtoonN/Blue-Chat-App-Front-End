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

          grouptext: {
            add: "Add",
            accept: "Accept",
            cancel: "Cancel",
            cancelrequest: "Cancel Request",
            block: "Block",
            leave: "Leave",
            manage: "Manage",
          },
          peopletext: {
            add: "Add",
            accept: "Accept",
            cancel: "Cancel",
            block: "Block",
            cancelrequest: "Cancel Request",
            unfriend: "Unfriend",
          },
        },
        profile: {
          title: "Profile",
          username: "Username",
          password: "Password",
          changepassword: "Change Password",
          cancel: "Cancel",
          update: "Update",
          email: "Email",
          restorephoto: "Restore Photo",
          removeimage: "Remove Image",
          removeselected: "Remove Selected",
          changePassword: {
            title: "Change Password",
            oldpassword: "Old Password",
            newpassword: "New Password",
            renewpassword: "Re-new Passwore",
            btn: {
              cancel: "Cancel",
              changepassword: "Change Password",
            },
            alert: {
              title: "Change Password",
              error: {
                requirefill: {
                  text: "Please fill all of three fields",
                },
                passworddonotmatch: {
                  text: "Password don't match",
                },
              },
              success: {
                text: "Password changed",
              },
            },
          },
        },
        blockList: {
          title: "Block List",
          person: "Person",
          cancel: "Cancel",
          noblockuser: "No Block Users",
        },
        changeLanguage: "Change Language",
        changeLanguageModel: {
          header: "Change Language",
          selectedLanguage: "Selected Language",
          btn: {
            ok: "Ok",
            cancel: "Cancel",
          },
        },
        waitingList: {
          title: "Waiting Accept",
          friend: {
            title: "People",
            cancel: "Cancel",
            block: "Block",
          },
          group: {
            title: "Groups",
            cancel: "Cancel",
          },
          nowaitingaccept: "No waiting accept",
        },
        logout: {
          header: "Log out",
          body: "Are you sure to log out",
        },
        confirmationAlert: {
          ok: "Ok",
          cancel: "Cancel",
        },
        accountdeactivation: {
          header: "Delete Account",
          body: "Permentally delete your account!, can't restore it",
        },
        friendmenuboxandFribaritem: {
          unfriend: {
            header: "Unfriend",
            body: "Are you sure to UNFRIEDN this user!",
          },
          block: {
            header: "Block",
            body: "Are you sure to BLOCK this user!",
          },
          deletechat: {
            header: "Delete Chat",
            body: "Are you sure to DELETE ALL chat!",
          },
        },
        groupMenuBoxdetail: {
          managemember: {
            title: "Group",
            member: {
              header: "Member",
              admin: "Admin",
              member: "Member",
            },
            accept: {
              header: "Accept",
              accept: "Accept",
              reject: "Reject",
            },
            add: "Add",
          },
          editgroup: {
            title: "Edit Group",
            name: "Name",
            type: "Type",
            cancel: "Cancel",
            update: "Update",
            restorephoto: "Restore Photo",
            removeimage: "Remove Image",
            removeselected: "Remove Selected",
            alert: {
              groupupdatesuccessfully: "Group update successfully!",
              invaliddata: {
                body: "Check your data again",
                title: "Invalid Data",
              },
              noupdatedata: {
                title: "Updage profile",
                body: "No update data",
              },
              nodata: {
                title: "Update profile",
                body: "Please fill the data you want to update",
              },
            },
          },
          deletegroup: {
            header: "Delete Group",
            body: "Are you sure to DELETE this gorup",
          },
        },
        createGroup: {
          title: "Create Group",
          name: "Group Name",
          type: "Group Type",
          creategroupbutton: "Creage Group",
          cancelbutton: "Cancel",
        },
        leaveGroup: {
          leave: "Leave",
          title: "Leave Group",
          body: "You can request again",
        },
        memberList: {
          title: "Members",
          total: "Total",
          message: "Member List",
          admin: "Admin",
          member: "Member",
        },
        sendingFile: {
          file: "File",
          sending: "Sending...",
          waiting: "Waiting...",
          message: "Message",
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
          delievered: "ရောက်ရှိ",
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
          grouptext: {
            add: "အဖွဲ့ဝင်အဖြစ်‌တောင်းဆိုရန်",
            accept: "လက်ခံရန်",
            cancel: "ပယ်ဖျက်ရန်",
            cancelrequest: "ပယ်ဖျက်ရန်",
            block: "ပိတ်ပင်ရန်",
            leave: "အဖွဲ့ဝင်အဖြစ်မှထွက်ရန်",
            manage: "စီမံခန့်ခွဲရန်",
          },
          peopletext: {
            add: "မိတ်ဆွေဖွဲ့ရန်",
            accept: "လက်ခံရန်",
            cancel: "လက်မခံပါ",
            block: "ပိတ်ပင်ရန်",
            cancelrequest: "တောင်းဆိုမှုအားပယ်ဖျက်ရန်",
            unfriend: "မိတ်ဆွေအဖြစ်မှပယ်ဖျက်ရန်",
          },
        },
        profile: {
          title: "ကိုယ်ရေးအချက်အလက်များ",
          username: "အသုံးပြုထားသောနာမည်",
          password: "လှို့ဝှက်စကားလုံး",
          changepassword: "လှို့ဝှက်စကားလုံးပြောင်းလဲရန်",
          cancel: "ထွက်ရန်",
          update: "ပြင်ဆင်ရန်",
          email: "စာပို့ရန်လိဒ်စာ",
          restorephoto: "နဂိုပုံအားပြန်လည်ထားရိုရန်",
          removeimage: "ဓါတ်ပုံအားဖျက်ထုတ်ရန်",
          removeselected: "ရွေးချယ်ထားသောပုံအားပယ်ဖျက်ရန်",
          changePassword: {
            title: "စကာဝှတ်ပြောင်းရန်",
            oldpassword: "အသုံးပြုနေသောစကာဝှတ်",
            newpassword: "ပြောင်းလဲလိုသောစကာဝှတ်",
            renewpassword: "ပြောင်းလဲလိုသောစကာဝှတ်အားပြန်လည်ရိုက်နှိပ်ပါ",
            btn: {
              cancel: "ပယ်ဖျက်ရန်",
              changepassword: "စကားဝှတ်ပြောင်းလဲရန်",
            },
            alert: {
              title: "စကာဝှတ်ပြောင်းရန်",
              error: {
                requirefill: {
                  text: "လိုအပ်သည်များကိုအားလုံးဖြည့်ရန်",
                },
                passworddonotmatch: {
                  text: "စကားဝှတ်များတူညီမနေပါ",
                },
              },
              success: {
                text: "စကားဝှတ်အားပြောင်းလဲပြီးပါပြီး",
              },
            },
          },
        },
        blockList: {
          title: "ပိတ်ပင်ထားသောစာရင်းများ",
          person: "လူပုဂ္ဂိုလ်များ",
          cancel: "ပယ်ဖျက်ရန်",
          noblockuser: "ပိတ်ပင်ထားသောသူများမရှိပါ",
        },
        waitingList: {
          title: "စောင့်ဆိုင်းနေသောစရင်းများ",
          friend: {
            title: "လူပုဂ္ဂိုလ်များ",
            cancel: "ပယ်ဖျက်ရန်",
            block: "ပိတ်ပင်ရန်",
          },
          group: {
            title: "အဖွဲ့အစည်းများ",
            cancel: "ပယ်ဖျက်ရန်",
          },
          nowaitingaccept: "စောင့်ဆိုင်းနေသောစရင်မရှိပါ",
        },
        logout: {
          header: "အကောင့်မှထွက်ရန်",
          body: "အ‌ကောင့်မှထွက်ရန်သေချာပါသလား",
        },
        changeLanguage: "ဘာသာစကားပြောင်းလဲရန်",
        changeLanguageModel: {
          header: "ဘာသာစကားပြောင်းလဲခြင်း",
          selectedLanguage: "လက်ရှိအသုံးပြုနေသောဘာသာစကား",
          btn: {
            ok: "ပြောင်းလဲရန်",
            cancel: "ပယ်ဖျက်ရန်",
          },
        },
        confirmationAlert: {
          ok: "ဆက်ရန်",
          cancel: "ပယ်ဖျက်ရန်",
        },
        accountdeactivation: {
          header: "အ‌ကောင့်အားဖျတ်သိမ်းရန်",
          body: "အကောင်းအားအပြီးတိုင်ဖျတ်သိမ်းမှုဖြစ်ပြီးသင်၏အ‌ကောင့်အားပြန်လည်ရရှိနိုင်ခြင်းမရှိတော့ပါ",
        },
        friendmenuboxandFribaritem: {
          unfriend: {
            header: "သူငယ်ချင်းအဖြစ်မှပယ်ဖျက်ခြင်း",
            body: "သူငယ်ချင်းအဖြစ်မှပယ်ဖျက်ရန်သေချာပါသလား",
          },
          block: {
            header: "ပိတ်ပင်တာဆီးခြင်း",
            body: "ပိတ်ပင်တာဆီးပါကတစ်ဦးနှစ်တစ်ဦးဆက်သွယ်ရတော့မည်မဟုတ်ပါ",
          },
          deletechat: {
            header: "ပြောစကားများအားဖျက်ပစ်ခြင်း",
            body: "ပြောစကားများအားဖျက်ပစ်ရန်သေချာပါသလား",
          },
        },
        groupMenuBoxdetail: {
          managemember: {
            title: "အဖွဲ့",
            member: {
              header: "အဖွဲ့ဝင်များ",
              admin: "တည်ထောင်သူ",
              member: "အဖွဲ့ဝင်",
            },
            accept: {
              header: "လက်ခံရန်",
              accept: "လက်ခံပါသသည်",
              reject: "လက်မခံပါ",
            },
            add: "ပေါင်းထည့်ရန်",
          },
          editgroup: {
            title: "အချက်အလက်ပြင်ဆင်ရန်",
            name: "အမည်",
            type: "အမျိုးအစား",
            cancel: "ပယ်ဖျက်ရန်",
            update: "ပြင်ဆင်ရန်",
            restorephoto: "နဂိုပုံအားပြန်လည်ထားရိုရန်",
            removeimage: "ဓါတ်ပုံအားဖျက်ထုတ်ရန်",
            removeselected: "ရွေးချယ်ထားသောပုံအားပယ်ဖျက်ရန်",
            alert: {
              groupupdatesuccessfully: "အချက်အလက်များပြင်ဆင်ပြီးပါပြီး",
              invaliddata: {
                body: "ပြန်လည်စစ်ဆေးပါ",
                title: "အချက်အလက်များမှားယွင်းနေပါသည်",
              },
              noupdatedata: {
                title: "အချက်အလက်ပြင်ဆင်ခြင်း",
                body: "အချက်အလက်များမရှိပါ",
              },
              nodata: {
                title: "အချက်အလက်ပြင်ဆင်ခြင်း",
                body: "ပြောင်းလဲလိုသောအချက်အလက်များထည့်ပါ",
              },
            },
          },
          deletegroup: {
            header: "အဖွဲ့အားဖျက်ပြစ်ရန်",
            body: "အဖွဲ့အားဖျက်ပစ်ရန်သေချာပါသလား",
          },
        },
        createGroup: {
          title: "အဖွဲ့အသစ်တည်ထောင်ရန်",
          name: "အဖွဲ့အမည်အားရိုက်နှိပ်ပါ",
          type: "အဖွဲ့အမျိုးအစားအားရိုက်နှိပ်ပါ",
          creategroupbutton: "အဖွဲ့ပြုလုပ်ပါ",
          cancelbutton: "ပယ်ဖျက်ပါ",
        },
        leaveGroup: {
          title: "အဖွဲ့ဝင်အဖြစ်မှထွက်ရန်",
          body: "အဖွဲဝင်ဖြစ်ရန်ပြန်လည်တောင်းခံနိုင်ပါသည်",
        },
        memberList: {
          title: "အဖွဲ့ဝင်များ",
          total: "စုစုပေါင်း",
          message: "အဖွဲ့ဝင်များစာရင်း",
          admin: "တည်ထောင်သူ",
          member: "အဖွဲ့ဝင်",
        },
        sendingFile: {
          file: "ဖွိုင်",
          sending: "‌ပေးပို့နေပါသည်...",
          waiting: "စောင့်ဆိုင်းနေပါသည်",
          message: "စာတို",
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
        state.activePreference.language = state.language.english;
      }
    },
  },
});
export const { setActiveLanguage } = preference.actions;
export default preference.reducer;
