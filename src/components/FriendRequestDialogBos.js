import React from "react";
import FriendRequestMenu from "./FriendRequestMenu";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const FriendRequestDialogBos = () => {
  const friendRequest = useSelector((state) => state.userDatas.requested.list);

  /*
  const morePage = useSelector((state) => state.userDatas.requested.nextPage);

  const dispatch = useDispatch();
  const scrollRef = useRef();
  const [first, setFirst] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0.99,
  });

    const arr2 = [
    { userId: "add", username: "add1", profileImage: "" },
    { userId: "add", username: "addetr", profileImage: "" },
    { userId: "add", username: "addrdgx", profileImage: "" },
    { userId: "add", username: "addtghfdv", profileImage: "" },
    { userId: "add", username: "addjthf", profileImage: "" },
    { userId: "add", username: "addfhgnfb", profileImage: "" },
  ];
 
  const fun = () => {
    console.log("Clicked");
    dispatch(setRequested({ data: arr2, nextPage: false }));
  };

  useEffect(() => {
    console.log(inView);
    if (inView) {
      dispatch(addMoreRequested());
      scrollRef.current?.scrollIntoView();
      setFirst(false);
    }
  }, [inView]);

  useEffect(() => {
    if (first) {
      scrollRef.current?.lastElementChild?.scrollIntoView();
    }
  });
  */

  return (
    <Box
      sx={{ pt: 0 }}
      className="w-[350px] h-[500px] bg-white p-2 overflow-scroll md:w-[400px]"
    >
      <div className="w-full h-[calc(100%_-_32px)] flex flex-col justify-start items-center">
        {friendRequest.length ? (
          <div className="w-full h-full overflow-y-scroll">
            {/* <div
              ref={ref}
              className="w-full h-24 bg-blue-500 "
              onClick={() => fun()}
            >
              {morePage ? "See More" : "all"}
            </div> */}
            <div
            //ref={scrollRef}
            >
              {friendRequest.map((arr, index) => {
                const data = arr;
                return <FriendRequestMenu arr={data} key={index} />;
              })}
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            No Friend Request
          </div>
        )}
      </div>
    </Box>
  );
};

export default FriendRequestDialogBos;
