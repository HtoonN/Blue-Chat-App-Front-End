import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "../Images/logo.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import SendRounded from "@mui/icons-material/SendRounded";
import ArrowForwardIos from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import {
  setBlockListModel,
  setFriendListSideBar,
  setFriendRequestModel,
} from "../Redux/Reducer/OpenCloseReducer";
import logOutControl from "../Utlities/LogOutControl";
import findFriendsControl from "../Utlities/FindFriendsControl";
import { AccountCircle, PersonAdd } from "@mui/icons-material";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();
  const profileDatas = useSelector((state) => state.userDatas.profileDatas);
  let profileimage = {};

  if (profileDatas.profileImage) {
    profileimage = changeImageStringToObj(profileDatas.profileImage);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [searchText, setSearchText] = React.useState("");
  const [notibadge] = React.useState(1);

  const friendListSideBar = useSelector(
    (state) => state.openClose.friendListSideBar
  );

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const friendListControl = () => {
    dispatch(setFriendListSideBar());
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          dispatch(setBlockListModel());
        }}
      >
        Blocked List
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Waiting Accept</MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          logOutControl(dispatch);
        }}
      >
        Logout
      </MenuItem>
      <MenuItem sx={{ color: "red" }} onClick={handleMenuClose}>
        Delete Account
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        onClick={() => {
          console.log("NOit");
        }}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={notibadge} color="error">
            <NotificationsIcon sx={{ color: "#1e3a8a" }} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem
        onClick={() => {
          dispatch(setFriendRequestModel());
        }}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={notibadge} color="error">
            <PersonAdd sx={{ color: "#1e3a8a" }} />
          </Badge>
        </IconButton>
        <p>Friend Request</p>
      </MenuItem>

      <MenuItem>{profileDatas.username}</MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar>
            {profileDatas.profileImage ? (
              <img
                src={`http://localhost:3001/api/v1/account/user/get_image/${profileimage.public_id}/${profileimage.version}/${profileimage.format}/${profileimage.resource_type}`}
              />
            ) : (
              <AccountCircle className="text-blue-900" />
            )}
          </Avatar>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          height: { xs: "60px", md: "60px" },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, display: { md: "none" }, color: "#1e3a8a" }}
            onClick={friendListControl}
          >
            <ArrowForwardIos
              className={
                friendListSideBar
                  ? "transition scale-75 transform rotate-0"
                  : "transition scale-75 transform rotate-180"
              }
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            className="cursor-pointer active:saturate-200 "
            onClick={() => {
              location.reload();
            }}
          >
            <img src={Logo} className="w-16 h-full" />
          </Typography>

          <Box
            sx={{
              color: "#1e3a8a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    findFriendsControl(searchText, dispatch);
                  }
                }}
              />
            </Search>
            <Button onClick={() => findFriendsControl(searchText, dispatch)}>
              <SendRounded sx={{ color: "#1e3a8a" }} />
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => {
                console.log("NOit");
              }}
            >
              <Badge badgeContent={notibadge} color="error">
                <NotificationsIcon sx={{ color: "#1e3a8a" }} />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => {
                dispatch(setFriendRequestModel());
              }}
            >
              <Badge badgeContent={notibadge} color="error">
                <PersonAdd sx={{ color: "#1e3a8a" }} />
              </Badge>
            </IconButton>

            <Typography className="text-blue-900 pl-5">
              {profileDatas.username}
            </Typography>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar>
                {profileDatas.profileImage ? (
                  <img
                    src={`http://localhost:3001/api/v1/account/user/get_image/${profileimage.public_id}/${profileimage.version}/${profileimage.format}/${profileimage.resource_type}`}
                  />
                ) : (
                  <AccountCircle className="text-blue-900" />
                )}
              </Avatar>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, color: "#1e3a8a" }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
