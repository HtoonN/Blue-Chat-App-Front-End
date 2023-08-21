import axios from "axios";

const addMoreDatas = (data, page, setLoading, dispatch) => {
  setLoading(true);
  axios({
    method: "get",
    url: data.url
      ? data.url
      : `${process.env.REACT_APP_API_A}/${data.path}/${page}`,
    withCredentials: true,
  })
    .then((result) => {
      if (result.status === 200) {
        dispatch(
          data.function({
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
