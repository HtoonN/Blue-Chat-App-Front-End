import axios from "axios";

const addMoreDatas = (path, page, setLoading, dispatch, addFunction) => {
  setLoading(true);
  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_A}/${path}/${page}`,
    withCredentials: true,
  })
    .then((result) => {
      if (result.status === 200) {
        dispatch(
          addFunction({
            data: result.data.data,
            nextPage: result.data.nextPage,
          })
        );
      }

      setLoading(false);
    })
    .catch((e) => {
      console.log(e.response.data);
      setLoading(false);
    });
};
export default addMoreDatas;
